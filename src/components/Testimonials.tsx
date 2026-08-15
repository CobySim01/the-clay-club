'use client';

import { testimonials } from '@/lib/testimonials';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

/** How long each testimonial stays on screen before auto-advancing. */
const AUTOPLAY_MS = 9000;

// The quotes vary a lot in length, so the track follows the height of the one
// on screen instead of standing as tall as the longest.
const useHeightEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

function ChevronIcon({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6'} />
    </svg>
  );
}

/**
 * Testimonial carousel: swipe or use the arrows to read through, and it
 * advances on its own until the reader interacts with (or pauses) it.
 *
 * Built on a scroll-snap track so touch swiping and keyboard scrolling work
 * natively; the dots mirror whatever the track is actually showing.
 */
export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [trackHeight, setTrackHeight] = useState<number>();

  // The live index, so repeated clicks and the autoplay tick always advance
  // from where the track actually is rather than from a stale render.
  const indexRef = useRef(0);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (i + testimonials.length) % testimonials.length;
    indexRef.current = next;
    // Update straight away so the dots and height respond to the click; the
    // scroll listener below keeps things honest when the reader swipes instead.
    setIndex(next);
    track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' });
  }, []);

  const step = useCallback(
    (delta: number) => goTo(indexRef.current + delta),
    [goTo]
  );

  // Track the on-screen slide's height, re-measuring whenever it could reflow
  // (viewport resize or rotation, late font swap).
  useHeightEffect(() => {
    const slide = slideRefs.current[index];
    if (!slide) return;
    const measure = () => setTrackHeight(slide.offsetHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(slide);
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [index]);

  // Keep the dots in sync with the track, however it was scrolled.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      if (!track.clientWidth) return;
      const at = Math.round(track.scrollLeft / track.clientWidth);
      indexRef.current = at;
      setIndex(at);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-advance, unless the reader paused it, is interacting with it, prefers
  // reduced motion, or has the tab in the background.
  useEffect(() => {
    if (!playing || interacting) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = window.setInterval(() => {
      if (!document.hidden) step(1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [playing, interacting, step]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="What our students say"
      className="mx-auto max-w-prose px-6"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={() => setInteracting(false)}
      onTouchStart={() => setInteracting(true)}
    >
      <h2 className="sr-only">What our students say</h2>

      <div className="relative">
        <div
          ref={trackRef}
          tabIndex={0}
          aria-label="Testimonials, use the arrow keys to scroll"
          style={{ height: trackHeight }}
          className="no-scrollbar flex snap-x snap-mandatory items-stretch overflow-x-auto overscroll-x-contain rounded-md transition-[height] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay-orange motion-reduce:transition-none"
          onKeyDown={e => {
            if (e.key === 'ArrowRight') {
              e.preventDefault();
              step(1);
            } else if (e.key === 'ArrowLeft') {
              e.preventDefault();
              step(-1);
            }
          }}
        >
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${testimonials.length}`}
              className="flex w-full shrink-0 snap-center flex-col justify-center border-l-8 border-clay-orange bg-clay-brown text-center"
            >
              <div
                ref={el => {
                  slideRefs.current[i] = el;
                }}
                className="px-7 py-9 sm:px-12 sm:py-11"
              >
                <blockquote className="font-body text-base italic leading-relaxed text-white sm:text-lg">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 font-body text-sm not-italic text-white/70">
                  {/* No font-semibold: Garet has no 600, so it jumps to Heavy
                      (800). The white/dimmed contrast carries the emphasis. */}
                  <span className="block text-white">{t.name}</span>
                  {t.detail && <span className="block">{t.detail}</span>}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous testimonial"
          className="rounded-full p-2 text-clay-brown transition-colors hover:bg-clay-brown/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-orange"
        >
          <ChevronIcon dir="left" />
        </button>

        <div className="flex items-center gap-2.5 px-1">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
              aria-current={i === index}
              className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-orange ${
                i === index
                  ? 'bg-clay-orange'
                  : 'bg-clay-brown/25 hover:bg-clay-brown/40'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next testimonial"
          className="rounded-full p-2 text-clay-brown transition-colors hover:bg-clay-brown/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-orange"
        >
          <ChevronIcon dir="right" />
        </button>

        <button
          type="button"
          onClick={() => setPlaying(p => !p)}
          aria-label={
            playing ? 'Pause testimonials' : 'Play testimonials automatically'
          }
          className="ml-1 rounded-full p-2 text-clay-brown transition-colors hover:bg-clay-brown/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-orange"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            {playing ? (
              <path d="M8 5h3v14H8zM13 5h3v14h-3z" />
            ) : (
              <path d="M8 5l11 7-11 7z" />
            )}
          </svg>
        </button>
      </div>
    </section>
  );
}

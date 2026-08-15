'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

/**
 * A single tile. `span` is the width it occupies in the 1366px design grid;
 * `fit` is the photo's placement inside that frame as [width%, height%, left%,
 * top%], measured off the design render (see the note in `src/lib/site.ts`).
 */
export type GalleryTile = {
  src: string;
  w: number;
  h: number;
  span: number;
  fit: readonly [number, number, number, number];
};
/** One design row. `h` is the row's height in design px. */
export type GalleryRow = { h: number; tiles: readonly GalleryTile[] };

/** The design is laid out on a 1366px canvas; all spans/heights are relative to it. */
const DESIGN_WIDTH = 1366;

/** Horizontal swipe distance (px) that counts as "next/previous". */
const SWIPE_THRESHOLD = 45;

function Chevron({
  dir,
  className,
}: {
  dir: 'left' | 'right';
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6'} />
    </svg>
  );
}

/**
 * Flush mosaic that reproduces the Canva design row for row: each row keeps the
 * design's aspect ratio and each tile the share of the row it was given, so the
 * whole grid scales as one block. Below `sm` the rows collapse to two columns —
 * four tiles across is unreadable on a phone — but the reading order stays
 * row-major, so it still matches the design top-to-bottom.
 *
 * Tapping a tile opens an in-page lightbox the reader can page through with
 * arrows, keys or a swipe — it never leaves the site.
 */
export default function Gallery({
  rows,
  label,
}: {
  rows: readonly GalleryRow[];
  /** Describes the set, e.g. "Ceramic piece" — used for alt text and labels. */
  label: string;
}) {
  // The lightbox pages through every tile in one flat, design-order sequence.
  const flat = useMemo(() => rows.flatMap(row => row.tiles), [rows]);

  const [openAt, setOpenAt] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const isOpen = openAt !== null;

  const close = useCallback(() => setOpenAt(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenAt(current =>
        current === null
          ? current
          : (current + delta + flat.length) % flat.length
      ),
    [flat.length]
  );

  const open = (i: number) => {
    restoreFocusTo.current = document.activeElement as HTMLElement | null;
    setOpenAt(i);
  };

  // Lock background scrolling while the lightbox is up.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // Move focus into the dialog, and back to the tile when it closes.
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus();
    } else {
      restoreFocusTo.current?.focus();
      restoreFocusTo.current = null;
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, close, step]);

  const current = openAt === null ? null : flat[openAt];

  // Running index across rows, so tile n maps to the nth entry of `flat`.
  let index = 0;

  return (
    <>
      <div className="mx-auto max-w-6xl">
        {rows.map((row, ri) => (
          <div
            key={ri}
            className="mosaic-row"
            style={
              {
                '--row-cols': row.tiles.map(t => `${t.span}fr`).join(' '),
                '--row-ratio': `${DESIGN_WIDTH} / ${row.h}`,
              } as React.CSSProperties
            }
          >
            {row.tiles.map(tile => {
              const i = index++;
              const [fw, fh, fx, fy] = tile.fit;
              return (
                <button
                  key={tile.src}
                  type="button"
                  onClick={() => open(i)}
                  aria-label={`${label} ${i + 1} — open larger view`}
                  className="mosaic-cell group relative block overflow-hidden focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-clay-orange"
                  style={
                    {
                      '--fit-w': `${fw}%`,
                      '--fit-h': `${fh}%`,
                      '--fit-x': `${fx}%`,
                      '--fit-y': `${fy}%`,
                    } as React.CSSProperties
                  }
                >
                  <Image
                    src={tile.src}
                    alt={`${label} ${i + 1}`}
                    width={tile.w}
                    height={tile.h}
                    sizes={`(max-width: 640px) 50vw, (max-width: 1152px) ${Math.round((tile.span / DESIGN_WIDTH) * 100)}vw, ${Math.round((tile.span / DESIGN_WIDTH) * 1152)}px`}
                    className="transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {current && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${label} ${openAt! + 1} of ${flat.length}`}
          tabIndex={-1}
          onClick={close}
          onTouchStart={e => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={e => {
            const start = touchStartX.current;
            touchStartX.current = null;
            if (start === null) return;
            const delta = e.changedTouches[0].clientX - start;
            if (Math.abs(delta) > SWIPE_THRESHOLD) step(delta < 0 ? 1 : -1);
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 outline-none backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close larger view"
            className="absolute right-3 top-3 z-10 rounded-full p-2.5 text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-5 sm:top-5"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-1 z-10 rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:left-4"
          >
            <Chevron dir="left" className="h-8 w-8 sm:h-10 sm:w-10" />
          </button>

          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-1 z-10 rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-4"
          >
            <Chevron dir="right" className="h-8 w-8 sm:h-10 sm:w-10" />
          </button>

          {/* Clicking the image itself shouldn't dismiss the lightbox. */}
          <Image
            key={current.src}
            src={current.src}
            alt={`${label} ${openAt! + 1}`}
            width={current.w}
            height={current.h}
            sizes="100vw"
            priority
            onClick={e => e.stopPropagation()}
            className="max-h-[82vh] w-auto max-w-[88vw] object-contain"
          />

          <p className="pointer-events-none absolute bottom-4 left-0 right-0 text-center font-body text-sm text-white/70">
            {openAt! + 1} / {flat.length}
          </p>
        </div>
      )}
    </>
  );
}

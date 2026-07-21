export function QuoteBox({ children }: { children: React.ReactNode }) {
  return (
    <figure className="mx-auto max-w-prose overflow-hidden rounded-md border-l-8 border-clay-orange bg-clay-brown">
      <blockquote className="px-7 py-9 text-center font-body text-lg italic leading-relaxed text-white sm:px-12 sm:py-11 sm:text-xl">
        {children}
      </blockquote>
    </figure>
  );
}

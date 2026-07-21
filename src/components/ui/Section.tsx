import { cn } from '@/lib/cn';

/** Centered, padded content column for text/headings/buttons. */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto max-w-prose px-6', className)}>{children}</div>
  );
}

/** Vertical spacing wrapper for a page section. */
export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('py-14 sm:py-20', className)}>{children}</section>
  );
}

/** Big all-caps display headline. Defaults to <h1>; pass `as="h2"` for
 * secondary section headings so each page keeps a single <h1>. */
export function Heading({
  children,
  className,
  as: Tag = 'h1',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2';
}) {
  return <Tag className={cn('headline', className)}>{children}</Tag>;
}

/** Centered body paragraph. */
export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn('prose-block', className)}>{children}</p>;
}

/**
 * TypingHeadline — rotates through headlines with a typewriter effect.
 * Fully responsive; auto-advances after each phrase completes.
 */
import { useEffect, useState } from "react";

export function TypingHeadline({ phrases, className }: { phrases: readonly string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const speed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 3000);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle animate-pulse" />
    </span>
  );
}

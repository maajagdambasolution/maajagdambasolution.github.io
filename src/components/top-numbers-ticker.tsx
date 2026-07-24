"use client";

import { useEffect, useState } from "react";

type TopNumbersTickerProps = {
  numbers: string[];
  prefix?: string;
};

export function TopNumbersTicker({
  numbers,
  prefix = "+91 ",
}: TopNumbersTickerProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const activeNumber = numbers[wordIndex] ?? "";
  const visibleText = activeNumber.slice(0, charIndex);

  useEffect(() => {
    if (!numbers.length) {
      return;
    }

    let delay = isDeleting ? 65 : 100;

    if (!isDeleting && charIndex === activeNumber.length) {
      delay = 2100;
    } else if (isDeleting && charIndex === 0) {
      delay = 380;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < activeNumber.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else if (charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % numbers.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [activeNumber.length, charIndex, isDeleting, numbers.length]);

  return (
    <div className="top-call-list" aria-live="polite">
      <span className="top-call-chip" key={activeNumber || "number"}>
        <span className="top-call-prefix">{prefix}</span>
        <span className="top-call-text">{visibleText || " "}</span>
        <span className="typed-caret" aria-hidden="true">
          |
        </span>
      </span>
    </div>
  );
}
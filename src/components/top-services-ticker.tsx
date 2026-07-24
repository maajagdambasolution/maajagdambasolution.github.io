"use client";

import { useEffect, useState } from "react";

type TopServicesTickerProps = {
  services: string[];
};

export function TopServicesTicker({ services }: TopServicesTickerProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const activeWord = services[wordIndex] ?? "";
  const visibleText = activeWord.slice(0, charIndex);

  useEffect(() => {
    if (!services.length) {
      return;
    }

    let delay = isDeleting ? 55 : 95;

    if (!isDeleting && charIndex === activeWord.length) {
      delay = 1900;
    } else if (isDeleting && charIndex === 0) {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < activeWord.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else if (charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % services.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [activeWord.length, charIndex, isDeleting, services.length]);

  return (
    <div className="top-services-list" aria-live="polite">
      <span className="top-service-chip" key={activeWord || "service"}>
        <span className="typed-text">{visibleText || " "}</span>
        <span className="typed-caret" aria-hidden="true">
          |
        </span>
      </span>
    </div>
  );
}
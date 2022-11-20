"use client";

import type { FC } from "react";
import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Presentation: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef(false);
  const entry = useIntersectionObserver(containerRef, {});

  const isVisible = !!entry?.isIntersecting;

  if (isVisible) {
    lockRef.current = true;
  }

  return (
    <section className="flex justify-center items-center pb-20">
      <div ref={containerRef} className="overflow-hidden rounded-2xl max-w-4xl relative w-full pt-[56.25%] h-[600px]'">
        {lockRef.current && (
          <iframe
            src="https://www.youtube.com/embed/9bZkp7q19f0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>
    </section>
  );
};

export default Presentation;
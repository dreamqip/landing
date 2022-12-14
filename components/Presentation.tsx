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
    <section className="flex flex-col justify-center items-center relative pb-20" id="about">
      <h2 className="uppercase text-center text-white text-[36px] leading-[44px] font-bold mb-8">Presentation</h2>
      <div ref={containerRef} className="overflow-hidden rounded-2xl max-w-4xl relative w-full pt-[56.25%] h-[600px]'">
        {lockRef.current && (
          <iframe
            src="https://www.youtube.com/embed/m4mAHkytqys"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>
      <div className="blur-[120px] opacity-20 bg-[#BA50DF] absolute top-1/3 right-0 z-[1] w-[400px] h-[400px]"></div>
    </section>
  );
};

export default Presentation;
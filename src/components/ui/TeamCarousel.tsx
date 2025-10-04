"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type TeamMember = {
  name: string;
  role: string;
  img: string;
  description?: string;
  linkedinUrl?: string;
};

type TeamCarouselProps = {
  members: TeamMember[];
  intervalMs?: number;
};

export default function TeamCarousel({ members, intervalMs = 2500 }: TeamCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(1200);
  const [mounted, setMounted] = useState(false);
  const total = members.length;
  const hoverRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reduceMotionRef = useRef(false);

  const goTo = useCallback((i: number) => {
    setIndex((i + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      setContainerWidth(containerRef.current.clientWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      reduceMotionRef.current = e.matches;
    };
    try {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } catch {
      // @ts-ignore Safari
      mq.addListener(handler);
      return () => {
        // @ts-ignore Safari
        mq.removeListener(handler);
      };
    }
  }, []);

  useEffect(() => {
    if (reduceMotionRef.current || isPaused || total <= 1) return;
    const id = setInterval(() => {
      setIndex((v) => (v + 1) % total);
    }, intervalMs);
    return () => clearInterval(id);
  }, [isPaused, total, intervalMs]);

  const ordered = useMemo(() => {
    return members.map((_, i) => members[(index + i - 2 + total) % total]);
  }, [members, index, total]);

  const isSmall = typeof window !== "undefined" ? window.innerWidth < 640 : false;
  const cardWidth = isSmall ? 340 : 420;
  const baseSpread = Math.round(cardWidth * 0.85);
  const edgePadding = 24;
  const maxSpreadByBounds = Math.max(0, Math.floor((containerWidth - cardWidth - 2 * edgePadding) / 4));
  const spread = Math.max(0, Math.min(baseSpread, maxSpreadByBounds));

  return (
    <div className="w-full relative" aria-live="polite">
      {/* Simple container without 3D effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Simple static background elements */}
      </div>
      
      <div
        ref={hoverRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative max-w-[1400px] mx-auto h-[700px] sm:h-[750px] flex items-center justify-center overflow-hidden"
      >
        <div ref={containerRef} className="relative w-full h-full">
          {/* Simple background elements */}
          <div className="absolute inset-0 z-0">
            {/* Static background elements */}
            <div
              className="absolute w-24 h-24 rounded-lg bg-blue-500/10 blur-sm"
              style={{
                top: '15%',
                left: '10%',
              }}
            />
            <div
              className="absolute w-32 h-32 rounded-full bg-purple-500/10 blur-sm"
              style={{
                top: '60%',
                right: '15%',
              }}
            />
            
            {/* Simple gradient lines */}
            <div
              className="absolute w-[200px] h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0"
              style={{
                top: '30%',
                left: '20%',
              }}
            />
            <div
              className="absolute w-[300px] h-[3px] bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0"
              style={{
                top: '70%',
                right: '25%',
              }}
            />
            
            {/* Simple dots */}
            <div
              className="absolute w-6 h-6 rounded-full bg-blue-400/30 blur-md"
              style={{
                top: '20%',
                right: '30%',
              }}
            />
            <div
              className="absolute w-4 h-4 rounded-full bg-purple-400/30 blur-md"
              style={{
                bottom: '25%',
                left: '35%',
              }}
            />
            
            {/* Simple circles */}
            <div
              className="absolute w-40 h-40 border border-blue-500/20 rounded-full"
              style={{
                top: '40%',
                left: '25%',
              }}
            />
            <div
              className="absolute w-60 h-60 border border-purple-500/10 rounded-full"
              style={{
                bottom: '20%',
                right: '20%',
              }}
            />
          </div>
          {ordered.slice(0, 5).map((m, i) => {
            const isActive = i === 2;
            const offset = i - 2; // -2,-1,0,1,2
            const translateX = offset * spread;
            const offsetY = 0; // no vertical offset
            const rotate = isActive ? 0 : offset < 0 ? -15 : 15;
            const scale = isActive ? 1 : Math.abs(offset) === 1 ? 0.92 : 0.86; // smaller side cards
            const z = isActive ? 80 : 40 - Math.abs(offset); // center clearly on top
            const opacity = isActive ? 1 : 0.6;

            return (
              <button
                type="button"
                onClick={() => goTo((index + offset + total) % total)}
                key={m.name}
                className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] will-change-transform focus:outline-none transition-transform duration-400 ease-[cubic-bezier(0.3,0.7,0.4,1)]"
                style={{
                    transformOrigin: "50% 100%",
                    transform: `translateX(${translateX}px) translateY(${offsetY}px) rotate(${rotate}deg) scale(${scale})`,
                    zIndex: z,
                    opacity,
                  }}
                aria-label={isActive ? `${m.name}, active` : `View ${m.name}`}
              >
                <div className={`relative w-[340px] sm:w-[420px] h-[560px] sm:h-[620px] rounded-[22px] overflow-hidden shadow-[0_20px_60px_rgba(30,64,175,0.30)] bg-gradient-to-br from-slate-800/40 via-blue-900/40 to-slate-800/40 backdrop-blur-sm border border-blue-500/30 transition-all duration-500 hover:shadow-[0_30px_100px_rgba(30,64,175,0.6)] hover:shadow-blue-500/40 hover:scale-[1.05] hover:-translate-y-2 hover:rotate-y-3 hover:rotate-x-2 ${isActive ? "ring-4 ring-blue-300/70 shadow-[0_40px_120px_rgba(30,64,175,0.5)] shadow-blue-500/50" : "ring-0"}`}>
                  <div className="relative h-[76%] w-full">
                    <Image
                      src={m.img}
                      alt={`${m.name} - ${m.role}`}
                      fill
                      sizes="(max-width: 640px) 340px, 420px"
                      className="object-cover object-top"
                      priority={isActive}
                    />
                  </div>
                  <div className="h-[24%] w-full bg-gradient-to-b from-slate-700/80 to-slate-800/95 text-blue-50 px-5 sm:px-6 pt-4 pb-5 flex flex-col justify-between border-t border-blue-300/20">
                    <div className="min-h-0">
                      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-tight text-blue-50">{m.name}</h3>
                      <div className="text-[0.95rem] sm:text-base text-blue-200 font-semibold mt-0.5">{m.role}</div>
                    </div>
                    <div className="mt-2 flex items-center gap-3">
                      {m.description ? (
                        <p className="text-[0.85rem] text-blue-100/95 leading-snug line-clamp-2 flex-1">
                          {m.description}
                        </p>
                      ) : <span className="flex-1" />}
                      {m.linkedinUrl ? (
                        <a
                          href={m.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-300/50 bg-blue-700/50 hover:bg-blue-600/60 transition-colors shadow-[0_0_18px_rgba(30,64,175,0.35)]"
                          aria-label={`${m.name} LinkedIn`}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-purple-50">
                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.15V23h-4v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.93V23h-4V8z"/>
                          </svg>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/** Arrow controls removed per request; autoplay and click still available */}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {members.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${i === index ? "bg-purple-400 w-5" : "bg-purple-900/40"}`}
          />
        ))}
      </div>

      
    </div>
  );
}

"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type VideoPlayerProps = {
  src: string;
  cover: string;
  title: string;
  className?: string;
  autoPlay?: boolean;
  aspect?: string;
};

export function VideoPlayer({
  src,
  cover,
  title,
  className = "",
  autoPlay = false,
  aspect = "aspect-video",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function handlePlay() {
    const video = videoRef.current;
    if (!video) return;

    setError(null);

    // Always start muted to satisfy browser autoplay policy
    video.muted = true;
    video.currentTime = 0;

    try {
      await video.play();
      setStarted(true);
      setMuted(true);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      setError("Tap to retry");
      setStarted(false);
    }
  }

  async function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !muted;
    video.muted = nextMuted;
    setMuted(nextMuted);
  }

  return (
    <div className={`relative ${aspect} overflow-hidden bg-black ${className}`}>
      {/* The actual video element — always rendered so it can preload */}
      <video
        key={src}
        ref={videoRef}
        src={src}
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${
          started && !error ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        controls={started && !error && !autoPlay}
        playsInline
        loop={autoPlay}
        muted
        preload="metadata"
        onError={() => {
          setError("Video unavailable.");
          setStarted(false);
        }}
        onEnded={() => {
          if (!autoPlay) setStarted(false);
        }}
      >
        <track kind="captions" />
      </video>

      {/* Thumbnail + play button overlay — shown before play or on error */}
      {(!started || error) && (
        <button
          type="button"
          onClick={handlePlay}
          className="group absolute inset-0 z-10 w-full h-full"
          aria-label={error ? `Retry ${title}` : `Play ${title}`}
        >
          {/* Cover image */}
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
            priority={false}
          />

          {/* Dark overlay */}
          <span className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/25" />

          {/* Red play button */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#ed1c24] text-white shadow-[0_0_40px_rgba(237,28,36,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(237,28,36,1)] sm:h-20 sm:w-20">
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full bg-[#ed1c24] animate-ping opacity-50 pointer-events-none" />

              {error ? (
                <span className="relative z-10 px-2 text-center text-[10px] font-bold uppercase tracking-widest text-white">
                  Retry
                </span>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="relative z-10 ml-1 h-7 w-7 fill-current text-white"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </span>
          </span>

          {/* Error message */}
          {error && (
            <span className="absolute inset-x-0 bottom-4 text-center text-xs font-semibold uppercase tracking-widest text-red-400">
              {error}
            </span>
          )}
        </button>
      )}

      {/* Sound toggle — shown after video starts playing */}
      {started && !error && (
        <button
          type="button"
          onClick={toggleSound}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? (
            /* Muted icon */
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.6 3l3.7-3.7-1.4-1.4-3.7 3.7-3.7-3.7-1.4 1.4L13.8 12l-3.7 3.7 1.4 1.4 3.7-3.7 3.7 3.7 1.4-1.4-3.7-3.7z" />
            </svg>
          ) : (
            /* Unmuted icon */
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 00-2.5-4v8a4.5 4.5 0 002.5-4zM14 3.23v2.06a7 7 0 010 13.42v2.06a9 9 0 000-17.54z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}

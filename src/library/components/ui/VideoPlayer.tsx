"use client";

import { useEffect, useRef, useState } from "react";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";

interface VideoPlayerProps {
  src: string;
  loop?: boolean;
  autoPlay?: boolean;
  className?: string;
}

export default function VideoPlayer({
  src,
  loop = false,
  autoPlay = false,
  className = "",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (autoPlay) {
      video.play();
      setPlaying(true);
    }

    video.volume = volume;
    video.muted = isMuted;

    const onTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, [autoPlay, volume, isMuted]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play();
      setPlaying(true);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * video.duration;
    video.currentTime = newTime;
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  return (
    <div className={`relative select-none ${className}`}>
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full cursor-pointer object-cover"
        loop={loop}
        playsInline
        preload="metadata"
        onClick={togglePlayPause}
      />

      {!playing && (
        <button
          onClick={togglePlayPause}
          aria-label="Play Video"
          className="absolute flex h-28 w-28 cursor-pointer items-center justify-center rounded-full bg-main text-5xl text-white transition-opacity duration-300"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CiPlay1 />
        </button>
      )}

      {playing && (
        <div
          className="absolute bottom-4 left-0 right-0 flex items-center gap-4 px-4 py-2"
          style={{ background: "rgba(0,0,0,0.4)" }}
          dir="ltr"
        >
          <button
            onClick={togglePlayPause}
            aria-label={playing ? "Pause" : "Play"}
            className="text-3xl text-white"
          >
            {playing ? <CiPause1 /> : <CiPlay1 />}
          </button>

          <div
            className="h-1 flex-1 cursor-pointer overflow-hidden rounded bg-gray-600"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-main transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="whitespace-nowrap font-mono text-sm tabular-nums text-white">
            {videoRef.current
              ? `${formatTime(videoRef.current.currentTime)} / ${formatTime(
                  videoRef.current.duration,
                )}`
              : "0:00 / 0:00"}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-xl text-white"
              aria-label="Mute / Unmute"
            >
              {isMuted || volume === 0 ? <HiVolumeOff /> : <HiVolumeUp />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="range-main h-1 w-20 appearance-none rounded bg-gray-600 outline-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function formatTime(seconds: number) {
  if (isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

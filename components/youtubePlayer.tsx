"use client";

import React from "react";
import { useYouTubePlayer } from "../context/YouTubePlayerContext";
import { SlClose } from "react-icons/sl";

const YouTubePlayer: React.FC = () => {
  const { videoId, setVideoId } = useYouTubePlayer();

  if (!videoId) return null; // 비디오 ID가 없으면 아무것도 렌더링하지 않음

  return (
    <div className="fixed z-50 bottom-4 right-4 w-[400px] h-[225px] bg-black rounded-md overflow-hidden shadow-lg group">
      <button
        onClick={() => setVideoId(null)}
        className="absolute top-2 right-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <SlClose size={20} />
      </button>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubePlayer;

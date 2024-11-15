"use client";
import React, { createContext, useContext, useState } from "react";

interface YouTubePlayerContextProps {
  videoId: string | null;
  setVideoId: (id: string | null) => void;
}

const YouTubePlayerContext = createContext<
  YouTubePlayerContextProps | undefined
>(undefined);

export const YouTubePlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [videoId, setVideoId] = useState<string | null>(null);

  return (
    <YouTubePlayerContext.Provider value={{ videoId, setVideoId }}>
      {children}
    </YouTubePlayerContext.Provider>
  );
};

export const useYouTubePlayer = () => {
  const context = useContext(YouTubePlayerContext);
  if (!context) {
    throw new Error(
      "useYouTubePlayer must be used within a YouTubePlayerProvider"
    );
  }
  return context;
};

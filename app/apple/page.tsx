"use client";

import React, { useEffect, useState } from "react";
import { youtubeMusicRankings } from "../../utils/nations";

interface Ranking {
  image: string;
  title: string;
  artist: string;
  ranking: string;
  album: string;
}

export default function ApplePage() {
  const [appleRankings, setAppleRankings] = useState<Ranking[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("south-korea");

  const fetchMusicRankings = async (country: string) => {
    try {
      const response = await fetch(
        `https://websseu.github.io/pythonMusic/apple/${country}/${country}Top100_2024-11-06.json`
      );
      const data = await response.json();
      console.log(`Fetched data for ${country}:`, data);
      setAppleRankings(data);
    } catch (error) {
      console.error("Error fetching music rankings:", error);
    }
  };

  useEffect(() => {
    fetchMusicRankings(selectedCountry);
  }, [selectedCountry]);

  const handleCountryClick = (country: string) => {
    setSelectedCountry(country);
  };

  return (
    <section className="max-w-screen-xl mx-auto mt-8 px-4">
      <div className="flex gap-1 flex-wrap">
        {youtubeMusicRankings.map((youtube, index) => (
          <span
            key={index}
            className={`nation-icon cursor-pointer ${
              selectedCountry === youtube.name
                ? "bg-blue-100 border-blue-700"
                : ""
            }`}
            onClick={() => handleCountryClick(youtube.name)}
          >
            {youtube.icon}
          </span>
        ))}
      </div>
      <div>
        <h2 className="mt-6 poppins mb-1">
          {selectedCountry
            .replace("-", " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())}{" "}
          Top100
        </h2>
        <ul className="border-t border-black">
          {appleRankings.map((ranking, index) => (
            <li
              key={index}
              className="flex items-center border-b border-dashed text-[#6E6E6E] text-sm hover:bg-slate-200 cursor-pointer"
            >
              <span className="px-4">{ranking.ranking}</span>.
              <span className="px-4">{ranking.title}</span>.
              <span className="px-4">{ranking.artist}</span>.
              <span className="px-4">{ranking.album}</span>
              <img
                src={ranking.image}
                alt={ranking.title}
                className="w-12 h-12 ml-auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

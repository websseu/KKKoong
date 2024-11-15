"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface MusicItem {
  ranking: string;
  title: string;
  artist: string;
  album: string;
  image: string;
}

const platforms = [
  { id: "apple", label: "애플 뮤직", icon: "/apple.png" },
  { id: "melon", label: "멜론", icon: "/melon.png" },
  { id: "genie", label: "지니", icon: "/genie.png" },
  { id: "bugs", label: "벅스", icon: "/bugs.png" },
  { id: "flo", label: "플로", icon: "/flo.png" },
  { id: "vibe", label: "바이브", icon: "/vibe.png" },
  { id: "youtube", label: "유튜브 뮤직", icon: "/youtube.png" },
];

export default function KoreaPage() {
  const [data, setData] = useState<MusicItem[]>([]);
  const [platform, setPlatform] = useState("apple");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://websseu.github.io/pythonMusic/korea/${platform}/${platform}Top100_2024-11-06.json`;
      console.log("Fetching data from API:", apiUrl);
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("현재 네트워그가 작동되지 않고 있습니다.");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [platform]);

  const handlePlatformClick = (selectedPlatform: string) => {
    setPlatform(selectedPlatform);
  };

  return (
    <section className="max-w-screen-xl mx-auto mt-10 px-4">
      <div
        id="menu"
        className="flex items-center justify-center gap-2 NanumSquareNeo"
      >
        {platforms.map((item) => (
          <span
            key={item.id}
            data-platform={item.id}
            onClick={() => handlePlatformClick(item.id)}
            className={`flex items-center text-xs gap-2 text-gray-600 border px-2 py-1 rounded-md cursor-pointer ${
              platform === item.id ? "bg-blue-100 border-blue-700" : ""
            }`}
          >
            <Image
              src={item.icon}
              alt={item.id}
              width={20}
              height={20}
              className="rounded-md"
            />
            {item.label}
          </span>
        ))}
      </div>
      <div id="list" className="NanumSquareNeo">
        <div className="flex justify-between items-end">
          <h2 className="mt-6 mb-1">{platform.toUpperCase()} TOP100</h2>
          <time className="text-xs text-[#6E6E6E] pb-2">2024-11-06</time>
        </div>
        <ul className="border-t border-black">
          {loading ? (
            <li className="flex items-center justify-center p-10">
              데이터를 불러오는 중...
            </li>
          ) : error ? (
            <li className="flex items-center justify-center p-10 text-red-500">
              현재 정보를 받아오지 못하고 있습니다.
            </li>
          ) : data.length > 0 ? (
            data.map((item, index) => (
              <li
                key={index}
                className="flex items-center border-b border-dashed text-[#6E6E6E] text-sm hover:bg-slate-200 cursor-pointer"
              >
                <span className="px-4">{item.ranking}</span>.
                <span className="px-4 text-gray-900">{item.title}</span>.
                <span className="px-4 text-[12px]">{item.artist}</span>.
                <span className="px-4 text-[12px]">{item.album}</span>
                <Image
                  width={48}
                  height={48}
                  src={item.image || "/defaultImage.png"}
                  alt={item.title}
                  className="w-12 h-12 ml-auto"
                />
              </li>
            ))
          ) : (
            <li className="flex items-center justify-center p-10">
              현재 정보를 받아오지 못하고 있습니다.
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}

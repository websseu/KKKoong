"use client";

import Link from "next/link";
import { GiMoebiusStar, GiAwareness } from "react-icons/gi";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/korea", label: "Korea" },
  { href: "/apple", label: "Apple" },
  { href: "/popular", label: "Moview" },
  { href: "/best", label: "Trending" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <div
        id="header"
        className="w-full border-black border-b-2 flex items-center justify-between py-2 px-4"
      >
        <div>
          <button className="bg-main w-9 h-9 rounded-full flex items-center justify-center ring ring-gray-300/20 hover:bg-pink-50 bg-[#f8f7f1]">
            <GiMoebiusStar size="20" />
          </button>
        </div>
        <div className="poppins">
          <Link
            href={"/"}
            className="text-8xl font-black uppercase bg-[#f8f7f1] px-4"
          >
            KKKoong
          </Link>
        </div>
        <div className="bg-main w-9 h-9 rounded-full flex items-center justify-center ring ring-gray-300/20 hover:bg-pink-50 bg-[#f8f7f1]">
          <GiAwareness size="20" />
        </div>
      </div>
      <nav className="max-w-screen-xl mx-auto  relative z-10 mt-[-16px]">
        <ul className="flex items-center justify-center gap-4 poppins p-2 text-sm">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`hover:underline underline-offset-4 ${
                  pathname === item.href ? "underline" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

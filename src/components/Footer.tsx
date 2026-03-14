"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#081a3a] text-gray-300 py-10 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <div className="flex items-center justify-center gap-6 mb-6">

          <Image
            src="/shardauniversity.png"
            alt="Sharda University"
            width={50}
            height={60}
            className="object-contain"
          />

        
        </div>
        <p className="text-sm text-gray-400 max-w-4xl mx-auto leading-relaxed">
          University Grants Commission has empowered Sharda University to award the degrees
          under Section 22 of UGC Act 1956. It is a full-fledged University and not a deemed
          University.
        </p>
        <div className="border-t border-gray-600 my-6"></div>
        <p className="text-sm text-gray-400">
          © 2025 Sharda University. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
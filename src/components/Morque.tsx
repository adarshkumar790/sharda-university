"use client";

import { Globe, Sparkles, Star } from "lucide-react";

export default function Marquee() {
    const items = [
        {
            icon: <Globe size={16} />,
            text: "GLOBAL OPPORTUNITIES",
        },
        {
            icon: <Sparkles size={16} className="text-red-400" />,
            text: "ADMISSIONS OPEN 2025",
        },
        {
            icon: <Star size={16} className="text-yellow-400" />,
            text: "NAAC A+ ACCREDITED",
        },
    ];

    return (
        <div className="w-full bg-[#07142A] text-white overflow-hidden">

            <div className="flex whitespace-nowrap animate-marquee py-2">

                {[...items, ...items, ...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 px-10 text-sm font-semibold uppercase tracking-wide"
                    >
                        {item.icon}
                        <span>{item.text}</span>
                    </div>
                ))}

            </div>

        </div>
    );
}
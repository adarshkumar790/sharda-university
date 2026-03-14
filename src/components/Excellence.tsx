"use client";

import {
    Trophy,
    ShieldCheck,
    Medal,
    Crown,
    Globe,
    Rocket,
    FileText,
    Award,
} from "lucide-react";

export default function ExcellenceSection() {
    const cards = [
        {
            title: "NIRF Ranking",
            badge: "TOP 150",
            desc: "Ranked among top universities in India by Ministry of Education",
            icon: Trophy,
            color: "from-yellow-400 to-orange-500",
            badgeColor: "bg-yellow-500",
        },
        {
            title: "NAAC A+",
            badge: "ACCREDITED",
            desc: "Highest grade accreditation for quality education and infrastructure",
            icon: ShieldCheck,
            color: "from-green-400 to-emerald-600",
            badgeColor: "bg-green-500",
        },
        {
            title: "QS I-Gauge",
            badge: "GOLD RATING",
            desc: "Awarded Gold University rating for overall excellence",
            icon: Medal,
            color: "from-blue-400 to-indigo-600",
            badgeColor: "bg-blue-500",
        },
        {
            title: "ASSOCHAM",
            badge: "BEST UNIVERSITY",
            desc: "Recognized for excellence in industry interface and placements",
            icon: Crown,
            color: "from-purple-400 to-violet-600",
            badgeColor: "bg-purple-500",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-[#020c1f] to-[#061a3a] text-white py-24">

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">

                    <div className="inline-flex items-center gap-2 border border-blue-500/40 text-blue-400 px-4 py-1 rounded-full text-sm mb-6">
                        <Award size={14} />
                        HALL OF FAME
                    </div>

                    <h2 className="text-4xl font-bold">
                        Excellence{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                            Recognized
                        </span>
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Our commitment to academic quality and student success has been
                        consistently acknowledged by prestigious national and international bodies.
                    </p>

                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                    {cards.map((card, i) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={i}
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:scale-105 transition text-center flex flex-col items-center"
                            >

                                <div
                                    className={`w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r ${card.color}`}
                                >
                                    <Icon size={24} />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold">
                                    {card.title}
                                </h3>
                                <span
                                    className={`inline-block mt-2 text-xs px-3 py-1 rounded-full ${card.badgeColor}`}
                                >
                                    {card.badge}
                                </span>
                                <div className="w-full h-[1px] bg-white/10 my-4"></div>
                                <p className="text-gray-400 text-sm">
                                    {card.desc}
                                </p>

                            </div>
                        );
                    })}

                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 border-t border-white/10 pt-10 text-center">

                    <div>
                        <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                            <Trophy size={14} />
                            YEAR LEGACY
                        </p>
                        <h3 className="text-3xl font-bold mt-2">27+</h3>
                    </div>

                    <div>
                        <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                            <Globe size={14} />
                            PARTNER UNIVERSITIES
                        </p>
                        <h3 className="text-3xl font-bold mt-2">250+</h3>
                    </div>

                    <div>
                        <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                            <Rocket size={14} />
                            STARTUPS INCUBATED
                        </p>
                        <h3 className="text-3xl font-bold mt-2">100+</h3>
                    </div>

                    <div>
                        <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                            <FileText size={14} />
                            PATENTS PUBLISHED
                        </p>
                        <h3 className="text-3xl font-bold mt-2">500+</h3>
                    </div>

                </div>

            </div>
        </section>
    );
}
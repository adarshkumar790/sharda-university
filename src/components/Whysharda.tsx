"use client";

import { CheckCircle, Globe2, Building2, Users } from "lucide-react";

export default function WhySharda() {
    const features = [
        "NAAC A+ Accredited University",
        "100 acres of lush green eco-friendly campus",
        "Top Ranked Among India's Top 50 Universities",
        "40,000+ Alumni Network across the globe",
        "Distinguished faculty with global experience",
        "On-campus 1200+ bed super-specialty hospital",
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-20">

    
            <div className="grid md:grid-cols-2 gap-16 items-center">

            
                <div>

                    <p className="text-indigo-900 font-semibold tracking-wider text-sm">
                        DISCOVER EXCELLENCE
                    </p>

                    <h2 className="text-4xl font-bold mt-2 leading-snug text-black">
                        Why Study at
                        <br />
                        <span className="text-orange-500">
                            Sharda University?
                        </span>
                    </h2>

                    <ul className="mt-8 space-y-4">
                        {features.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-600">
                                <CheckCircle className="text-blue-500 mt-1" size={20} />
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="relative">

                
                    <div className="absolute -left-10 top-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl opacity-40"></div>

                    <div className="relative bg-gradient-to-br from-[#0c1b3a] via-[#1c2a5a] to-[#0c1b3a] text-white p-8 rounded-3xl shadow-2xl">

                        <h3 className="text-xl font-semibold mb-6">
                            Sharda Advantages
                        </h3>

                        <div className="flex gap-4 bg-white/10 p-4 rounded-xl mb-4">

                            <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                                <Globe2 size={20} />
                            </div>

                            <div>
                                <h4 className="font-semibold">Global Exposure</h4>
                                <p className="text-sm text-gray-300">
                                    Tie-ups with 250+ global universities for exchange programs.
                                </p>
                            </div>

                        </div>

                        
                        <div className="flex gap-4 bg-white/10 p-4 rounded-xl mb-4">

                            <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                                <Building2 size={20} />
                            </div>

                            <div>
                                <h4 className="font-semibold">Industry Ready</h4>
                                <p className="text-sm text-gray-300">
                                    Curriculum designed by industry experts to ensure employability.
                                </p>
                            </div>

                        </div>

                        <div className="flex gap-4 bg-white/10 p-4 rounded-xl">

                            <div className="bg-orange-100 text-orange-600 p-2 rounded-lg">
                                <Users size={20} />
                            </div>

                            <div>
                                <h4 className="font-semibold">Sharda Community</h4>
                                <p className="text-sm text-gray-300">
                                    Students from 95+ countries creating a rich cultural mosaic.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>



            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12 bg-gray-50 p-10 rounded-2xl text-center">

                <div>
                    <h3 className="text-4xl font-bold text-indigo-900">03</h3>
                    <p className="text-gray-500 text-sm mt-1">NOBEL LAUREATES</p>
                </div>

                <div>
                    <h3 className="text-4xl font-bold text-indigo-900">1023+</h3>
                    <p className="text-gray-500 text-sm mt-1">PATENTS</p>
                </div>

                <div>
                    <h3 className="text-4xl font-bold text-indigo-900">200+</h3>
                    <p className="text-gray-500 text-sm mt-1">STARTUPS</p>
                </div>

                <div>
                    <h3 className="text-4xl font-bold text-indigo-900">7+</h3>
                    <p className="text-gray-500 text-sm mt-1">STUDENTS</p>
                </div>

                <div>
                    <h3 className="text-4xl font-bold text-indigo-900">1100+</h3>
                    <p className="text-gray-500 text-sm mt-1">FACULTY</p>
                </div>

            </div>

        </section>
    );
}
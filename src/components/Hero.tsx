"use client";

import Image from "next/image";
import { State } from "country-state-city";
import { useState } from "react";

export default function Hero() {
    const states = State.getStatesOfCountry("IN");
    const [selectedState, setSelectedState] = useState("");
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16 items-center">

            <div>
                <div className="inline-flex items-center bg-white/50 text-indigo-900 font-semibold border border-gray-300 rounded-full px-4 py-2 text-sm mb-6 shadow-sm">

                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>

                    ADMISSIONS OPEN 2025-26

                </div>

                <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mt-8">
                    Empowering
                    <br />

                    <span className="relative inline-block">
                        <span className="relative z-10 text-indigo-900">
                            Future{" "}
                            <span className="bg-gradient-to-r from-indigo-900 to-red-900 text-transparent bg-clip-text">
                                Leaders
                            </span>
                        </span>

                        <span className="absolute left-0 bottom-2 w-full h-6 bg-yellow-300 -z-0"></span>
                    </span>
                </h1>

                <p className="mt-6 text-gray-600 max-w-xl">
                    Join a vibrant community where <b>innovation meets tradition.</b>
                    <br />
                    We foster academic excellence and holistic development for students
                    from over 95 countries.
                </p>
                <div className="flex gap-20 mt-10">
                    <div>
                        <p className="text-gray-500 text-sm">RANKING</p>
                        <h3 className="text-2xl text-indigo-900 font-bold">#1</h3>
                        <p className="text-gray-500 text-sm">Private</p>
                    </div>

                    <div>
                        <p className="text-gray-500 text-sm">DIVERSITY</p>
                        <h3 className="text-2xl font-bold text-indigo-900">95+</h3>
                        <p className="text-gray-500 text-sm">Nations</p>
                    </div>

                    <div>
                        <p className="text-gray-500 text-sm">PLACEMENT</p>
                        <h3 className="text-2xl font-bold text-indigo-900">100%</h3>
                        <p className="text-gray-500 text-sm">Support</p>
                    </div>

                </div>

            </div>

            <div className="flex justify-center">

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-[420px]">

                    <div className="relative h-40">
                        <Image
                            src="/ads.jpg"
                            alt="students"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent p-6 flex flex-col justify-end">
                            <p className="text-yellow-400 text-xs font-semibold">
                                PREMIUM EDUCATION
                            </p>

                            <h3 className="text-white text-xl font-bold">
                                Start Your Journey
                            </h3>
                        </div>
                    </div>
                    <div className="p-6 space-y-6">

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                placeholder="Adarsh Kumar"
                                className="border rounded-lg px-3 py-2 text-sm text-black border-gray-300 w-full"
                            />

                            <input
                                placeholder="adarsh@example.com"
                                className="border rounded-lg px-3 py-2 text-sm text-black border-gray-300 w-full"
                            />
                        </div>

                        <input
                            placeholder="+91 7903848803"
                            className="border rounded-lg px-3 py-2 w-full text-sm text-black border-gray-300"
                        />

                        <div className="grid grid-cols-2 gap-4">

                            <select className="border rounded-lg px-3 py-2 text-sm text-black border-gray-300">
                                <option>Select Program</option>
                            </select>

                            <select
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                                className="border rounded-lg px-3 py-2 text-sm text-black border-gray-300 w-full"
                            >
                                <option value="">Select State</option>

                                {states.map((state) => (
                                    <option key={state.isoCode} value={state.name}>
                                        {state.name}
                                    </option>
                                ))}

                            </select>

                        </div>

                        <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                            Get Started Now
                        </button>

                        <p className="text-xs text-center text-gray-400">
                            By registering, you agree to our Terms & Conditions
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}
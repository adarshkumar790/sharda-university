"use client";

import Image from "next/image";
import { MapPin, ShieldCheck } from "lucide-react";

const universities = [
  {
    country: "USA",
    name: "Harvard Business School",
    type: "Online Certification",
    active: true,
  },
  {
    country: "UNITED KINGDOM",
    name: "University of Plymouth",
    type: "Student Exchange",
  },
  {
    country: "CANADA",
    name: "Western University",
    type: "Research Collaboration",
  },
  {
    country: "AUSTRALIA",
    name: "Curtin University",
    type: "Dual Degree",
  },
];

export default function GlobalTieups() {
  return (
    <section className="w-full bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="text-black ">

            <span className="px-4 py-2 bg-blue-100 text-blue-600 text-sm rounded-full">
              GLOBAL TIE-UPS
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-6 leading-tight">
              Connecting You to
              <br />
              The World's <span className="text-red-500">Best.</span>
            </h2>
            <div className="mt-6 space-y-3">

              {universities.map((uni, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-xl border border-gray-200
                  ${uni.active ? "bg-white shadow-md" : "bg-gray-100"}
                  `}
                >
                  <div>
                    <p className="text-xs text-gray-400">{uni.country}</p>
                    <h4 className="font-semibold">{uni.name}</h4>
                    <p className="text-sm text-gray-500">{uni.type}</p>
                  </div>

                  {uni.active && (
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </div>
              ))}

            </div>

          </div>

          <div>
            <p className="text-gray-600 mb-6 max-w-lg">
              We have established strategic partnerships with over
              <span className="text-blue-600 font-semibold"> 250+ Prestigious Universities </span>
              across the globe to provide our students with limitless opportunities.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[520px]">

              <Image
                src="/harward.jpg"
                alt="Harvard Business School"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute bottom-10 left-10 right-10 text-white">

                <div className="flex items-center gap-3 mb-4 text-sm">

                  <span className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full">
                    <MapPin size={14} /> USA
                  </span>

                  <span className="bg-blue-600 px-3 py-1 rounded-full">
                    Est. 2018
                  </span>

                </div>

                <h3 className="text-3xl font-bold mb-3">
                  Harvard Business School
                </h3>

                <p className="text-gray-200 mb-6">
                  Executive education programs and case study methodologies
                  for business students.
                </p>

                <div className="flex gap-6">

                  <div className="bg-black/40 px-6 py-3 rounded-xl">
                    <p className="text-red-400 font-bold text-lg">15+ Programs</p>
                    <p className="text-xs text-gray-300">ACTIVE</p>
                  </div>

                  <div className="flex items-center gap-2 bg-black/40 px-6 py-3 rounded-xl">
                    <ShieldCheck className="text-green-400" size={18} />
                    <div>
                      <p className="text-sm font-semibold">Verified</p>
                      <p className="text-xs text-gray-300">Partnership Status</p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
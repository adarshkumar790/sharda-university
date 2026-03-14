"use client";

import { useState } from "react";
import Image from "next/image";
import { Monitor, Cpu, Wrench, Briefcase, Scale, Stethoscope, FlaskConical, ArrowRight } from "lucide-react";

type Program = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
};

const data: Record<string, Program[]> = {
  Engineering: [
    {
      title: "B.Tech Computer Science",
      desc: "AI & Machine Learning Specialization",
      image: "/computer-science.jpg",
      tags: ["AI & ML", "Cloud Computing", "Data Science"],
    },
    {
      title: "B.Tech Electronics",
      desc: "VLSI & Embedded Systems",
      image: "/electrical.jpg",
      tags: ["IoT", "Robotics", "Automation"],
    },
    {
      title: "B.Tech Mechanical",
      desc: "Mechatronics & Auto",
      image: "/mechanical.jpg",
      tags: ["Automotive", "Thermodynamics", "Design"],
    },
  ],

  Management: [
    {
      title: "BBA",
      desc: "Business Administration",
      image: "/hr.jpg",
      tags: ["Marketing", "Finance", "HR"],
    },
  ],

  Law: [
    {
      title: "LLB",
      desc: "Corporate Law",
      image: "/lawyer.jpg",
      tags: ["Criminal", "Corporate", "Civil"],
    },
  ],

  Medical: [
    {
      title: "MBBS",
      desc: "Medical Science",
      image: "/mbbs.jpg",
      tags: ["Surgery", "Diagnostics", "Research"],
    },
  ],

  Sciences: [
    {
      title: "B.Sc Physics",
      desc: "Advanced Physics",
      image: "/science.jpg",
      tags: ["Quantum", "Astro", "Research"],
    },
  ],
};

export default function PopularPrograms() {
  const tabs = Object.keys(data);
  const [activeTab, setActiveTab] = useState("Engineering");

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-10">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full">
          Academics
        </span>

        <h2 className="text-4xl font-bold mt-4 text-black">Popular Programs</h2>

        <p className="text-gray-500 mt-3">
          Explore our diverse range of industry-aligned programs designed to launch your career.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 px-6 py-2 rounded-full border transition 
              ${
                activeTab === tab
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
          >
            {tab === "Engineering" && <Cpu size={16} />}
            {tab === "Management" && <Briefcase size={16} />}
            {tab === "Law" && <Scale size={16} />}
            {tab === "Medical" && <Stethoscope size={16} />}
            {tab === "Sciences" && <FlaskConical size={16} />}

            {tab}
          </button>
        ))}

      </div>
      <div className="grid md:grid-cols-3 gap-8">

        {data[activeTab].map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >

            <div className="relative h-52">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 text-black">

              <h3 className="font-semibold text-lg">
                {program.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {program.desc}
              </p>

              <div className="flex gap-2 mt-4 flex-wrap">
                {program.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="mt-6 flex items-center justify-between w-full border rounded-lg px-4 py-2 text-sm hover:bg-gray-50 border-gray-300 transition">
                View Details
                <ArrowRight size={16} />
              </button>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
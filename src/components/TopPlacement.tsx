"use client";

import Image from "next/image";

const students = [
  {
    name: "Rohit Jain",
    degree: "B.TECH CSE",
    company: "Amazon",
    package: "₹ 1 Crore",
    image: "/man1.jpg",
  },
  {
    name: "Aakanksha",
    degree: "MBA",
    company: "Google",
    package: "₹ 50 LPA",
    image: "/man2.avif",
  },
  {
    name: "Amit Sharma",
    degree: "B.TECH",
    company: "Microsoft",
    package: "₹ 45 LPA",
    image: "/man3.jpg",
  },
  {
    name: "Priya Singh",
    degree: "LAW",
    company: "Khaitan & Co",
    package: "₹ 25 LPA",
    image: "/man4.jpg",
  },
  {
    name: "Rahul Verma",
    degree: "B.DES",
    company: "Adobe",
    package: "₹ 30 LPA",
    image: "/man5.jpg",
  },
];

export default function TopPlacements() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

        <span className="bg-blue-100 text-blue-600 text-sm px-4 py-1 rounded-full">
          Success Stories
        </span>

        <h2 className="text-4xl font-bold mt-4 text-black">
          Top <span className="text-indigo-900">Placements</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Our students are making a mark in top global companies with record-breaking packages.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">

          {students.map((student, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl pt-14 pb-8 px-6 text-center shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.15)] transition-all duration-300"
            >

              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md">
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <h3 className="font-semibold text-lg text-black">{student.name}</h3>

              <p className="text-sm text-gray-500 mt-1">{student.degree}</p>

              <p className="text-blue-600 text-sm font-medium mt-1">
                {student.company}
              </p>

              <div className="mt-4 inline-block bg-yellow-100 text-orange-700 font-semibold text-sm px-4 py-1 rounded-full">
                {student.package}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
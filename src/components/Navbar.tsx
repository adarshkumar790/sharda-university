import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5">

        <div className="flex items-center gap-4">
          <Image
            src="/shardauniversity.png"
            alt="logo"
            width={50}
            height={30}
          />
        </div>
        <div className="flex gap-8 text-gray-600 text-sm font-medium">
          <a className="hover:text-black">About Sharda</a>
          <a className="hover:text-black">Programmes</a>
          <a className="hover:text-black">Global Tie-Ups</a>
          <a className="hover:text-black">Highlights</a>
          <a className="hover:text-black">Admissions</a>
        </div>
      </div>
    </div>
  );
}
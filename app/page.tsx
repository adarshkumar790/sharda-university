import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Marquee from "@/src/components/Morque";
import PopularPrograms from "@/src/components/Programs";
import WhySharda from "@/src/components/Whysharda";
import ExcellenceSection from "@/src/components/Excellence";
import GlobalTieups from "@/src/components/Connecting";
import TopPlacements from "@/src/components/TopPlacement";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Marquee />
      <PopularPrograms />
      <WhySharda/>
      <ExcellenceSection/>
      <GlobalTieups/>
      <TopPlacements/>
      <Footer/>
    </main>
  );
}
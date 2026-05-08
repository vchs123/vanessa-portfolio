import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Overview from "@/components/Overview";
import Attributes from "@/components/Attributes";
import ProjectCards from "@/components/ProjectCard";
import Summary from "@/components/Summary";
import Growth from "@/components/Growth";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <Overview />
        <Attributes />
        <ProjectCards />
        <Summary />
        <Growth />
      </main>
      <Footer />
    </>
  );
}

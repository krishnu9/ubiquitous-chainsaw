import { ContactCTA } from "@/components/ContactCTA";
import { EfficiencyMarquee } from "@/components/EfficiencyMarquee";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { PhilosophyGrid } from "@/components/PhilosophyGrid";
import { SolutionBlock } from "@/components/SolutionBlock";
import { solutions } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col flex-1 w-full">
        <Hero />
        <EfficiencyMarquee />
        <section id="solutions" aria-label="Solution showcase">
          {solutions.map((s) => (
            <SolutionBlock key={s.id} solution={s} />
          ))}
        </section>
        <PhilosophyGrid />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}

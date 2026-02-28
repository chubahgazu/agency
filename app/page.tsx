import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Process } from "@/sections/Process";
import { Cases } from "@/sections/Cases";
import { FAQ } from "@/sections/FAQ";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-0">
      <Hero />
      <Services />
      <Process />
      <Cases />
      <FAQ />
      <Contact />
    </div>
  );
}

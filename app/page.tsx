import { Hero, Projects, Qnazone } from "./sections";
import { Navbar } from "@/components";


export default function Home() {
  return (
    <section className="w-full">
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 flexCenter  text-white h-full ">
        <Navbar />
        <Hero />
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 flexCenter  text-white h-full ">
        <Projects />
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 flexCenter  text-white h-full ">
        <Qnazone />
      </section>
    </section>
  );
}

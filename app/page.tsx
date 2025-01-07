import { Hero } from "./sections";
import { Navbar } from "@/components";

export default function Home() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 flexCenter  text-white h-full ">
      <Navbar />
      <Hero />
    </section>
  );
}

import { Hero } from "./sections";
import { Navbar } from "@/components";

export default function Home() {
  return (
    <section className="w-full flexCenter text-white h-full ">
      <Navbar />
      <Hero />
    </section>
  );
}

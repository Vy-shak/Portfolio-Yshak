import { Hero, Projects, Qnazone, Footer } from "./sections";
import { Navbar } from "@/components";


export default function Home() {
  return (
    <section className="w-full  overflow-x-clip overflow-y-hidden  h-fit">
      <section className="w-full overflow-x-clip px-4 sm:px-8 md:px-12 lg:px-16 flexCenter  text-white h-full ">
        <Navbar />
        <Hero />
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 flexCenter  text-white h-full ">
        <Projects />
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 flexCenter  text-white h-full ">
        <Qnazone />
      </section>
      <section className="w-full mt-4 sm:mt-6 md:mt-7 lg:mt-8 h-fit bg-neutral-900  px-4 sm:px-8 md:px-12 lg:px-16 flexCenter  text-white">
        <Footer />
      </section>
    </section>
  );
}

"use client"
import { Hero, Projects, Qnazone, Footer, Skills, Education } from "./sections";
import { Navbar } from "@/components";
import { ShortSidebar } from "@/components";
import { useState } from "react";


export default function Home() {
  const [Snavbar, setSnavbar] = useState(false)
  return (
    <>
      <Navbar Snavbar={Snavbar} SetSnavbar={setSnavbar} />
      {Snavbar && <ShortSidebar />}
      <section className="w-full h-fit  overflow-x-clip overflow-y-hidden ">

        <section className="w-full overflow-x-clip px-4 sm:px-8 md:px-12 lg:px-16 flexCenter  text-white h-full ">
          <Hero />
        </section>
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 flexCenter  text-white h-full ">
          <Projects />
        </section>
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 flexCenter  text-white h-full ">
          <Skills />
        </section>
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 flexCenter  text-white h-full ">
          <Education />
        </section>
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 flexCenter  text-white h-full ">
          <Qnazone />
        </section>
        <section className="w-full mt-4 sm:mt-6 md:mt-7 lg:mt-8 h-fit bg-neutral-900  px-4 sm:px-8 md:px-12 lg:px-16 flexCenter  text-white">
          <Footer />
        </section>
      </section>
    </>
  );
}

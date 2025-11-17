"use client";

import ContactUs from "@/components/home/contactUs"
import Carousel from "@/components/home/carousel"
import SectionOne from "@/components/home/sectionOne";
import SectionTwo from "@/components/home/sectionTwo";
import SectionThree from "@/components/home/sectionThree";
import About from "@/components/common/about";
import IndexVideo from "@/components/home/indexVideo";
import IndexChoose from "@/components/home/indexChoose";
import NewsMain from "@/components/home/newsMain";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="sep-body">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <About />
      <IndexVideo /> 
      <IndexChoose />
      <ContactUs />
      <NewsMain />
      </div>
    </>
  )
}

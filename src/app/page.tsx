import Header from "@/components/header"
import About from "@/components/about"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Features from "@/components/features"
import Process from "@/components/process"
import Products from "@/components/products"
import FAQ from "@/components/faq"
import Quote from "@/components/quote"
import Video from "@/components/video"
import Blog from "@/components/blog"
import Carousel from "@/components/carousel/carousel"

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Carousel />
      <About />
      <Services />
      <Testimonials />
      <Features />
      <Process />
      <Products />
      <FAQ />
      <Quote />
      <Video />
      <Blog />
      {/* <Footer /> */}
    </>
  )
}

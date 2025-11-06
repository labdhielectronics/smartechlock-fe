import Header from "@/components/home/header"
import About from "@/components/home/about"
import Services from "@/components/home/services"
import Testimonials from "@/components/home/testimonials"
import Features from "@/components/home/features"
import Process from "@/components/home/process"
import Products from "@/components/home/products"
import FAQ from "@/components/home/faq"
import Quote from "@/components/home/quote"
import Video from "@/components/home/video"
import Blog from "@/components/home/blog"
import Carousel from "@/components/home/carousel"

export default function page() {
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

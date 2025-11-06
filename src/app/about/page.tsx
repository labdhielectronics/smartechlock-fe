import Breadcrumb from "@/components/common/breadcrumb"
import AboutHero from "@/components/about/about-hero"
import Services from "@/components/about/services"
import Gallery from "@/components/about/gallery"
import History from "@/components/about/history"
import Feature from "@/components/about/feature"
import NewsFeed from "@/components/about/news-feed"

export default function AboutPage() {
  return (
    <>
      
      <Breadcrumb title="About" currentPage="About" />
      <AboutHero />
      <Services />
      <Gallery />
      <History />
      <Feature />
      <NewsFeed />
      
    </>
  )
}

import Breadcrumb from "@/components/common/breadcrumb"
import Progress from "@/components/common/progress"
import Faqs from "@/components/faq/faqs"
import Process from "@/components/faq/process"
// import Faq from "@/components/faq/faq"
import Products from "@/components/products/products"
import TechnicalServices from "@/components/Services/technicalServices"

export default function FaqPage() {
  return (
    <>
      
      <Breadcrumb title="123" currentPage="123" />
     <Faqs />
     <Progress  />
      <Process  />
    </>
  )
}

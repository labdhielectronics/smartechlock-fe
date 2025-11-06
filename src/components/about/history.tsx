import Link from "next/link"
import { ArrowRight } from "lucide-react"

const timelineItems = [
  {
    year: "2000",
    title: "Journey Was Started",
    description: "We believe the value that our functions add to a business with right root.",
  },
  {
    year: "2010",
    title: "Noman Design Award 2010",
    description: "We believe the value that our functions add to a business with right root.",
  },
  {
    year: "2023",
    title: "Best Agency In World 2023",
    description: "We believe the value that our functions add to a business with right root.",
  },
]

export default function History() {
  return (
    <section>
     <div className="tp-history-area pb-85 fix">
  <div className="container">
    <div className="row">
      <div className="col-xxl-6 col-xl-5 col-lg-8 ">
        <div className="tp-about-wrapper about-page">
          <div className="tp-section-box tp-section-box-2  p-relative">
            <span className="tp-section-subtitle right d-inline-block">
              history
            </span>
            <h2 className="tp-section-title mb-20">
              Individual Discussions with Qualified Mates.
            </h2>
            <p>
              Bandwidth has historically been very unequally distributed
              worldwide, with increasing concentration in the digital age.
              Historically only 10 countries have hosted 70-75% of the global
              telecommunication capacity.
            </p>
          </div>
          <a className="tp-btn mt-30" href="contact">
            Learn More <i className="fal fa-long-arrow-right" />
          </a>
        </div>
      </div>
      <div className="col-xxl-6 col-xl-7 col-lg-12">
        <div className="tp-ab-4-right d-flex align-items-center">
          <h4>2000</h4>
          <div className="ab-4-content">
            <h3>Journey Was Started</h3>
            <p>
              We believe the value that our functions add to a business with
              right root.
            </p>
          </div>
        </div>
        <div className="tp-ab-4-right d-flex align-items-center">
          <h4>2010</h4>
          <div className="ab-4-content">
            <h3>Noman Design Award 2010</h3>
            <p>
              We believe the value that our functions add to a business with
              right root.
            </p>
          </div>
        </div>
        <div className="tp-ab-4-right d-flex align-items-center">
          <h4>2023</h4>
          <div className="ab-4-content">
            <h3>Best Agency In World 2023</h3>
            <p>
              We believe the value that our functions add to a business with
              right root.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  )
}

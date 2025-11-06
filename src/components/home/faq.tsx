"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Coordinate movement with breath to flow?",
    answer:
      "Our fitness clubs offer a variety of yoga classes that range from beginner to advanced. With Zium access your favorite class or test out a PURE Yoga class anytime, anywhere.",
  },
  {
    question: "What is the difference between a DVR and NVR?",
    answer:
      "Our fitness clubs offer a variety of yoga classes that range from beginner to advanced. With Zium access your favorite class or test out a PURE Yoga class anytime, anywhere.",
  },
  {
    question: "The cameras, monitors and/or video recorders?",
    answer:
      "Our fitness clubs offer a variety of yoga classes that range from beginner to advanced. With Zium access your favorite class or test out a PURE Yoga class anytime, anywhere.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section>
      <div className="tp-faq-area pt-115 pb-90">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-12 text-center text-xl-start col-12">
        <div className="tp-about-wapper3">
          <img src="assets/img/bg/faq-bg.jpg" alt="theme-pure" />
        </div>
      </div>
      <div className="col-xl-6 col-lg-12 col-12">
        <div className="tp-faq-wrapper pt-50 pl-60 mb-40 p1-40">
          <div className="tp-section-box tp-section-box-2  p-relative">
            <span className="tp-section-subtitle right d-inline-block">
              faq
            </span>
            <h2 className="tp-section-title mb-30">
              Have To Protect All Over The Globe.
            </h2>
          </div>
          <div className="tp-custom-accordio">
            <div className="accordion" id="accordionExample">
              <div className="accordion-items">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-buttons collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Coordinate movement with breath to flow?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Our fitness clubs offer a variety of yoga classes that range
                    from beginner to advanced. With Zium access your favorite
                    class or test out a PURE Yoga class anytime, anywhere.
                  </div>
                </div>
              </div>
              <div className="accordion-items">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-buttons collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    What is the difference between a DVR and NVR?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Our fitness clubs offer a variety of yoga classes that range
                    from beginner to advanced. With Zium access your favorite
                    class or test out a PURE Yoga class anytime, anywhere.
                  </div>
                </div>
              </div>
              <div className="accordion-items">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-buttons collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    The cameras, monitors and/or video recorders?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Our fitness clubs offer a variety of yoga classes that range
                    from beginner to advanced. With Zium access your favorite
                    class or test out a PURE Yoga class anytime, anywhere.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  )
}

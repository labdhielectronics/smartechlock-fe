import Link from "next/link"
import { Check } from "lucide-react"

export default function AboutHero() {
  return (
    <section>
     <div className="tp-about-area pt-120 pb-120">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-5">
        <div className="ab-wrapper-4 p-relative">
          <div className="ab-right-img">
            <img src="assets/img/about/ab-hm-4.jpg" alt="theme-pure" />
          </div>
          <div className="tp-ab-left-meta">
            <h3>
              Good Experience <br /> In Last
            </h3>
            <h4>30</h4>
            <h5>Years</h5>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-7">
        <div className="tp-about-info-wrapper pl-50">
          <div className="tp-section-box tp-section-box-2  p-relative">
            <span className="tp-section-subtitle right d-inline-block">
              About Us
            </span>
            <h2 className="tp-section-title mb-15">
              {" "}
              Magtnificient Quality Gives You an Edge
            </h2>
          </div>
          <hr className="mt-25 mb-30" />
          <div className="tp-ab-meta">
            <div className="about-meta-img d-flex">
              <img src="assets/img/about/ab-sm-4-4.jpg" alt="theme-pure" />
              <div className="tp-ab-meta-text pl-30">
                <h4>
                  In 2014 only 3 countries host 50% of the globally installed
                  bandwidth potential.
                </h4>
                <span>
                  <b>Alonso D. Dowson</b> <i>-Head Of Idea</i>
                </span>
              </div>
            </div>
          </div>
          <hr className="mt-30 mb-35" />
          <div className="tp-ab-4-list">
            <div className="tp-about-fea-item">
              <ul>
                <li>
                  <i className="fal fa-check" />
                  New Business Ideas create
                </li>
                <li>
                  <i className="fal fa-check" />
                  Grow corporate financial system
                </li>
              </ul>
            </div>
          </div>
          <a className="tp-btn-border" href="contact">
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  )
}

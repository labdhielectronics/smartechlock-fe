import Image from "next/image";


export default function About() {
  return (
    <section>
      <div className="tp-about-area pt-120 pb-90">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-6">
        <div className="tp-about-wapper3 mb-30">
          <div className="ab-main-img">
            <img
              className="ab-1st-img"
              src="https://www.ilockey.com/wp-content/uploads/2019/09/ilockey-products.jpg"
              alt="theme-pure"
              width={500}
              height={500}
            />
          </div>
          <div className="ab-sec-img">
            <img
              className=""
              src="https://www.ilockey.com/wp-content/uploads/2019/10/about-team.jpg"
              alt="theme-pure"
               width={300}
              height={300}
            />
          </div>
          <div className="ab-third-img d-none d-md-block">
            <img
              className=""
              src="https://www.ilockey.com/wp-content/uploads/2019/09/ilockey-quality.jpg"
              alt="theme-pure"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6">
        <div className="tp-ab-wrapper-3 pt-55 pl-50 mb-30">
          <div className="tp-section-box tp-section-box-2 mb-40  p-relative">
            <span className="tp-section-subtitle right d-inline-block">
              About Us
            </span>
            <h2 className="tp-section-title mb-20">
             Smart Lock Manufacturer & Supplier From China
            </h2>
            <p className="p-text">
            iLockey is a leading smart lock company in China, which has specialized in manufacturing and designing smart door locks for more than 15 years. We provide one-stop smart lock solutions for different places, such as public areas, smart access for private residences, traditional hotels, homestay, and short renting.
            </p>
          </div>
          <div className="tp-ab-fe-box mb-40">
            <div className="about-feature-list d-flex align-items-center mb-20">
              <div className="about-icon mr-25">
                {/* <i className="flaticon-web-security" /> */}
                <img src="https://omo-oss-image.thefastimg.com/portal-saas/new2023070613253582653/cms/image/59187a5c-126c-4e7f-a917-a0f87cbe7110.png" alt="theme-pure" className="w-[80px] h-[80px] min-w-[80px]"/>
              </div>
              <div className="about-feature-text">
                <h5 className="m-0 mb-5">Service Network</h5>
                <p className="m-0">Its marketing and service network covers the whole country, with branches in North America, Europe, Southeast Asia, the Middle East and other regions.</p>
              </div>
            </div>
            <div className="about-feature-list d-flex align-items-center">
              <div className="about-icon mr-25">
                {/* <i className="flaticon-school" /> */}
                <img src="                https://omo-oss-image.thefastimg.com/portal-saas/new2023070613253582653/cms/image/253a63d3-b426-46f2-9b48-45e2f4ef0668.png
" alt="theme-pure" className="w-[80px] h-[80px] min-w-[80px]"/>
              </div>
              <div className="about-feature-text">
                <h5 className="m-0 mb-5">
                 Company size
                </h5>
                <p className="m-0">
                 The company has more than 200 employees, more than 30% of whom have a college degree or above, including 30 R&D technicians.
                </p>
              </div>
            </div>
          </div>
          <div className="tp-about-fea-signature d-flex align-items-center">
            <div className="mr-30 mb-10">
              <a className="tp-btn-border" href="about">
                {" "}
                Learn More <i className="fal fa-long-arrow-right" />
              </a>
            </div>
            <div className="about-signature d-flex align-items-center mb-10">
              <img src="assets/img/about/ab-small3.png" alt="theme-pure" />
              <div className="ab-meta-content ml-15">
                <h6 className="m-0 ab-meta-title">Salim Rana</h6>
                <span className="ab-meta-subtitle">Head Of Idea</span>
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

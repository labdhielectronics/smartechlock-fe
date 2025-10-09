"use client";
import Link from "next/link";
import Slider from "react-slick";
import React from "react";

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`slick-prev slick-arrow ${className || ""}`}
      style={style}
      onClick={onClick}
      aria-label="Previous"
    >
      <i className="flaticon-left-arrow" />
    </button>
  );
}

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`slick-next slick-arrow ${className || ""}`}
      style={style}
      onClick={onClick}
      aria-label="Next"
    >
      <i className="flaticon-right-arrow" />
    </button>
  );
}

export default function Carousel() {
  const settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const slides = [
    {
      id: 1,
      bg: "assets/img/slider/slider3.jpg",
      title: "Secure Your Family From All Issues",
      subtitle: "Best CCTV solution in US",
      btn1: { text: "Get In Touch", href: "contact" },
      btn2: { text: "Our Services", href: "404-2" },
    },
    {
      id: 2,
      bg: "assets/img/slider/slider-2-1.jpg",
      title: "123Keep Your Home & Office Safe",
      subtitle: "Professional Surveillance Systems",
      btn1: { text: "Get In Touch", href: "contact" },
      btn2: { text: "Explore Services", href: "service" },
    },
     {
      id: 3,
      bg: "assets/img/slider/slider3.jpg",
      title: "123Keep Your Home & Office Safe",
      subtitle: "Professional Surveillance Systems",
      btn1: { text: "Get In Touch", href: "contact" },
      btn2: { text: "Explore Services", href: "service" },
    }
  ];

  return (
    <div className="tp-slider-area">
      <Slider {...settings} className="slider-active slider-arrow-3-style p-relative">
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="tp-slider-item p-relative tp-slider-height tp-slider-overlay-3 d-flex align-items-center"
              style={{ backgroundImage: `url(${slide.bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="container">
                <div className="row text-center">
                  <div className="col-xl-8 m-auto">
                    <div className="tp-slider-content tp-slider-content-two tp-slider-content-three">
                      <div className="tp-slider-big-text d-none d-xl-block">
                        <h2>CCTV</h2>
                      </div>
                      <span className="tp-slider-sub-title p-0">{slide.subtitle}</span>
                      <h2 className="tp-slider-title">{slide.title}</h2>
                    </div>
                    <div className="tp-slide-btn-box-3 d-flex flex-wrap justify-content-center">
                      <div className="slider-btn">
                        <Link className="tp-btn-white" href={slide.btn1.href}>
                          {slide.btn1.text}
                        </Link>
                      </div>
                      <div className="slider-btn">
                        <Link className="tp-btn" href={slide.btn2.href}>
                          {slide.btn2.text}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}













// "use client";
// import Link from "next/link";
// import * as React from "react";




// export default function Carousel() {



//   return (
   
//      <div className="tp-slider-area">
//   <div className="slider-active slider-arrow-3-style p-relative">
//     <button type="button" className="slick-prev slick-arrow">
//       <i className="flaticon-left-arrow" />{" "}
//     </button>
//     <button type="button" className="slick-next slick-arrow">
//       <i className="flaticon-right-arrow" />{" "}
//     </button>
//     <div className="slick-slider slick-initialized" dir="ltr">
//       <div className="slick-list">
//         <div className="slick-track" style={{ width: "500%", left: "-100%" }}>
//           <div
//             data-index={0}
//             className="slick-slide slick-active slick-current"
//             tabIndex={-1}
//             aria-hidden="false"
//             style={{
//               outline: "none",
//               width: "20%",
//               position: "relative",
//               left: 0,
//               opacity: 1,
//               transition: "opacity 500ms ease, visibility 500ms ease"
//             }}
//           >
//             <div>
//               <div
//                 tabIndex={-1}
//                 style={{ width: "100%", display: "inline-block" }}
//               >
//                 <div
//                   className="tp-slider-item p-relative tp-slider-height tp-slider-overlay-3 d-flex align-items-center"
//                   style={{
//                     backgroundImage: "url(assets/img/slider/slider3.jpg)"
//                   }}
//                 >
//                   <div className="container">
//                     <div className="row text-center">
//                       <div className="col-xl-8 m-auto">
//                         <div className="tp-slider-content tp-slider-content-two tp-slider-content-three">
//                           <div className="tp-slider-big-text d-none d-xl-block">
//                             <h2>CCTV</h2>
//                           </div>
//                           <span className="tp-slider-sub-title p-0">
//                             Best cctv solution in us
//                           </span>
//                           <h2 className="tp-slider-title">
//                             Secure Your Family From All Issues
//                           </h2>
//                         </div>
//                         <div className="tp-slide-btn-box-3 d-flex flex-wrap justify-content-center">
//                           <div className="slider-btn">
//                             <a className="tp-btn-white" href="contact">
//                               Get In Touch
//                             </a>
//                           </div>
//                           <div className="slider-btn">
//                             <Link className="tp-btn" href="404-2">
//                               Our Services
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             data-index={1}
//             className="slick-slide"
//             tabIndex={-1}
//             aria-hidden="true"
//             style={{
//               outline: "none",
//               width: "20%",
//               position: "relative",
//               left: "-20px",
//               opacity: 0,
//               transition: "opacity 500ms ease, visibility 500ms ease"
//             }}
//           >
//             <div>
//               <div
//                 tabIndex={-1}
//                 style={{ width: "100%", display: "inline-block" }}
//               >
//                 <div
//                   className="tp-slider-item p-relative tp-slider-height tp-slider-overlay-3 d-flex align-items-center"
//                   style={{
//                     backgroundImage: "url(assets/img/slider/slider3.jpg)"
//                   }}
//                 >
//                   <div className="container">
//                     <div className="row text-center">
//                       <div className="col-xl-8 m-auto">
//                         <div className="tp-slider-content tp-slider-content-two tp-slider-content-three">
//                           <div className="tp-slider-big-text d-none d-xl-block">
//                             <h2>CCTV</h2>
//                           </div>
//                           <span className="tp-slider-sub-title p-0">
//                             Best cctv solution in us
//                           </span>
//                           <h2 className="tp-slider-title">
//                             Secure Your Family From All Issues
//                           </h2>
//                         </div>
//                         <div className="tp-slide-btn-box-3 d-flex flex-wrap justify-content-center">
//                           <div className="slider-btn">
//                             <a className="tp-btn-white" href="contact">
//                               Get In Touch
//                             </a>
//                           </div>
//                           <div className="slider-btn">
//                             <a className="tp-btn" href="404-2">
//                               Our Services
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

   
//   );
// }

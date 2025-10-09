"use client";

import { useRef } from "react";
import Slider from "react-slick";
import Img from "../img/img";

export default function Testimonial() {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const testimonials = [
    {
      img: "/assets/img/testimonial/test1.png",
      text: "“ The circuit television, also known as video surveillance is the use of video CCTV ”",
      name: "Humble Dowson",
      position: "Head Of Idea",
    },
    {
      img: "/assets/img/testimonial/test2.png",
      text: "“ CCTV stands for Closed Circuit Television It is a video system “",
      name: "Limbon Nelson",
      position: "Founder, Romdon Co.",
    },
    {
      img: "/assets/img/testimonial/test3.png",
      text: "“ That consists strategically placed video CCTV around an area that records ”",
      name: "Jiksonax Xioma",
      position: "CEO, Jikson Ltd.",
    },
    {
      img: "/assets/img/testimonial/test1.png",
      text: "“ The circuit television, also known as video surveillance is the use of video CCTV ”",
      name: "Humble Dowson",
      position: "Head Of Idea",
    },
    {
      img: "/assets/img/testimonial/test2.png",
      text: "“ CCTV stands for Closed Circuit Television It is a video system “",
      name: "Limbon Nelson",
      position: "Founder, Romdon Co.",
    },
    {
      img: "/assets/img/testimonial/test3.png",
      text: "“ That consists strategically placed video CCTV around an area that records ”",
      name: "Jiksonax Xioma",
      position: "CEO, Jikson Ltd.",
    },
  ];

  return (
    <div className="testimonial-area pt-110 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="tp-section-box tp-section-box-2 p-relative mb-45">
              <span className="tp-section-subtitle d-inline-block right mb-10">
                testimonials
              </span>
              <h2 className="tp-section-title">User Feedbacks</h2>
            </div>
          </div>
          {/* <div className="col-lg-6">
            <div className="tp-test-arrow text-end mb-45">
              <button
                type="button"
                className="slick-prev slick-arrow"
                onClick={() => sliderRef.current?.slickPrev()}
              >
                <i className="far fa-long-arrow-left" />
              </button>
              <button
                type="button"
                className="slick-next slick-arrow"
                onClick={() => sliderRef.current?.slickNext()}
              >
                <i className="far fa-long-arrow-right" />
              </button>
            </div>
          </div> */}
        </div>

        <div className="tp-testimonial-active tp-testimonial-white slider-space-30">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item, i) => (
              <div key={i} className="testi-item-list">
                <div className="tp-testimonial-item text-center">
                  <div className="testi-img p-relative w-[80px] h-[80px] m-auto">
                    
                    <Img src={item.img} title="theme-pure" width={100} height={100} />
                    
                    <i className="fal fa-quote-right quote-style" />
                  </div>
                  <h4 className="testi-text">{item.text}</h4>
                  <div className="testi-meta">
                    <h5 className="reviewer-name">{item.name}</h5>
                    <span className="reviewer-position">{item.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

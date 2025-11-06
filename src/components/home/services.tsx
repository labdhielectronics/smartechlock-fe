"use client";

import { useState } from "react";
import Img from "../img/img";


type TabKey = "camera" | "cctv" | "security" | "cyber";

interface TabContent {
  img: string;
  price: number;
  title: string;
}

export default function Service() {
  const [activeTab, setActiveTab] = useState<TabKey>("camera");

  const tabs = [
    { id: "camera", label: "IP Camera" },
    { id: "cctv", label: "IP CCTV" },
    { id: "security", label: "Duet Security" },
    { id: "cyber", label: "Cyber Security" },
  ];

  const tabContent: Record<TabKey, TabContent> = {
    camera: {
      img: "/assets/img/services/sv-7.jpg",
      price: 591,
      title: "Individual CCTV Solution",
    },
    cctv: {
      img: "/assets/img/services/sv-8.jpg",
      price: 35,
      title: "Commercial CCTV System",
    },
    security: {
      img: "/assets/img/services/sv-9.jpg",
      price: 45,
      title: "Office & Industrial Security",
    },
    cyber: {
      img: "/assets/img/services/sv-10.jpg",
      price: 42,
      title: "School & Hospital Security",
    },
  };

  return (
    <div className="service-area">
      <div
        className="service-tab-bg pt-115"
        style={{ backgroundImage: "url(assets/img/services/tab-bg.jpg)" }}
      >
        <div className="container">
          <div className="tp-section-box tp-section-box-2 p-relative mb-45 text-center">
            <span className="tp-section-subtitle d-inline-block pre mb-10">
              services
            </span>
            <h2 className="tp-section-title">What We Provide</h2>
          </div>

          <div className="service-tab-info">
            {/* Tabs */}
            <nav>
              <div
                className="nav tp-service-tab justify-content-center mb-35"
                role="tablist"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`nav-links ${activeTab === tab.id ? "active" : ""}`}
                    type="button"
                    onClick={() => setActiveTab(tab.id as TabKey)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Tab Content */}
            <div className="tab-content" id="nav-tabContent">
              <div className="slider-tab-main white-bg">
                <div className="row">
                  <div className="col-lg-5 col-12 sv-tab-img">
                    <div className="tp-service-tab-img">
                      <Img
                        src={tabContent[activeTab].img}
                        title="theme-pure"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-12 sv-tab-content">
                    <div className="tp-service-tab-content pt-30 pl-25">
                      <div className="tab-circle">
                        <h4>
                          <span>$</span>
                          {tabContent[activeTab].price}
                        </h4>
                        <h3 className="sv-tab-titile">
                          {tabContent[activeTab].title}
                        </h3>
                        <p>
                          Stands for Closed Circuit Television. It is a video
                          system that consists of strategically placed video
                          cameras around an area that records footage and is
                          transmitted to a display monitor(s) for real-time
                          viewing as well as footage playback.
                        </p>
                      </div>
                      <div className="tp-sv-feature-list mb-40">
                        <ul>
                          <li>
                            <i className="fal fa-check" /> Departure of the
                            expert
                          </li>
                          <li>
                            <i className="fal fa-check" /> Configure software
                          </li>
                          <li>
                            <i className="fal fa-check" /> 24/7 Support
                          </li>
                          <li>
                            <i className="fal fa-check" /> Remote Administration
                          </li>
                          <li>
                            <i className="fal fa-check" /> Special applicationt
                          </li>
                        </ul>
                      </div>
                      <div className="services-tab-btn">
                        <a className="tp-btn" href="404-2">
                          Read More
                        </a>
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
  );
}

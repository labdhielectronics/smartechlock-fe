"use client";

import { useState } from "react";
import Img from "../img/img";


type TabKey = "hotel" | "smart" | "keyless" | "accessory";

interface TabContent {
  img: string;
  price: number;
  title: string;
  subTitle: string;
  subPoint?: {
    point1: string;
    point2: string;
    point3: string;
  }
}

export default function Service() {
  const [activeTab, setActiveTab] = useState<TabKey>("hotel");

  // const tabs = [
  //   { id: "camera", label: "IP Camera" },
  //   { id: "cctv", label: "IP CCTV" },
  //   { id: "security", label: "Duet Security" },
  //   { id: "cyber", label: "Cyber Security" },
  // ];


    const tabs = [
    { id: "hotel", label: "Hotel Door Lock" },
    { id: "smart", label: "Smart Door Lock" },
    { id: "keyless", label: "Keyless Cabinet Lock" },
    { id: "accessory", label: "Lock Accessory" },
  ];


  const tabContent: Record<TabKey, TabContent> = {
    hotel: {
      img: "https://www.ilockey.com/wp-content/uploads/2021/05/ilockey-brochure.jpg",
      price: 591,
      title: "SmarTech Hotel Door Lock",
      subTitle: "SmarTech is a professional hotel lock supplier in China, we proudly serve the hotel industry with high quality hotel locks, which include RFID hotel locks, keyless hotel locks, and digital hotel locks for over 13 years. As our hotel lock is integrated into the Opera PMS, it is easy for you to win the high-end hotel project. All of our hotel locks are strictly according to CE, SGS & Europe fire test standards. In fact, we have custom hotel door lock systems for many brand companies, like Technogym, IHS Hotel & Resort, Good feeling fitness, Huawei Talent apartment, etc. ",
      subPoint: {
        point1: "RFID Hotel Door Lock",
        point2: "Digital Hotel Lock",
        point3: "Keyless Hotel Door Lock",
       
      }
    },
    smart: {
      img: "https://www.ilockey.com/wp-content/uploads/2021/12/smart-lock-system.jpg",
      price: 35,
      title: "SmarTech Smart Door Lock",
      subTitle: "iLockey supply high-quality smart door locks, which includes Bluetooth door locks, Fingerprint door locks, Wifi smart locks for your project.",
       subPoint: {
        point1: "TTlock Bluetooth Door Lock",
        point2: "WIFI Smart Lock",
        point3: "Fingerprint Door Lock",
      }
    },
    keyless: {
      img: "https://www.ilockey.com/wp-content/uploads/2019/01/rfid-cabinet-lock-system-1.jpg",
      price: 45,
      title: "SmarTech Keyless Cabinet Lock",
      subTitle: "SmarTech Keyless Cabinet Lock",
       subPoint: {
        point1: "RFID Cabinet Lock",
        point2: "Fingerprint Cabinet Lock",
        point3: "Digital Locker Lock",
      }
    },
    accessory: {
      img: "https://www.ilockey.com/wp-content/uploads/2021/04/Ttlock-Internet-Wifi-Ble-app-Windows-IC-Card-Encoder-for-Hotel-Door-Lock-System-500x500.jpg",
      price: 42,
      title: "SmarTech Lock Accessory",
      subTitle: "SmarTech Lock Accessory",
       subPoint: {
        point1: "RFID Hotel Lock Accessary",
        point2: "TT Hotel Lock Accessary",
        point3: "Point three",
      }
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
                      <img
                        src={tabContent[activeTab].img}
                        title="theme-pure"
                        alt="theme-pure"
                        className="w-[525px] h-[525px]"
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
                          {tabContent[activeTab].subTitle}
                        </p>
                      </div>
                      <div className="tp-sv-feature-list mb-40">
                        <ul>
                     
                          {tabContent[activeTab].subPoint && (
                            <>
                              <li>
                                <i className="fal fa-check" /> {tabContent[activeTab].subPoint.point1}
                              </li>
                              <li>
                                <i className="fal fa-check" /> {tabContent[activeTab].subPoint.point2}
                              </li>
                              <li>
                                <i className="fal fa-check" /> {tabContent[activeTab].subPoint.point3}
                              </li>
                              
                            </>
                          )}
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

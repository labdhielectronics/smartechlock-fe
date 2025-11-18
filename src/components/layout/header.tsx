'use client'

import Image from 'next/image'
import { useState } from 'react'
import Img from '../img/img'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
 <>
  {/* pc header start */}
  <div className="sep-header">
    <div className="sep_cont">
      <figure className="logo">
        <a href="index.html">
          <img
            src="uploads/image/20220331/09/tenon-smart-lock.png"
            alt="Guangdong AP Tenon Sci.& Tech. Co., Ltd."
            title="Guangdong AP Tenon Sci.& Tech. Co., Ltd."
            width={151}
            height={31}
          />
        </a>
      </figure>
      <ul className="header_nav">
        <li className="fd_nav  pro">
          <a href="products">
            Smart Lock
          </a>
        </li>
        <li className="fd_nav  pro1">
          <a href="smart-door/index.html">Smart Door</a>
        </li>
        <li className="fd_nav ">
          <a href="company-profile">About</a>
        </li>
        <li className="fd_nav ">
          <a href="distribution">Distribution</a>
        </li>
        <li className="fd_nav ">
          <a href="company-news/index.html">News &amp; Media</a>
          <div className="navigat_dev">
            <a href="blog/index.html">Blog</a>
            <a href="video/index.html">Video</a>
          </div>
        </li>
        <li className="fd_nav ">
          <a href="contact">Contact Us</a>
        </li>
      </ul>
      <div className="search iconfont"></div>
      <div className="lang language multi-language ">
        <i className="fa iconfont" aria-hidden="true">
          {" "}
          
        </i>
        <div className="langu-dis fix  gtj-ff-bold">
          <ul>
            <li>
              <a href="index.html" title="English" className="b flex">
                <img
                  src="themes/tianxing/img/country/en.png"
                  alt="country"
                  className="img"
                  style={{ marginRight: 10 }}
                />
                English{" "}
              </a>
            </li>
            <li>
              <a
                href="http://ja.aptenontech.com/"
                title="日本語"
                className="b flex"
              >
                <img
                  src="themes/tianxing/img/country/ja.png"
                  alt="country"
                  className="img"
                  style={{ marginRight: 10 }}
                />
                日本語{" "}
              </a>
            </li>
            <li>
              <a
                href="http://fr.aptenontech.com/"
                title="français"
                className="b flex"
              >
                <img
                  src="themes/tianxing/img/country/fr.png"
                  alt="country"
                  className="img"
                  style={{ marginRight: 10 }}
                />
                français{" "}
              </a>
            </li>
            <li>
              <a
                href="http://de.aptenontech.com/"
                title="Deutsch"
                className="b flex"
              >
                <img
                  src="themes/tianxing/img/country/de.png"
                  alt="country"
                  className="img"
                  style={{ marginRight: 10 }}
                />
                Deutsch{" "}
              </a>
            </li>
            <li>
              <a
                href="http://es.aptenontech.com/"
                title="Español"
                className="b flex"
              >
                <img
                  src="themes/tianxing/img/country/es.png"
                  alt="country"
                  className="img"
                  style={{ marginRight: 10 }}
                />
                Español{" "}
              </a>
            </li>
            <li>
              <a
                href="http://ru.aptenontech.com/"
                title="русский"
                className="b flex"
              >
                <img
                  src="themes/tianxing/img/country/ru.png"
                  alt="country"
                  className="img"
                  style={{ marginRight: 10 }}
                />
                русский{" "}
              </a>
            </li>
            <li>
              <a
                href="http://pt.aptenontech.com/"
                title="português"
                className="b flex"
              >
                <img
                  src="themes/tianxing/img/country/pt.png"
                  alt="country"
                  className="img"
                  style={{ marginRight: 10 }}
                />
                português{" "}
              </a>
            </li>
            <li>
              <a
                href="http://ar.aptenontech.com/"
                title="العربية"
                className="b flex"
              >
                <img
                  src="themes/tianxing/img/country/ar.png"
                  alt="country"
                  className="img"
                  style={{ marginRight: 10 }}
                />
                العربية{" "}
              </a>
            </li>
            <li>
              <a
                href="http://vi.aptenontech.com/"
                title="tiếng việt"
                className="b flex"
              >
                <img
                  src="themes/tianxing/img/country/vi.png"
                  alt="country"
                  className="img"
                  style={{ marginRight: 10 }}
                />
                tiếng việt{" "}
              </a>
            </li>
            <li>
              <a
                href="http://th.aptenontech.com/"
                title="ไทย"
                className="b flex"
              >
                <img
                  src="themes/tianxing/img/country/th.png"
                  alt="country"
                  className="img"
                  style={{ marginRight: 10 }}
                />
                ไทย{" "}
              </a>
            </li>
            <li>
              <a
                href="http://ro.aptenontech.com/"
                title="română"
                className="b flex"
              >
                <img
                  src="themes/tianxing/img/country/ro.png"
                  alt="country"
                  className="img"
                  style={{ marginRight: 10 }}
                />
                română{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a href="mailto:info@aptenontech.com" className="email">
        info@aptenontech.com
      </a>
    </div>
    <div className="seacher">
      <div className="sep_cont">
        <form
          name="search"
          method="get"
          action="https://www.aptenontech.com/search"
          className="forms"
        >
          Search
          <div className="inputs">
            <input
              type="text"
              name="q"
              className="form-control"
              placeholder=""
            />
          </div>
          <div className="buttons">
            <button type="submit" className="top-btn btn text-capitalize">
              Go{" "}
            </button>
          </div>
        </form>
        <div className="up">
          <span>×</span>
        </div>
      </div>
    </div>
    <ul className="sub_menu sub_menu1 ">
      <li className="">
        <a href="products">
          <span>
            <img src="themes/tianxing/img/img/nav_0.png" alt="" />
          </span>
          <div>
            <p>Features</p>
            <p>Tenon Smart Lock Provides Users With Excellent Performance</p>
            <span>Learn More &gt;</span>
          </div>
        </a>
      </li>
      <li className="menu_item">
        <a
          href="automatic-push-pull-smart-locks"
          className="menu_img_tel"
        >
          <span>
            <img
              src="/uploads/image/20220415/09/push-pull-smart-door-lock.png"
              className="menu-image"
              alt="Automatic Lock Series"
              title="Automatic Lock Series"
            />
          </span>
          <span className="menu_img_tex">Automatic Lock Series </span>
        </a>
      </li>
      <li className="menu_item">
        <a
          href="bluetooth-lever-locks"
          className="menu_img_tel"
        >
          <span>
            <img
              src="/uploads/image/20220415/09/bluetooth-smart-digital-door-lock.png"
              className="menu-image"
              alt="Lever Door Lock"
              title="Lever Door Lock"
            />
          </span>
          <span className="menu_img_tex">K Series </span>
        </a>
      </li>
      <li className="menu_item">
        <a
          href="digital-touchpad-door-locks"
          className="menu_img_tel"
        >
          <span>
            <img
              src="/uploads/image/20220415/09/digital-touchpad-door-lock.png"
              className="menu-image"
              alt="Digital Touchpad Door Lock"
              title="Digital Touchpad Door Lock"
            />
          </span>
          <span className="menu_img_tex">Handle Lock Series </span>
        </a>
      </li>
      <li className="menu_item">
        <a
          href="sliding-smart-door-locks"
          className="menu_img_tel"
        >
          <span>
            <img
              src="uploads/image/20220415/09/sliding-door-lock-smart.png"
              className="menu-image"
              alt="Sliding Smart Door Lock"
              title="Sliding Smart Door Lock"
            />
          </span>
          <span className="menu_img_tex">T Series </span>
        </a>
      </li>
      <li className="menu_item">
        <a
          href="high-end-smart-locks"
          className="menu_img_tel"
        >
          <span>
            <img
              src="uploads/image/20220415/09/high-end-smart-lock.png"
              className="menu-image"
              alt="High-end Smart Door Lock"
              title="High-end Smart Door Lock"
            />
          </span>
          <span className="menu_img_tex">F Series </span>
        </a>
      </li>
      <li className="menu_item">
        <a href="products" className="menu_img_tel">
          <span>
            <img
              width={45}
              height={46}
              src="themes/tianxing/img/img/nav_6.png"
              className="menu_img"
              alt=""
            />
          </span>
          <span className="menu_img_tex">Custom Solutions</span>
        </a>
      </li>
      <li className="menu_item">
        <a href="products" className="menu_img_tel">
          <span>
            <img
              width={59}
              height={41}
              src="themes/tianxing/img/img/nav_7.png"
              className="menu_img"
              alt=""
            />
          </span>
          <span className="menu-image-title-after menu-image-title">
            New Arrivals
          </span>
        </a>
      </li>
    </ul>
    <ul className="sub_menu sub_menu2">
      <li className="" style={{ visibility: "hidden" }}>
        <a href="smart-door/m3/index.html">
          <span>
            <img src="themes/tianxing/img/img/nav_0.png" alt="" />
          </span>
          <div>
            <p>Features</p>
            <p>Tenon Smart Lock Provides Users With Excellent Performance</p>
            <span>Learn More &gt;</span>
          </div>
        </a>
      </li>
      <li className="menu_item">
        <a href="smart-door/m3/index.html" className="menu_img_tel">
          <span>
            <img
              src="uploads/image/20241029/10/m3-smart-door.webp"
              className="menu-image"
              alt="M3 Series"
              title="M3 Series"
            />
          </span>
          <span className="menu_img_tex">Tenon M3 Smart Door </span>
        </a>
      </li>
      <li className="menu_item">
        <a href="smart-door/m5-series/index.html" className="menu_img_tel">
          <span>
            <img
              src="uploads/image/20241110/14/m5-01_1731221225.webp"
              className="menu-image"
              alt="M5 Series"
              title="M5 Series"
            />
          </span>
          <span className="menu_img_tex">Tenon M5 Smart Door </span>
        </a>
      </li>
      <li className="menu_item">
        <a href="smart-door/m8-series/index.html" className="menu_img_tel">
          <span>
            <img
              src="uploads/image/20241110/14/m8-01.webp"
              className="menu-image"
              alt="M8 Series"
              title="M8 Series"
            />
          </span>
          <span className="menu_img_tex">Tenon M8 Smart Door </span>
        </a>
      </li>
      <li className="menu_item" style={{ visibility: "hidden" }}>
        <a href="smart-door/m3/index.html" className="menu_img_tel">
          <span>
            <img
              width={45}
              height={46}
              src="themes/tianxing/img/img/nav_6.png"
              className="menu_img"
              alt=""
            />
          </span>
          <span className="menu_img_tex">Custom Solutions</span>
        </a>
      </li>
      <li className="menu_item" style={{ visibility: "hidden" }}>
        <a href="smart-door/m3/index.html" className="menu_img_tel">
          <span>
            <img
              width={59}
              height={41}
              src="themes/tianxing/img/img/nav_7.png"
              className="menu_img"
              alt=""
            />
          </span>
          <span className="menu-image-title-after menu-image-title">
            New Arrivals
          </span>
        </a>
      </li>
    </ul>
  </div>
  <div className="mp_header">
    <div className="mp_header_cont">
      <a href="index.html" className="mp_logo">
        <img
          src="uploads/image/20220331/09/tenon-smart-lock.png"
          alt="Guangdong AP Tenon Sci.& Tech. Co., Ltd."
          title="Guangdong AP Tenon Sci.& Tech. Co., Ltd."
          width={151}
          height={31}
        />
      </a>
      <div className="herder_rightbox">
        <div className="iconfont icont_serch"></div>
        <div className="lang language multi-language hide">
          <div className="text iconfont"></div>
          <div className="langu-dis fix  gtj-ff-bold">
            <ul>
              <li>
                <a href="index.html" title="English" className="b flex">
                  <img
                    src="themes/tianxing/img/country/en.png"
                    alt="country"
                    className="img"
                    style={{ marginRight: 10 }}
                  />
                  English{" "}
                </a>
              </li>
              <li>
                <a
                  href="http://ja.aptenontech.com/"
                  title="日本語"
                  className="b flex"
                >
                  <img
                    src="themes/tianxing/img/country/jp.html"
                    alt="country"
                    className="img"
                    style={{ marginRight: 10 }}
                  />
                  日本語{" "}
                </a>
              </li>
              <li>
                <a
                  href="http://fr.aptenontech.com/"
                  title="français"
                  className="b flex"
                >
                  <img
                    src="themes/tianxing/img/country/fr.png"
                    alt="country"
                    className="img"
                    style={{ marginRight: 10 }}
                  />
                  français{" "}
                </a>
              </li>
              <li>
                <a
                  href="http://de.aptenontech.com/"
                  title="Deutsch"
                  className="b flex"
                >
                  <img
                    src="themes/tianxing/img/country/de.png"
                    alt="country"
                    className="img"
                    style={{ marginRight: 10 }}
                  />
                  Deutsch{" "}
                </a>
              </li>
              <li>
                <a
                  href="http://es.aptenontech.com/"
                  title="Español"
                  className="b flex"
                >
                  <img
                    src="themes/tianxing/img/country/es.png"
                    alt="country"
                    className="img"
                    style={{ marginRight: 10 }}
                  />
                  Español{" "}
                </a>
              </li>
              <li>
                <a
                  href="http://ru.aptenontech.com/"
                  title="русский"
                  className="b flex"
                >
                  <img
                    src="themes/tianxing/img/country/ru.png"
                    alt="country"
                    className="img"
                    style={{ marginRight: 10 }}
                  />
                  русский{" "}
                </a>
              </li>
              <li>
                <a
                  href="http://pt.aptenontech.com/"
                  title="português"
                  className="b flex"
                >
                  <img
                    src="themes/tianxing/img/country/pt.png"
                    alt="country"
                    className="img"
                    style={{ marginRight: 10 }}
                  />
                  português{" "}
                </a>
              </li>
              <li>
                <a
                  href="http://ar.aptenontech.com/"
                  title="العربية"
                  className="b flex"
                >
                  <img
                    src="themes/tianxing/img/country/ar.png"
                    alt="country"
                    className="img"
                    style={{ marginRight: 10 }}
                  />
                  العربية{" "}
                </a>
              </li>
              <li>
                <a
                  href="http://vi.aptenontech.com/"
                  title="tiếng việt"
                  className="b flex"
                >
                  <img
                    src="themes/tianxing/img/country/vi.png"
                    alt="country"
                    className="img"
                    style={{ marginRight: 10 }}
                  />
                  tiếng việt{" "}
                </a>
              </li>
              <li>
                <a
                  href="http://th.aptenontech.com/"
                  title="ไทย"
                  className="b flex"
                >
                  <img
                    src="themes/tianxing/img/country/th.png"
                    alt="country"
                    className="img"
                    style={{ marginRight: 10 }}
                  />
                  ไทย{" "}
                </a>
              </li>
              <li>
                <a
                  href="http://ro.aptenontech.com/"
                  title="română"
                  className="b flex"
                >
                  <img
                    src="themes/tianxing/img/country/ro.png"
                    alt="country"
                    className="img"
                    style={{ marginRight: 10 }}
                  />
                  română{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="icon_btn">
          <span />
        </div>
      </div>
      <div className="mp_menu">
        <div className="menuli">
          <a href="products/index.html">Smart Lock</a>
          <span className="iconfont"></span>
        </div>
        <div className="menuli_stare">
          <div className="menuli_text">
            <a href="products/index.html" className="tel">
              <p>Features</p>
              <p>Tenon Smart Lock Provides Users With Excellent Performance</p>
              <span>Learn More &gt;</span>
            </a>
          </div>
          <a href="products/automatic-push-pull-smart-lock/index.html">
            Automatic Lock Series
          </a>
          <a href="products/bluetooth-lever-lock/index.html">Lever Door Lock</a>
          <a href="products/digital-touchpad-door-lock/index.html">
            Digital Touchpad Door Lock
          </a>
          <a href="products/sliding-smart-door-lock/index.html">
            Sliding Smart Door Lock
          </a>
          <a href="products/high-end-smart-lock/index.html">
            High-end Smart Door Lock
          </a>
        </div>
        <div className="menuli_stare">
          <a href="products/automatic-push-pull-smart-lock/index.html">
            Automatic Lock Series
          </a>
          <a href="products/bluetooth-lever-lock/index.html">Lever Door Lock</a>
          <a href="products/digital-touchpad-door-lock/index.html">
            Digital Touchpad Door Lock
          </a>
          <a href="products/sliding-smart-door-lock/index.html">
            Sliding Smart Door Lock
          </a>
          <a href="products/high-end-smart-lock/index.html">
            High-end Smart Door Lock
          </a>
        </div>
        <div className="menuli">
          <a href="smart-door/m3/index.html">Smart Door</a>
          <span className="iconfont"></span>
        </div>
        <div className="menuli_stare">
          <a href="smart-door/m3/index.html">M3 Series</a>
          <a href="smart-door/m5-series/index.html">M5 Series</a>
          <a href="smart-door/m8-series/index.html">M8 Series</a>
        </div>
        <div className="menuli">
          <a href="company-profile/index.html">About</a>
        </div>
        <div className="menuli_stare">
          <a href="company-profile/index.html">Company Profile</a>
          <a href="honor-certificates.html">
            Certification of Tenon Smart Locks
          </a>
        </div>
        <div className="menuli">
          <a href="distribution/index.html">Distribution</a>
        </div>
        <div className="menuli_stare"></div>
        <div className="menuli">
          <a href="company-news/index.html">News &amp; Media</a>
          <span className="iconfont"></span>
        </div>
        <div className="menuli_stare">
          <a href="blog/index.html">Blog</a>
          <a href="video/index.html">Video</a>
        </div>
        <div className="menuli">
          <a href="contact">Contact Us</a>
        </div>
        <div className="menuli_stare"></div>
        <div className="menuli">
          <a href="mailto:info@aptenontech.com">E-mail to us</a>
        </div>
      </div>
      <div className="search mp_searicha">
        <p className="serach_title">Search</p>
        <form
          name="search"
          method="get"
          action="https://www.aptenontech.com/search"
          className="search_group open"
        >
          <input type="text" name="q" autoComplete="off" />
          <button type="submit" className="iconfont">
            
          </button>
        </form>
      </div>
    </div>
  </div>
  {/* nav start */}
  {/* nav end */}
  {/* pc header end */}
</>

  )
}

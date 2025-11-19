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
        <a href="/">
          <img
            src="uploads/image/20220331/09/smartechlock.png"
            alt="smartech lock"
            title="SmarTech Locks"
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
        {/* <li className="fd_nav  pro1">
          <a href="smart-door/index.html">Smart Door</a>
        </li> */}
        <li className="fd_nav ">
          <a href="company-profile">About</a>
        </li>
        <li className="fd_nav ">
          <a href="distribution">Distribution</a>
        </li>
        <li className="fd_nav ">
          <a href="blogs">News &amp; Media</a>
          <div className="navigat_dev">
            <a href="blogs">Blog</a>
            <a href="videos">Video</a>
          </div>
        </li>
        <li className="fd_nav ">
          <a href="contact">Contact Us</a>
        </li>
      </ul>
      <div className="search iconfont"></div>
     
      <a href="mailto:info@smartechlock.com" className="email">
        info@smartechlock.com
      </a>
    </div>
    <div className="seacher">
      <div className="sep_cont">
        <form
          name="search"
          method="get"
          action="https://www.smartechlock.com/search"
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
            <p>SmarTech Smart Lock Provides Users With Excellent Performance</p>
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
   
  </div>
  <div className="mp_header">
    <div className="mp_header_cont">
      <a href="/" className="mp_logo">
        <img
          src="uploads/image/20220331/09/smartechlock.png"
          alt="SmarTech"
          title="SmarTech"
          width={151}
          height={31}
        />
      </a>
      <div className="herder_rightbox">
        <div className="iconfont icont_serch"></div>
       
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
            <a href="products" className="tel">
              <p>Features</p>
              <p>SmarTech Smart Lock Provides Users With Excellent Performance</p>
              <span>Learn More &gt;</span>
            </a>
          </div>
          <a href="automatic-push-pull-smart-locks">
            Automatic Lock Series
          </a>
          <a href="bluetooth-lever-locks">Lever Door Lock</a>
          <a href="digital-touchpad-door-locks">
            Digital Touchpad Door Lock
          </a>
          <a href="sliding-smart-door-locks">
            Sliding Smart Door Lock
          </a>
          <a href="high-end-smart-door-locks">
            High-end Smart Door Lock
          </a>
        </div>
        <div className="menuli_stare">
          <a href="automatic-push-pull-smart-locks">
            Automatic Lock Series
          </a>
          <a href="bluetooth-lever-locks">Lever Door Lock</a>
          <a href="digital-touchpad-door-locks">
            Digital Touchpad Door Lock
          </a>
          <a href="sliding-smart-door-locks">
            Sliding Smart Door Lock
          </a>
          <a href="high-end-smart-door-locks">
            High-end Smart Door Lock
          </a>
        </div>
        {/* <div className="menuli">
          <a href="smart-door/m3/index.html">Smart Door</a>
          <span className="iconfont"></span>
        </div>
        <div className="menuli_stare">
          <a href="smart-door/m3/index.html">M3 Series</a>
          <a href="smart-door/m5-series/index.html">M5 Series</a>
          <a href="smart-door/m8-series/index.html">M8 Series</a>
        </div> */}
        <div className="menuli">
          <a href="company-profile">About</a>
        </div>
        <div className="menuli_stare">
          <a href="company-profile">Company Profile</a>
          <a href="honor-certificates.html">
            Certification of SmarTech Smart Locks
          </a>
        </div>
        <div className="menuli">
          <a href="distribution">Distribution</a>
        </div>
        <div className="menuli_stare"></div>
        <div className="menuli">
          <a href="blogs">News &amp; Media</a>
          <span className="iconfont"></span>
        </div>
        <div className="menuli_stare">
          <a href="blogs">Blog</a>
          <a href="videos">Video</a>
        </div>
        <div className="menuli">
          <a href="contact">Contact Us</a>
        </div>
        <div className="menuli_stare"></div>
        <div className="menuli">
          <a href="mailto:info@smartechlock.com">E-mail to us</a>
        </div>
      </div>
      <div className="search mp_searicha">
        <p className="serach_title">Search</p>
        <form
          name="search"
          method="get"
          action="https://www.smartechlock.com/search"
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

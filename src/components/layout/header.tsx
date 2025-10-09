'use client'

import Image from 'next/image'
import { useState } from 'react'
import Img from '../img/img'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header>
        <div className="header-notification-area notification-color grey-bg d-none d-lg-block pl-25 pr-25">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7">
                <div className="notification-text">
                  <p className="m-0">
                    <b>Limited Time Offer:</b> Shop online and get free no-contact delivery
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 d-flex justify-content-end">
                <div className="tp-top-menu">
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Careers</a></li>
                  </ul>
                </div>
                <div className="tp-top-menu header-lan-menu ml-30">
                  <ul>
                    <li>
                      <a href="#">English <i className="fal fa-angle-down" /></a>
                      <ul>
                        <li><a href="#">English</a></li>
                        <li><a href="#">Arabic</a></li>
                        <li><a href="#">Spanish</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN HEADER */}
        <div className="header-area-flat pl-25 pr-25">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-5 col-7">
                <div className="logo !w-[155px] !h-[50px]">
                  <a href="index.html">
                    <Img src="/assets/img/logo/logo-3.png" title="logo" />
                  </a>
                </div>
              </div>

              <div className="col-xl-7 d-none d-xl-block">
                <div className="tp-main-menu text-center">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown">
                        <a href="index.html">Home</a>
                        <ul className="submenu">
                          <li><a href="index.html">Home Style 01</a></li>
                          <li><a href="home-2">Home Style 02</a></li>
                          <li><a href="home-3">Home Style 03</a></li>
                        </ul>
                      </li>
                      <li><a href="about">About</a></li>
                      <li className="has-dropdown">
                        <a href="service">Service</a>
                        <ul className="submenu">
                          <li><a href="service">Service</a></li>
                          <li><a href="service-details">Service Details</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="team">Pages</a>
                        <ul className="submenu">
                          <li><a href="team">Team</a></li>
                          <li><a href="team-details">Team Details</a></li>
                          <li><a href="portfolio">Portfolio</a></li>
                          <li><a href="portfolio-details">Portfolio Details</a></li>
                          <li><a href="faq">FAQ Page</a></li>
                          <li><a href="shop">Shop</a></li>
                          <li><a href="shop-details">Shop Details</a></li>
                          <li><a href="cart">Cart</a></li>
                          <li><a href="checkout">Checkout</a></li>
                          <li><a href="#">404</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="blog">Blog</a>
                        <ul className="submenu">
                          <li><a href="blog">Blog</a></li>
                          <li><a href="blog-details">Blog Details</a></li>
                        </ul>
                      </li>
                      <li><a href="contact">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* RIGHT HEADER ICONS */}
              <div className="col-xl-3 col-lg-6 col-md-7 col-5">
                <div className="tp-header-right">
                  <a href="#" className="tp-header-icon tp-h-search p-relative">
                    <i className="fal fa-search" />
                    <i className="fal fa-times" />
                  </a>
                  <a className="tp-header-icon d-none d-xxl-inline-block" href="cart">
                    <i className="fal fa-shopping-cart" />
                  </a>
                  <a className="tp-btn-2 ml-20 d-none d-md-inline-block" href="contact">
                    Get In Touch
                  </a>

                  {/* ✅ Mobile Toggle Button */}
                  <button
                    className="tp-menu-toggle tp-header-icon ml-20 d-xl-none"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <i className="far fa-bars" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Sidebar Menu */}
      <div className={`tp-sidebar-menu ${mobileMenuOpen ? 'sidebar-opened' : ''}`} onClick={() => setMobileMenuOpen(false)}>
        {/* <button
          className="tp-menu-close"
          onClick={() => setMobileMenuOpen(false)}
          style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none' }}
        >
          <i className="far fa-times" style={{ fontSize: 24 }} />
        </button> */}

        <>
  <button className="sidebar-close">
    <i className="fal fa-times" />
  </button>
  <div className="side-logo mb-20 !w-[218px] !h-[71px]">
    <a href="index.html " >
      <Img src="/assets/img/logo/logo.png" title="logo"  />
    </a>
  </div>
  <div className="mobile-menu mean-container">
    <nav className="mean-nav d-xl-none">
      <ul>
        <li className="has-dropdown">
          <a href="index.html">Home</a>
          <ul className="submenu" style={{ display: "none" }}>
            <li>
              <a href="index.html">Home Style 01</a>
            </li>
            <li>
              <a href="home-2">Home Style 02</a>
            </li>
            <li>
              <a href="home-3">Home Style 03</a>
            </li>
          </ul>
          <a
            className="mean-expand "
            style={{ fontSize: 18, cursor: "pointer" }}
          >
            <i className="fal fa-plus" />
          </a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li className="has-dropdown">
          <a href="service">Service</a>
          <ul className="submenu" style={{ display: "none" }}>
            <li>
              <a href="service">Service</a>
            </li>
            <li>
              <a href="service-details">Service Details</a>
            </li>
          </ul>
          <a
            className="mean-expand "
            style={{ fontSize: 18, cursor: "pointer" }}
          >
            <i className="fal fa-plus" />
          </a>
        </li>
        <li className="has-dropdown">
          <a href="team">Pages</a>
          <ul className="submenu" style={{ display: "none" }}>
            <li>
              <a href="team">Team</a>
            </li>
            <li>
              <a href="team-details">Team Details</a>
            </li>
            <li>
              <a href="portfolio">Portfolio</a>
            </li>
            <li>
              <a href="portfolio-details">Portfolio Details</a>
            </li>
            <li>
              <a href="faq">FAQ Page</a>
            </li>
            <li>
              <a href="shop">Shop</a>
            </li>
            <li>
              <a href="shop-details">Shop Details</a>
            </li>
            <li>
              <a href="cart">cart</a>
            </li>
            <li>
              <a href="checkout">Checkout</a>
            </li>
            <li>
              <a href="#">404</a>
            </li>
          </ul>
          <a
            className="mean-expand "
            style={{ fontSize: 18, cursor: "pointer" }}
          >
            <i className="fal fa-plus" />
          </a>
        </li>
        <li className="has-dropdown">
          <a href="blog">Blog</a>
          <ul className="submenu" style={{ display: "none" }}>
            <li>
              <a href="blog">Blog</a>
            </li>
            <li>
              <a href="blog-details">Blog Details</a>
            </li>
          </ul>
          <a
            className="mean-expand "
            style={{ fontSize: 18, cursor: "pointer" }}
          >
            <i className="fal fa-plus" />
          </a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
    </nav>
    <div className="sidebar-title">
      <h3>CONTACT US</h3>
    </div>
    <ul className="sidebar-list">
      <li>27 Division St, New York</li>
      <li>+1 800 123 456 78</li>
      <li>sectox@mail.com</li>
    </ul>
    <div className="tp-sidebar-social">
      <a href="http://facebook.com/" target="_blank">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="http://twitter.com/" target="_blank">
        <i className="fab fa-twitter" />
      </a>
      <a href="https://www.behance.com/" target="_blank">
        <i className="fab fa-behance" />
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <i className="fab fa-youtube" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <i className="fab fa-linkedin-in" />
      </a>
    </div>
  </div>
</>

      </div>

      {/* ✅ Body Overlay */}
      {mobileMenuOpen && (
        <div
          className="body-overlay"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 99,
          }}
        />
      )}
    </>
  )
}

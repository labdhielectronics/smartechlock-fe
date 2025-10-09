import Image from 'next/image'
import React from 'react'
import Img from '../img/img'

function Footer() {
  return (

<div>
<div className="tp-footer-top-area">
  <div className="container">
    <div className="theme-white p-relative white-bg">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 text-center text-lg-start">
          <div className="tp-footer-logo">
            <a href="#">
            <div className='!w-[155px] !h-[50px] m-auto'>
              <Img src="/assets/img/logo/logo-3.png" title="theme-pure" />
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-12 text-center text-md-end">
          <div className="tp-footer-social">
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
      </div>
    </div>
  </div>
</div>







   <footer>
  <div className="footer-widget-area pt-90 pb-50 footer-bg ">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="footer-widget footer-col-1 mb-50">
            <h3 className="footer-widget-title">About Us</h3>
            <p>
              A traditional CCTV system comprises: One or more cameras (analog
              digital), each with a lens equipped with an image sensor.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-widget footer-col-2 mb-50">
            <h3 className="footer-widget-title">Get In Touch</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <p>
                  27 Division St, New York, <br /> NY 10002, USA
                </p>
              </div>
              <div className="footer-contact-item">
                <p>
                  Mon – Fri: 7.00 – 22.00 <br /> St – Sun: 9.00 – 20.00
                </p>
              </div>
              <div className="footer-contact-item">
                <p>
                  +1 800 123 456 789 <br /> +1 800 987 654 321
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-widget  footer-col-3 mb-50">
            <h3 className="footer-widget-title">Main Pages</h3>
            <ul>
              <li>
                <a href="about">About Us</a>
              </li>
              <li>
                <a href="#">Customer</a>
              </li>
              <li>
                <a href="service">Service</a>
              </li>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Best Seller</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Location</a>
              </li>
              <li>
                <a href="#">Our Expert</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-widget footer-col-4 mb-50">
            <h3 className="footer-widget-title">Get Newsletter</h3>
            <p>Sign up today for hints, tips &amp; the latest product news</p>
            <div className="footer-subscribe">
              <form>
                <input type="email" placeholder="Email address" />
                <button type="submit">
                  {" "}
                  <i className="far fa-envelope-open" />
                </button>
              </form>
            </div>
            <div className="footer-social mt-20">
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
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-area theme-bg pt-20 pb-20">
    <div className="container">
      <div className="row">
        <div className="col-xl-7 col-lg-7 text-lg-start col-12 text-center ">
          <div className="copyright-text">
            <p>
              Copyright © {/* */}2023{/* */} Sectox by <a href="#">ThemePure</a>
              . All Rights Reserved.{/* */}{" "}
            </p>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 text-lg-end col-12 text-center ">
          <div className="footer-menu">
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
</div>
  )
}

export default Footer
import { User, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"


export default function Contact() {
  return (
    <section>
    <>
  <div className="contact-page pt-115 pb-115">
    <div className="container">
      <div className="contact-bg grey-bg">
        <div className="row">
          <div className="col-xxl-6 col-xl-7 col-lg-6">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14949984.646450078!2d90.42194549999999!3d23.822204699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1654691380664!5m2!1sen!2sbd"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-5 col-lg-6">
            <div className="contact-us">
              <div className="tp-section-box tp-section-box-2  p-relative">
                <span className="tp-section-subtitle right d-inline-block">
                  contact us
                </span>
                <h2 className="tp-section-title mb-35">Get In Touch</h2>
              </div>
              <div className="contact">
                <div className="contact__form">
                  <form id="contact-form">
                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                        <div className="contact__input">
                          <i className="fas fa-user" />
                          <input
                            className="w-100"
                            type="text"
                            placeholder="Enter name"
                            name="name"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                        <div className="contact__input">
                          <i className="fas fa-envelope" />
                          <input
                            className="w-100"
                            type="email"
                            placeholder="Email address"
                            name="email"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                        <div className="contact__input">
                          <i className="fas fa-pen pen" />
                          <textarea
                            className="w-100"
                            placeholder="Message"
                            name="message"
                            required={true}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-xxl-12 col-lg-12 col-md-12">
                        <div className="contact__btn">
                          <button className="tp-btn w-100" type="submit">
                            Get A Quatation{" "}
                            <i className="fal fa-long-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <p className="ajax-response" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="tp-contact-info pb-90">
    <div className="container">
      <div className="row contact-last-child">
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="contact-info-item text-center mb-30">
            <i className="fas fa-phone-alt" />
            <h5>Call Us Here</h5>
            <a href="tel:(098)89789090,+09089098987-0">
              (098) 897 890 90
              <br />
            </a>
            <a href="tel:1234162442">+090 8909 89 87-0</a>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="contact-info-item text-center mb-30">
            <i className="fas fa-envelope" />
            <h5>Email Address</h5>
            <a href="mailto:info@webmail.comjobs.webexample.com">
              info@webmail.com
              <br />
            </a>
            <a href="mailto:jobs.webexample.com">jobs.webexample.com</a>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="contact-info-item text-center mb-30">
            <i className="fas fa-map-marker-alt" />
            <h5>Call Us Here</h5>
            <a href="#">
              14/A, New Humble Town,
              <br />
            </a>
            <a href="#">NYC, USA</a>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="contact-info-item text-center mb-30">
            <i className="fal fa-share-alt" />
            <h5>Social Connect</h5>
            <a href="#">
              skype.com/humble.cclinkdin.com
              <br />
            </a>
            <a href="#" />
          </div>
        </div>
      </div>
    </div>
  </div>
</>


    </section>
  )
}




export default function Contact() {
  return (
   <>
  <div className="sing_banner margin_top" style={{ display: "block" }}>
    <div className="path_bar">
      <div className="layout">
        <ul className="breadcrumb">
          <ul className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="contact.html" title="Contact Us">
                Contact Us
              </a>
            </li>
          </ul>{" "}
        </ul>
      </div>
    </div>
    <div className="banner_img">
      <img
        src="uploads/image/20250715/neiye.webp"
        alt="RELIABLE TENON SMART LOCKS FOR BUSINESSES"
        title="RELIABLE TENON SMART LOCKS FOR BUSINESSES"
      />
    </div>
  </div>
  <div className="sing_contact layout">
    <div className="contact_worp">
      <div className="worp_tel">
        <h1 className="tel">Contact Us </h1>
        <div className="tex">
          8th floor, No.3, Hanxi Business Center, Panyu District, Guangzhou,
          China{" "}
        </div>
        <div className="tex">
          <a href="mailto:info@aptenontech.com">info@aptenontech.com</a>
        </div>
        <div className="tex">Sales: </div>
        <div className="tex">Support: </div>
        <div className="tex">
          Operation Time: Monday-Friday: 9:00~18:00 UTC+8
        </div>
        <div className="tex">Saturday-Sunday: Closed</div>
      </div>
      <div className="worp_form">
        <div className="form_icon"></div>
        <form
          className="detail_module message_module sep-form-inquire bbcenter"
          encType="multipart/form-data"
          data-plugin="validator"
          method="post"
          action="https://www.aptenontech.com/submission-successful.html"
        >
          <input
            type="hidden"
            name="csrf_token"
            defaultValue="92d980bb756378958c35ac221225dab1"
          />
          <div className="submit_group flex">
            <div className="input sizing">
              <input
                name="name"
                type="text"
                className="inner_input"
                defaultValue=""
                placeholder="Name"
                autoComplete="off"
              />
            </div>
            <div className="input sizing">
              <input
                name="phone"
                type="text"
                defaultValue=""
                className="inner_input"
                placeholder="Phone"
                autoComplete="off"
              />
            </div>
            <div className="input sizing">
              <input
                name="email"
                type="email"
                defaultValue=""
                className="inner_input"
                placeholder="* Email"
                required={true}
                autoComplete="off"
              />
            </div>
            <div className="input sizing">
              <input
                type="hidden"
                name="ext[c2][name]"
                defaultValue="Subject"
              />
              <input
                className="form-control"
                placeholder="Subject"
                name="ext[c2][value]"
                type="text"
                defaultValue=""
                autoComplete="off"
              />
            </div>
            <div className="textarea input  sizing">
              <textarea
                name="content"
                rows={5}
                className="sizing inner_input"
                placeholder="* Message"
                required={true}
                defaultValue={""}
              />
            </div>
            <div className="form_btn">
              <button className="text_center trans spfr_last_btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="contact_map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.4563399365056!2d113.30073831540584!3d22.9702409240451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340253c589c98afb%3A0xa747106def9c8cd6!2sBusiness%20Center!5e0!3m2!1sen!2s!4v1647221402129!5m2!1sen!2s"
        width="100%"
        height={590}
        frameBorder={0}
        scrolling="no"
      />
    </div>
  </div>
  <div className="index_news_main">
    <div className="body_cont">
      <div className="index_news_items">
        <div className="index_news_text">
          <a href="blog/index.html" className="index_news_titles  tex_a">
            TENON SMART LOCK NEWS CENTER
          </a>
          <div className="news_more">
            <a href="blog/index.html" className="index_news_more">
              more &gt;
            </a>
          </div>
        </div>
        <div className="feature_product_wrap ">
          <div className="feature_items swiper-container-horizontal">
            <ul className="swiper-wrapper">
              <li className="feature_item swiper-slide ">
                <div className="feature_news_item">
                  <a href="blog/tenon-appeared-at-the-136th-canton-fair-to-show-the-world-the-new-smart-door-lock.html">
                    <figure>
                      <div className="news_day">Nov</div>
                      <div className="news_year">15-2024</div>
                      <p>
                        Tenon appeared at the 136th Canton Fair to show the
                        world the new smart door &amp; lock
                      </p>
                    </figure>
                  </a>
                  <div className="figcaptiona">
                    <span className="item_img">
                      <a
                        href="blog/tenon-appeared-at-the-136th-canton-fair-to-show-the-world-the-new-smart-door-lock.html"
                        className="img_shadow"
                      >
                        <img
                          className="blog-img"
                          src="uploads/image/20241115/16/tenon-appeared-at-the-136th-canton-fair-to-show-the-world-the-new-smart-door-lock.webp"
                          alt="Tenon appeared at the 136th Canton Fair to show the world the new smart door & lock"
                          title="Tenon appeared at the 136th Canton Fair to show the world the new smart door & lock"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </li>
              <li className="feature_item swiper-slide ">
                <div className="feature_news_item">
                  <a href="the-importance-of-hightech-digital-door-locks.html">
                    <figure>
                      <div className="news_day">Dec</div>
                      <div className="news_year">30-2023</div>
                      <p>
                        Securing Data Centers: the Importance of High-Tech
                        Digital Door Locks
                      </p>
                    </figure>
                  </a>
                  <div className="figcaptiona">
                    <span className="item_img">
                      <a
                        href="the-importance-of-hightech-digital-door-locks.html"
                        className="img_shadow"
                      >
                        <img
                          className="blog-img"
                          src="storage/202311/jpg/a3.jpg"
                          alt="Securing Data Centers: the Importance of High-Tech Digital Door Locks"
                          title="Securing Data Centers: the Importance of High-Tech Digital Door Locks"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </li>
              <li className="feature_item swiper-slide ">
                <div className="feature_news_item">
                  <a href="fortifying-home-security-hightech-digital-door-locks-for-smart-living.html">
                    <figure>
                      <div className="news_day">Dec</div>
                      <div className="news_year">28-2023</div>
                      <p>
                        Fortifying Home Security: High-Tech Digital Door Locks
                        for Smart Living
                      </p>
                    </figure>
                  </a>
                  <div className="figcaptiona">
                    <span className="item_img">
                      <a
                        href="fortifying-home-security-hightech-digital-door-locks-for-smart-living.html"
                        className="img_shadow"
                      >
                        <img
                          className="blog-img"
                          src="storage/202308/jpg/intelligent-high-end-smart-lock2.jpg"
                          alt="Fortifying Home Security: High-Tech Digital Door Locks for Smart Living"
                          title="Fortifying Home Security: High-Tech Digital Door Locks for Smart Living"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="news_btns">
            <div className="index_news_prev iconfont"></div>
            <div className="index_news_next iconfont"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

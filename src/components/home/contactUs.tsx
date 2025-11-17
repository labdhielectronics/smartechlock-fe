export default function ContactUs() {

  return (
   <div className="index_contact">
  <div className="body_cont">
    <div className="index_contact_main">
      <div className="contact_adder">
        <figure>
          <div className="tex_a">Contact Us</div>
        </figure>
        <div className="figcaptiona">
          <p className="adder_tel">
            Guangdong AP Tenon Sci.&amp; Tech. Co., Ltd.
          </p>
          <ul>
            <li>
              <div className="iconfont"> </div>
              <span>
                8th floor, No.3, Hanxi Business Center, Panyu District,
                Guangzhou, China
              </span>
            </li>
            <li>
              <div className="iconfont"></div>
              <span>Sales:</span>
              <span>Support: </span>
            </li>
            <li>
              <div className="iconfont"></div>
              <a href="mailto:info@aptenontech.com">info@aptenontech.com</a>
            </li>
            <li>
              <div className="iconfont"></div>
              <span>Monday-Friday: 9:00~18:00 UTC+8</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact_form">
        <div className="index_hd">
          <p>Leave Your Message</p>
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
                <span className="contact_text">* Message</span>
                <textarea
                  name="content"
                  rows={5}
                  className="sizing inner_input"
                  placeholder=""
                  required={true}
                  defaultValue={""}
                />
              </div>
              <button className="text_center trans spfr_last_btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

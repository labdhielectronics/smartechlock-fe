import Link from "next/link"
import { ArrowRight } from "lucide-react"

const newsItems = [
  {
    date: "24",
    month: "June",
    image: "/blog-post-1.png",
    title: "Good name can make your company sound professional",
    category: "cctv, security",
  },
  {
    date: "25",
    month: "June",
    image: "/blog-post-2.png",
    title: "While a bad name will give potential customers the wrong impression.",
    category: "cctv, security",
  },
  {
    date: "26",
    month: "June",
    image: "/blog-post-3.png",
    title: "A CCTV business name is one of the most important decisions",
    category: "cctv, security",
  },
]

export default function NewsFeed() {
  return (
    <section >
     <div className="tp-feed-area pb-90">
  <div className="container">
    <div className="row text-center">
      <div className="col-xl-12">
        <div className="tp-section-box tp-section-box-2 p-relative mb-45">
          <span className="tp-section-subtitle d-inline-block pre mb-10">
            news
          </span>
          <h2 className="tp-section-title">Our News Feeds</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="tp-feed-item mb-30">
          <div className="tp-feed-img p-relative">
            <div className="fix">
              <a href="#">
                <img src="assets/img/blog/blog-big-1.jpg" alt="theme-pure" />
              </a>
            </div>
            <div className="tp-meta-date">
              <h3 className="meta-date-title">
                <a href="#">24</a>
              </h3>
              <p>June</p>
            </div>
          </div>
          <div className="tp-feed-content">
            <div className="tp-latest-blog-meta">
              <span>by</span>
              <a href="#">admin</a>
              <a href="#">- cctv, security</a>
            </div>
            <h5 className="tp-latest-title">
              <a href="blog-details">
                Good name can make your company sound professional
              </a>
            </h5>
            <div className="tp-feed-link d-flex align-items-center">
              <a href="#">
                Read More <i className="far fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="tp-feed-item mb-30">
          <div className="tp-feed-img p-relative">
            <div className="fix">
              <a href="#">
                <img src="assets/img/blog/blog-big-3.jpg" alt="theme-pure" />
              </a>
            </div>
            <div className="tp-meta-date">
              <h3 className="meta-date-title">
                <a href="#">25</a>
              </h3>
              <p>June</p>
            </div>
          </div>
          <div className="tp-feed-content">
            <div className="tp-latest-blog-meta">
              <span>by</span>
              <a href="#">admin</a>
              <a href="#">- cctv, security</a>
            </div>
            <h5 className="tp-latest-title">
              <a href="blog-details">
                While a bad name will give potential customers the wrong
                impression.
              </a>
            </h5>
            <div className="tp-feed-link d-flex align-items-center">
              <a href="#">
                Read More <i className="far fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="tp-feed-item mb-30">
          <div className="tp-feed-img p-relative">
            <div className="fix">
              <a href="#">
                <img src="assets/img/blog/blog-big-2.jpg" alt="theme-pure" />
              </a>
            </div>
            <div className="tp-meta-date">
              <h3 className="meta-date-title">
                <a href="#">26</a>
              </h3>
              <p>June</p>
            </div>
          </div>
          <div className="tp-feed-content">
            <div className="tp-latest-blog-meta">
              <span>by</span>
              <a href="#">admin</a>
              <a href="#">- cctv, security</a>
            </div>
            <h5 className="tp-latest-title">
              <a href="blog-details">
                A CCTV business name is one of the most important decisions
              </a>
            </h5>
            <div className="tp-feed-link d-flex align-items-center">
              <a href="#">
                Read More <i className="far fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  )
}

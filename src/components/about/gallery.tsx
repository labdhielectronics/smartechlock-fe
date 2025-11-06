"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  "/gallery-image-1.png",
  "/abstract-geometric-gallery.png",
  "/abstract-geometric-sculpture.png",
  "/gallery-image-4.png",
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section >
     <div className="gallary-area mb-115">
  <div className="container-fluid p-0">
    <div className="gallary-slider-active">
      <div className="slick-slider slick-initialized" dir="ltr">
        <div className="slick-list">
          <div className="slick-track" style={{ width: "350%", left: "-100%" }}>
            <div
              data-index={-4}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: "7.142857142857143%" }}
            >
              <div>
                <div
                  className="gallary-item"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <a className="popup-image" href="#">
                    <img
                      src="assets/img/gallary/gallary-1.jpg"
                      alt="theme-pure"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-index={-3}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: "7.142857142857143%" }}
            >
              <div>
                <div
                  className="gallary-item"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <a className="popup-image" href="#">
                    <img
                      src="assets/img/gallary/gallary-3.jpg"
                      alt="theme-pure"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-index={-2}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: "7.142857142857143%" }}
            >
              <div>
                <div
                  className="gallary-item"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <a className="popup-image" href="#">
                    <img
                      src="assets/img/gallary/gallary-1.jpg"
                      alt="theme-pure"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-index={-1}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: "7.142857142857143%" }}
            >
              <div>
                <div
                  className="gallary-item"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <a className="popup-image" href="#">
                    <img
                      src="assets/img/gallary/gallary-3.jpg"
                      alt="theme-pure"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-index={0}
              className="slick-slide slick-active slick-current"
              tabIndex={-1}
              aria-hidden="false"
              style={{ outline: "none", width: "7.142857142857143%" }}
            >
              <div>
                <div
                  className="gallary-item"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <a className="popup-image" href="#">
                    <img
                      src="assets/img/gallary/gallary.jpg"
                      alt="theme-pure"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-index={1}
              className="slick-slide slick-active"
              tabIndex={-1}
              aria-hidden="false"
              style={{ outline: "none", width: "7.142857142857143%" }}
            >
              <div>
                <div
                  className="gallary-item"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <a className="popup-image" href="#">
                    <img
                      src="assets/img/gallary/gallary-1.jpg"
                      alt="theme-pure"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-index={2}
              className="slick-slide slick-active"
              tabIndex={-1}
              aria-hidden="false"
              style={{ outline: "none", width: "7.142857142857143%" }}
            >
              <div>
                <div
                  className="gallary-item"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <a className="popup-image" href="#">
                    <img
                      src="assets/img/gallary/gallary-3.jpg"
                      alt="theme-pure"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-index={3}
              className="slick-slide slick-active"
              tabIndex={-1}
              aria-hidden="false"
              style={{ outline: "none", width: "7.142857142857143%" }}
            >
              <div>
                <div
                  className="gallary-item"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <a className="popup-image" href="#">
                    <img
                      src="assets/img/gallary/gallary-1.jpg"
                      alt="theme-pure"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-index={4}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none", width: "7.142857142857143%" }}
            >
              <div>
                <div
                  className="gallary-item"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <a className="popup-image" href="#">
                    <img
                      src="assets/img/gallary/gallary-3.jpg"
                      alt="theme-pure"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-index={5}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: "7.142857142857143%" }}
            >
              <div>
                <div
                  className="gallary-item"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <a className="popup-image" href="#">
                    <img
                      src="assets/img/gallary/gallary.jpg"
                      alt="theme-pure"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-index={6}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: "7.142857142857143%" }}
            >
              <div>
                <div
                  className="gallary-item"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <a className="popup-image" href="#">
                    <img
                      src="assets/img/gallary/gallary-1.jpg"
                      alt="theme-pure"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-index={7}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: "7.142857142857143%" }}
            >
              <div>
                <div
                  className="gallary-item"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <a className="popup-image" href="#">
                    <img
                      src="assets/img/gallary/gallary-3.jpg"
                      alt="theme-pure"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-index={8}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: "7.142857142857143%" }}
            >
              <div>
                <div
                  className="gallary-item"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <a className="popup-image" href="#">
                    <img
                      src="assets/img/gallary/gallary-1.jpg"
                      alt="theme-pure"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-index={9}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: "7.142857142857143%" }}
            >
              <div>
                <div
                  className="gallary-item"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <a className="popup-image" href="#">
                    <img
                      src="assets/img/gallary/gallary-3.jpg"
                      alt="theme-pure"
                    />
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

    </section>
  )
}

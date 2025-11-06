"use client";




export default function Products() {
 

  return (
  <section className="product__area pt-120 pb-100">
  <div className="container">
    <div className="row">
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
        <div className="product__result">
          <p>
            <span>20</span> Item On List
          </p>
        </div>
      </div>
      <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6">
        <div className="product__filter-wrapper d-flex align-items-center justify-content-md-end">
          <div className="product__filter-count d-flex align-items-center">
            <span>Show</span>
            <div
              className="nice-select form-select-lg mb-3 false"
              role="button"
              tabIndex={0}
            >
              <span className="current">12</span>
              <ul className="list" role="menubar">
                <li
                  data-value={12}
                  className="option selected focus"
                  role="menuitem"
                >
                  12
                </li>
                <li data-value={16} className="option false" role="menuitem">
                  16
                </li>
                <li data-value={20} className="option false" role="menuitem">
                  20
                </li>
                <li data-value={24} className="option false" role="menuitem">
                  24
                </li>
              </ul>
            </div>
          </div>
          <div className="product__filter-style nav nav-tabs" role="tablist" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xxl-12">
        <div className="product__filter-tab">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-grid-tab"
              role="tabpanel"
              aria-labelledby="nav-grid-tab"
            >
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="product__item mb-30 text-center transition-3">
                    <div className="product__thumb p-relative mb-30 w-img fix">
                      <a href="shop-details">
                        <img
                          src="assets/img/shop/shop-1.jpg"
                          alt="theme-pure"
                        />
                      </a>
                      <div className="product__icon">
                        <a href="#">
                          <i className="fal fa-eye" />
                        </a>
                        <a href="#">
                          <i className="fal fa-shopping-cart" />
                        </a>
                        <a href="#">
                          <i className="fal fa-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
                      <h4 className="product__title">
                        <a href="shop-details">Wooden outdoor chair</a>
                      </h4>
                      <div className="product__price">
                        <span className="price">£{/* */}99.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="product__item mb-30 text-center transition-3">
                    <div className="product__thumb p-relative mb-30 w-img fix">
                      <a href="shop-details">
                        <img
                          src="assets/img/shop/shop-2.jpg"
                          alt="theme-pure"
                        />
                      </a>
                      <div className="product__icon">
                        <a href="#">
                          <i className="fal fa-eye" />
                        </a>
                        <a href="#">
                          <i className="fal fa-shopping-cart" />
                        </a>
                        <a href="#">
                          <i className="fal fa-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
                      <h4 className="product__title">
                        <a href="shop-details">Fighter Technology Camera</a>
                      </h4>
                      <div className="product__price">
                        <span className="price">£{/* */}19.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="product__item mb-30 text-center transition-3">
                    <div className="product__thumb p-relative mb-30 w-img fix">
                      <a href="shop-details">
                        <img
                          src="assets/img/shop/shop-3.jpg"
                          alt="theme-pure"
                        />
                      </a>
                      <div className="product__icon">
                        <a href="#">
                          <i className="fal fa-eye" />
                        </a>
                        <a href="#">
                          <i className="fal fa-shopping-cart" />
                        </a>
                        <a href="#">
                          <i className="fal fa-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
                      <h4 className="product__title">
                        <a href="shop-details">External Dome Camera</a>
                      </h4>
                      <div className="product__price">
                        <span className="price">£{/* */}27.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="product__item mb-30 text-center transition-3">
                    <div className="product__thumb p-relative mb-30 w-img fix">
                      <a href="shop-details">
                        <img
                          src="assets/img/shop/shop-5.jpg"
                          alt="theme-pure"
                        />
                      </a>
                      <div className="product__icon">
                        <a href="#">
                          <i className="fal fa-eye" />
                        </a>
                        <a href="#">
                          <i className="fal fa-shopping-cart" />
                        </a>
                        <a href="#">
                          <i className="fal fa-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
                      <h4 className="product__title">
                        <a href="shop-details">Bullet CC Camera</a>
                      </h4>
                      <div className="product__price">
                        <span className="price">£{/* */}59.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="product__item mb-30 text-center transition-3">
                    <div className="product__thumb p-relative mb-30 w-img fix">
                      <a href="shop-details">
                        <img
                          src="assets/img/shop/shop-4.jpg"
                          alt="theme-pure"
                        />
                      </a>
                      <div className="product__icon">
                        <a href="#">
                          <i className="fal fa-eye" />
                        </a>
                        <a href="#">
                          <i className="fal fa-shopping-cart" />
                        </a>
                        <a href="#">
                          <i className="fal fa-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
                      <h4 className="product__title">
                        <a href="shop-details">Mount Camera</a>
                      </h4>
                      <div className="product__price">
                        <span className="price">£{/* */}39.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="product__item mb-30 text-center transition-3">
                    <div className="product__thumb p-relative mb-30 w-img fix">
                      <a href="shop-details">
                        <img
                          src="assets/img/shop/shop-6.jpg"
                          alt="theme-pure"
                        />
                      </a>
                      <div className="product__icon">
                        <a href="#">
                          <i className="fal fa-eye" />
                        </a>
                        <a href="#">
                          <i className="fal fa-shopping-cart" />
                        </a>
                        <a href="#">
                          <i className="fal fa-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
                      <h4 className="product__title">
                        <a href="shop-details">Day Night Camera</a>
                      </h4>
                      <div className="product__price">
                        <span className="price">£{/* */}69.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="product__item mb-30 text-center transition-3">
                    <div className="product__thumb p-relative mb-30 w-img fix">
                      <a href="shop-details">
                        <img
                          src="assets/img/shop/shop-7.jpg"
                          alt="theme-pure"
                        />
                      </a>
                      <div className="product__icon">
                        <a href="#">
                          <i className="fal fa-eye" />
                        </a>
                        <a href="#">
                          <i className="fal fa-shopping-cart" />
                        </a>
                        <a href="#">
                          <i className="fal fa-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
                      <h4 className="product__title">
                        <a href="shop-details">Tilt &amp; Zoom Camera</a>
                      </h4>
                      <div className="product__price">
                        <span className="price">£{/* */}92.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="product__item mb-30 text-center transition-3">
                    <div className="product__thumb p-relative mb-30 w-img fix">
                      <a href="shop-details">
                        <img
                          src="assets/img/shop/shop-4.jpg"
                          alt="theme-pure"
                        />
                      </a>
                      <div className="product__icon">
                        <a href="#">
                          <i className="fal fa-eye" />
                        </a>
                        <a href="#">
                          <i className="fal fa-shopping-cart" />
                        </a>
                        <a href="#">
                          <i className="fal fa-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
                      <h4 className="product__title">
                        <a href="shop-details">Discreet CCTV</a>
                      </h4>
                      <div className="product__price">
                        <span className="price">£{/* */}35.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="product__item mb-30 text-center transition-3">
                    <div className="product__thumb p-relative mb-30 w-img fix">
                      <a href="shop-details">
                        <img
                          src="assets/img/shop/shop-8.jpg"
                          alt="theme-pure"
                        />
                      </a>
                      <div className="product__icon">
                        <a href="#">
                          <i className="fal fa-eye" />
                        </a>
                        <a href="#">
                          <i className="fal fa-shopping-cart" />
                        </a>
                        <a href="#">
                          <i className="fal fa-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
                      <h4 className="product__title">
                        <a href="shop-details">Varifocal Cameras</a>
                      </h4>
                      <div className="product__price">
                        <span className="price">£{/* */}11.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="product__item mb-30 text-center transition-3">
                    <div className="product__thumb p-relative mb-30 w-img fix">
                      <a href="shop-details">
                        <img
                          src="assets/img/shop/shop-9.jpg"
                          alt="theme-pure"
                        />
                      </a>
                      <div className="product__icon">
                        <a href="#">
                          <i className="fal fa-eye" />
                        </a>
                        <a href="#">
                          <i className="fal fa-shopping-cart" />
                        </a>
                        <a href="#">
                          <i className="fal fa-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
                      <h4 className="product__title">
                        <a href="shop-details">Network Cameras</a>
                      </h4>
                      <div className="product__price">
                        <span className="price">£{/* */}87.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="product__item mb-30 text-center transition-3">
                    <div className="product__thumb p-relative mb-30 w-img fix">
                      <a href="shop-details">
                        <img
                          src="assets/img/shop/shop-10.jpg"
                          alt="theme-pure"
                        />
                      </a>
                      <div className="product__icon">
                        <a href="#">
                          <i className="fal fa-eye" />
                        </a>
                        <a href="#">
                          <i className="fal fa-shopping-cart" />
                        </a>
                        <a href="#">
                          <i className="fal fa-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
                      <h4 className="product__title">
                        <a href="shop-details">Definition Cameras</a>
                      </h4>
                      <div className="product__price">
                        <span className="price">£{/* */}38.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="product__item mb-30 text-center transition-3">
                    <div className="product__thumb p-relative mb-30 w-img fix">
                      <a href="shop-details">
                        <img
                          src="assets/img/shop/shop-12.jpg"
                          alt="theme-pure"
                        />
                      </a>
                      <div className="product__icon">
                        <a href="#">
                          <i className="fal fa-eye" />
                        </a>
                        <a href="#">
                          <i className="fal fa-shopping-cart" />
                        </a>
                        <a href="#">
                          <i className="fal fa-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product__content">
                      <h4 className="product__title">
                        <a href="shop-details">Action Cameras</a>
                      </h4>
                      <div className="product__price">
                        <span className="price">£{/* */}15.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basic-pagination pt-40">
                  <nav>
                    <ul>
                      <li>
                        <a href="blog">
                          <i className="far fa-angle-left" />
                        </a>
                      </li>
                      <li>
                        <a href="blog">1</a>
                      </li>
                      <li>
                        <span className="current">2</span>
                      </li>
                      <li>
                        <a href="blog">3</a>
                      </li>
                      <li>
                        <a href="blog">
                          <i className="far fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

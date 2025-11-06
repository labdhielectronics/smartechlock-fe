interface BreadcrumbProps {
  title: string
  currentPage: string
}

export default function Breadcrumb({ title, currentPage }: BreadcrumbProps) {
  return (

     <section
  className="breadcrumb__area include-bg pt-150 pb-150"
  style={{ backgroundImage: "url(assets/img/breadcrumb/ab-slider.jpg)" }}
>
  <div className="container">
    <div className="row">
      <div className="col-xxl-12">
        <div className="breadcrumb__content p-relative z-index-1">
          <div className="breadcrumb__list">
            <span>
              <a href="index.html">Home </a>
            </span>
            <span className="dvdr">
              <i className="flaticon-arrow-right" />
            </span>
            <span>About</span>
          </div>
          <h3 className="breadcrumb__title">Blog Grid Classic</h3>
        </div>
      </div>
    </div>
  </div>
</section>

   
  )
}

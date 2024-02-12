import Image from "next/image";
const BlogHeading = () => {
  return (
    <div>
      <section id="blog" className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Insights
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-12">
              <div className="circle-fill-icon clientele-icon-object-one"></div>
              <h2>
                Explore
                <span className="special-heading">Eventology</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BlogHeading;

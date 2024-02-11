import Image from "next/image";
const Showcase = () => {
  return (
    <div>
      <section id="showcase" className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Showcase
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-12">
              <div className="circle-fill-icon showcase-icon-object-one"></div>
              <h2>
                Where Innovation
                <span className="special-heading">Embraces Imagination</span>
              </h2>
              <div className="showcase-icon-object-two">
                <picture>
                  <Image
                    src="/images/heart-icon.svg"
                    height={26}
                    width={29}
                    alt="ourstory"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Showcase;

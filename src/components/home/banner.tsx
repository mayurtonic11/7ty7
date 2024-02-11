import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <section id="home-banner">
        <div className="container">
          <div className="row g-md-0">
            <div className="col-md-5">
              <div className="circle-fill-icon banner-icon-object-one"></div>
              <div className="banner-content">
                <h1>
                  Maestros
                  <br /> at
                  <span className="special-heading">Elevating </span>
                  <span className="special-heading">Experiences</span>
                  to
                  <br />
                  Extraordinary
                </h1>
              </div>
              <div className="circle-icon banner-icon-object-two"></div>
            </div>
            <div className="col-md-7">
              <div className="banner-images">
                <div className="banner-image-one">
                  <div className="banner-object-one">
                    <picture>
                      <Image
                        src="/images/home/banner-object-one.svg"
                        height={121}
                        width={121}
                        alt="Banner Object"
                      />
                    </picture>
                  </div>
                  <div className="banner-image-one-dimension zoom-hover">
                    <picture>
                      <Image
                        src="/images/home/banner-image-one.jpg"
                        fill
                        alt="Banner"
                      />
                    </picture>
                    <div className="circle-icon banner-icon-object-four"></div>
                  </div>
                  <div className="banner-object-two">
                    <picture>
                      <Image
                        src="/images/home/banner-object-two.svg"
                        height={121}
                        width={121}
                        alt="Banner Object"
                      />
                    </picture>
                  </div>
                </div>
                <div className="banner-image-two">
                  <div className="circle-icon banner-icon-object-three"></div>
                  <div className="banner-object-three">
                    <picture>
                      <Image
                        src="/images/home/banner-object-three.svg"
                        height={121}
                        width={121}
                        alt="Banner Object"
                      />
                    </picture>
                  </div>
                  <div className="banner-image-two-dimension zoom-hover">
                    <picture>
                      <Image
                        src="/images/home/banner-image-two.jpg"
                        fill
                        alt="Banner"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Banner;

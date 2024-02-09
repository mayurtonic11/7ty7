import Image from "next/image";
import Link from "next/link";
const OurStory = () => {
  return (
    <div>
      <section id="home-ourstory" className="section-spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="ourstory-images row">
                <div className="ourstory-image-one col-md-6">
                  <div className="ourstory-image-one-dimension zoom-hover">
                    <picture>
                      <Image
                        src="/images/home/ourstory-one.jpg"
                        fill
                        alt="ourstory"
                      />
                    </picture>
                  </div>
                  <div className="ourstory-image-two-dimension zoom-hover">
                    <picture>
                      <Image
                        src="/images/home/ourstory-two.jpg"
                        fill
                        alt="ourstory"
                      />
                    </picture>
                  </div>
                  <div className="our-story-play-btn">
                    <picture>
                      <Image
                        src="/images/home/ourstory-play.svg"
                        width={305}
                        height={19}
                        alt="ourstory"
                      />
                    </picture>
                  </div>
                </div>
                <div className="ourstory-image-two col-md-6">
                  <div className="ourstory-image-three-dimension zoom-hover">
                    <picture>
                      <Image
                        src="/images/home/ourstory-three.jpg"
                        fill
                        alt="ourstory"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 pe-md-0">
              <div className="ourstory-content">
                <h2>
                  The Journey of
                  <span className="special-heading">Brilliance </span>
                </h2>
                <p>
                  Seventy Seven took to the stage the year the iPod was born!
                  And just like the iPod, we built a legacy over the last 22
                  years that has left our audiences mesmerized and wanting more.
                </p>
                <Link className="main-btn" href="">
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OurStory;

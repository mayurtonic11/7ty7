import Image from "next/image";
import Link from "next/link";
const OurJourneyContent = () => {
  return (
    <>
      <section id="our-journey-content" className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 ourjourney-content">
              <div className="ourjourney-heading">
                <h2>
                  Our Journey <br></br>
                  <span className="special-heading">Unfolded</span>
                </h2>
              </div>
              <div className="ourjourney-image-one zoom-hover">
                <picture>
                  <Image
                    src="/images/ourstory/ourjourney-one.jpg"
                    className="img-fluid"
                    fill
                    alt="Our Story"
                  />
                </picture>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="ourjourney-image">
                <div className="ourjourney-image-two zoom-hover">
                  <picture>
                    <Image
                      src="/images/ourstory/ourjourney-two.jpg"
                      className="img-fluid"
                      fill
                      alt="Our Story"
                    />
                  </picture>
                </div>
                <div className="ourjourney-image-three zoom-hover">
                  <picture>
                    <Image
                      src="/images/ourstory/ourjourney-three.jpg"
                      className="img-fluid"
                      fill
                      alt="Our Story"
                    />
                  </picture>
                </div>
                <div className="ourjourney-image-four zoom-hover">
                  <picture>
                    <Image
                      src="/images/ourstory/ourjourney-four.jpg"
                      className="img-fluid"
                      fill
                      alt="Our Story"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="col-12 pt-5 text-center">
              <p>
                Seventy Seven broke into the limelight in 2002 with a mission to
                show the world that every event is meant to be an unforgettable
                experience. Over two decades of expertise and passion for the
                extraordinary, we havve carved our niche winning the hearts of our
                clients across the globe. We seize opportunities to bring grand
                ideas to life. Built on the foundation of friendship, we have
                consistently crafted exceptional events marked by style and
                sophistication while maintaining the momentum for over 2+
                decades. Through the right formula and collaboration, our
                journey is a telltale of what it means to be unique.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OurJourneyContent;

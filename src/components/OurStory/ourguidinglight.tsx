import Image from "next/image";
import Link from "next/link";
const OurGuidingLight = () => {
  return (
    <>
      <section id="ourguidinglight-content" className="section-spacing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Our <span className="special-heading">Guiding Light</span>
              </h2>
            </div>
          </div>
          <div className="row g-5 py-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 zoom-hover">
                <picture>
                  <Image
                    src="/images/ourstory/our-guiding-light-one.jpg"
                    height={204}
                    width={348}
                    className="card-img"
                    alt="Our Guiding Light"
                  />
                </picture>
                <div className="card-body">
                  <h5 className="card-title">Mr. Aditya Mehra</h5>
                  <p className="card-text">
                    Aditya Mehra is one of the Founder-Directors at Seventy
                    Seven Entertainment Pvt. Ltd. After a stint working with
                    some of the best advertising agencies in India, he decided
                    to get into the ever-challenging field of event management.
                    The overarching belt of management and the overseeing of key
                    accounts are his main domain of responsibility. His passion
                    for technology also enables him to play a key role in
                    production and his technical know-how transforms events on
                    paper into events in action
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 zoom-hover">
                <picture>
                  <Image
                    src="/images/ourstory/our-guiding-light-two.jpg"
                    height={204}
                    width={348}
                    className="card-img"
                    alt="Our Guiding Light"
                  />
                </picture>
                <div className="card-body">
                  <h5 className="card-title">Mr. Daryl Sheldon</h5>
                  <p className="card-tex">
                    Daryl Sheldon is no stranger to success. He was nominated by
                    Hindustan Times for The Young Entrepreneur Award and was
                    also featured in the same news daily as a, Young Achiever.
                    His enthusiasm for conquering new areas of expertise and his
                    in-depth experience in client servicing in sectors that vary
                    from FMCG to finance, I.T and media, ensures great
                    credibility as one of the Directors of Seventy Seven
                    Entertainment Pvt. Ltd. He is a regular faculty member at
                    EMDI and his vision for the company includes a global
                    foothold in the near future.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6  col-lg-4">
              <div className="card h-100 zoom-hover">
                <picture>
                  <Image
                    src="/images/ourstory/our-guiding-light-three.jpg"
                    height={204}
                    width={348}
                    className="card-img"
                    alt="Our Guiding Light"
                  />
                </picture>
                <div className="card-body">
                  <h5 className="card-title">Mr. Manoj Gopalani</h5>
                  <p className="card-text">
                    Manoj Gopalani vast creative portfolio spans 9 years. His
                    plethora of experience unravels vast industry segments like
                    television channels, magazines, financial institutions,
                    lifestyle brands, public sector, BPOs and KPOs. It was in
                    the year 2001 that he moved on from being a software
                    engineer to, discovering his undeniable passion and zeal for
                    events. Today, as one of the Directors of the company, he
                    aspires to set new benchmarks and achieve unprecedented
                    heights in the event industry both locally and in the
                    international arena.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OurGuidingLight;

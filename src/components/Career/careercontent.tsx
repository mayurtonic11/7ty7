import Image from "next/image";
const CareerContent = () => {
  return (
    <>
      <section id="career-content" className="section-spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 career-content">
              <div className="career-heading">
                <h2>
                  Where Passion<br></br>
                  <span className="special-heading">high-fives Profession</span>
                </h2>
                <p>
                  At Seventy Seven, we foster a culture that ignites a spark of
                  passion and energy within everyone around us. The Seventy
                  Seven family is an ever-growing team that knows how to work
                  hard and party harder. Everyone here is a wizard that finds a
                  youthful joy in everything they do, evoking a vibe unlike any
                  other.
                </p>
                <p>
                  9-5s arent our thing. We live in the moment and that is
                  exactly why we know how to deliver moments that last.
                </p>
              </div>
              <div className="career-image-one zoom-hover d-none d-lg-block">
                <picture>
                  <Image
                    src="/images/career/career-one.jpg"
                    className="img-fluid"
                    fill
                    alt="Career"
                  />
                </picture>
              </div>
            </div>
            <div className="col-lg-6 row d-none d-lg-flex">
              <div className="career-image col-md-6">
                <div className="career-image-two zoom-hover">
                  <picture>
                    <Image
                      src="/images/career/career-two.jpg"
                      className="img-fluid"
                      fill
                      alt="Career"
                    />
                  </picture>
                </div>
                <div className="career-image-three zoom-hover">
                  <picture>
                    <Image
                      src="/images/career/career-three.jpg"
                      className="img-fluid"
                      fill
                      alt="Career"
                    />
                  </picture>
                </div>
              </div>
              <div className="career-image col-md-6">
                <div className="career-image-four zoom-hover">
                  <picture>
                    <Image
                      src="/images/career/career-four.jpg"
                      className="img-fluid"
                      fill
                      alt="Career"
                    />
                  </picture>
                </div>
                <div className="career-image-five zoom-hover">
                  <picture>
                    <Image
                      src="/images/career/career-five.jpg"
                      className="img-fluid"
                      fill
                      alt="Career"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CareerContent;

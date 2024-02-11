import Image from "next/image";
const ShowcaseDetail = () => {
  return (
    <div>
      <section id="showcase-detail" className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Showcase Detail
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-12">
              <h2>SBI Life Sangam 2022 </h2>
              <p>
                SBI Life Sangam 2022 emerged as a grand and prestigious family
                day event, epitomizing SBI Lifes commitment to uniqueness with
                the theme Kuch Alag Kuch Naya. The event brought to life a
                myriad of distinctive ideas and experiences, creating a glowing
                ambiance and featuring glamorous ramp walks in designer
                clothing. The resounding success of Sangam 2022 stood as a
                testament to the innovative approach adopted.
              </p>
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-one.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="row showcase-content">
                <div className="col-md-6 row">
                  <div className="col-md-6">
                    <div className="showcasdetail-image-one zoom-hover">
                      <picture>
                        <Image
                          src="/images/showcase/showcase-two.jpg"
                          className="card-img"
                          fill
                          alt="showcase"
                        />
                      </picture>
                    </div>
                    <div className="showcasdetail-image-two zoom-hover">
                      <picture>
                        <Image
                          src="/images/showcase/showcase-two.jpg"
                          className="card-img"
                          fill
                          alt="showcase"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="showcasdetail-image-three zoom-hover">
                      <picture>
                        <Image
                          src="/images/showcase/showcase-two.jpg"
                          className="card-img"
                          fill
                          alt="showcase"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <p>
                    SBI Life Sangam 2022 emerged as a grand and prestigious
                    family day event, epitomizing SBI Lifes commitment to
                    uniqueness with the theme Kuch Alag Kuch Naya. The event
                    brought to life a myriad of distinctive ideas and
                    experiences, creating a glowing ambiance and featuring
                    glamorous ramp walks in designer clothing. The resounding
                    success of Sangam 2022 stood as a testament to the
                    innovative approach adopted.
                  </p>
                  <div className="showcasdetail-image-four zoom-hover">
                    <picture>
                      <Image
                        src="/images/showcase/showcase-two.jpg"
                        className="card-img"
                        fill
                        alt="showcase"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <p>
                  SBI Life Sangam 2022 emerged as a grand and prestigious family
                  day event, epitomizing SBI Lifes commitment to uniqueness with
                  the theme Kuch Alag Kuch Naya. The event brought to life a
                  myriad of distinctive ideas and experiences, creating a
                  glowing ambiance and featuring glamorous ramp walks in
                  designer clothing. The resounding success of Sangam 2022 stood
                  as a testament to the innovative approach adopted.
                </p>
                <div className="card-image zoom-hover">
                  <picture>
                    <Image
                      src="/images/showcase/showcase-detail.jpg"
                      className="card-img"
                      fill
                      alt="showcase"
                    />
                  </picture>
                </div>
              </div>
              <div className="row g-md-0 showcase-content-two">
                <div className="col-md-5">
                  <div className="showcasedetail-content">
                    <p>
                      SBI Life Sangam 2022 emerged as a grand and prestigious
                      family day event, epitomizing SBI Lifes commitment to
                      uniqueness with the theme Kuch Alag Kuch Naya. The event
                      brought to life a myriad of distinctive ideas and
                      experiences, creating a glowing ambiance and featuring
                      glamorous ramp walks in designer clothing. The resounding
                      success of Sangam 2022 stood as a testament to the
                      innovative approach adopted.
                    </p>
                    <p>
                      SBI Life Sangam 2022 emerged as a grand and prestigious
                      family day event, epitomizing SBI Lifes commitment to
                      uniqueness with the theme Kuch Alag Kuch Naya The event
                      brought to life a myriad of distinctive ideas and
                      experiences, creating a glowing ambiance
                    </p>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="showcasedetail-images">
                    <div className="showcasedetail-image-one">
                      <div className="showcasedetail-image-one-dimension zoom-hover">
                        <picture>
                          <Image
                            src="/images/home/banner-image-one.jpg"
                            fill
                            alt="showcasedetail"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="showcasedetail-image-two">
                      <div className="showcasedetail-image-two-dimension zoom-hover">
                        <picture>
                          <Image
                            src="/images/home/banner-image-two.jpg"
                            fill
                            alt="showcasedetail"
                          />
                        </picture>
                      </div>
                    </div>
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
export default ShowcaseDetail;

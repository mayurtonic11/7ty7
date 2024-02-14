"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
  return (
    <div>
      <section id="home-banner">
        <div className="container h-100">
          <div className="row g-md-0 h-100">
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
                  <Swiper
                    draggable={true}
                    allowTouchMove={true}
                    direction="vertical"
                    autoHeight={true}
                    className="home-banner-one-slider"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      600: {
                        slidesPerView: 1,
                      },
                      1000: {
                        slidesPerView: 1,
                      },
                    }}
                    autoplay={{
                      delay: 3000, // Set delay in milliseconds (5 seconds)
                      disableOnInteraction: true, // Continue autoplay even after user interactions
                    }}
                  >
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="banner-image-one-dimension zoom-hover">
                        <picture>
                          <Image
                            src="/images/home/banner-image-two.jpg"
                            fill
                            alt="Banner"
                          />
                        </picture>
                        <div className="circle-icon banner-icon-object-four"></div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
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
                  <Swiper
                    draggable={true}
                    allowTouchMove={true}
                    direction="vertical"
                    autoHeight={true}
                    className="home-banner-two-slider"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      600: {
                        slidesPerView: 1,
                      },
                      1000: {
                        slidesPerView: 1,
                      },
                    }}
                    autoplay={{
                      delay: 3000, // Set delay in milliseconds (5 seconds)
                      disableOnInteraction: true, // Continue autoplay even after user interactions
                    }}
                  >
                    <SwiperSlide>
                      {" "}
                      <div className="banner-image-two-dimension zoom-hover">
                        <picture>
                          <Image
                            src="/images/home/banner-image-two.jpg"
                            fill
                            alt="Banner"
                          />
                        </picture>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="banner-image-two-dimension zoom-hover">
                        <picture>
                          <Image
                            src="/images/home/banner-image-one.jpg"
                            fill
                            alt="Banner"
                          />
                        </picture>
                      </div>
                    </SwiperSlide>
                  </Swiper>
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

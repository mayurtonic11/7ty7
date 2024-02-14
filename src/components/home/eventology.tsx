"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Eventology = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div>
      <section id="eventology" className="section-spacing">
        <div className="container">
          <div className="row position-relative">
            <div className="col-md-6">
              <div className="circle-fill-icon eventology-icon-object-one"></div>
            </div>
            <div className="col-md-6 eventology-heading">
              <h2>Eventology</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 m-0 overflow-hidden">
          <div className="row eventology-content g-0">
            <div className="col-12 p-0">
              <Swiper
                spaceBetween={0}
                navigation={true}
                modules={[Pagination, Navigation]}
                loop={false} // Disable looping
                className="eventology-slider"
                pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  1000: {
                    slidesPerView: 4,
                  },
                }}
                autoplay={{
                  delay: 5000, // Set delay in milliseconds (5 seconds)
                  disableOnInteraction: false, // Continue autoplay even after user interactions
                }}
              >
                <SwiperSlide>
                  <div className="eventology-column">
                    <Link href="#" className="card ">
                      <div className="eventology-image">
                        <picture>
                          <Image
                            src="/images/home/eventology.jpg"
                            className="card-img"
                            height={365}
                            width={365}
                            alt="Eventology"
                          />
                        </picture>
                      </div>
                      <div className="card-img-overlay">
                        <h3 className="card-title">
                          A useful guide to create effective name badges
                        </h3>
                        <p className="card-text">
                          <small>
                            <picture>
                              <Image
                                src="/images/home/eventology-arrow.svg"
                                className="img-fluid"
                                height={15}
                                width={21}
                                alt="button"
                              />
                            </picture>
                          </small>
                        </p>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="eventology-column">
                    <Link href="#" className="card ">
                      <div className="eventology-image">
                        <picture>
                          <Image
                            src="/images/home/eventology.jpg"
                            className="card-img"
                            height={365}
                            width={365}
                            alt="Eventology"
                          />
                        </picture>
                      </div>
                      <div className="card-img-overlay">
                        <h3 className="card-title">
                          A useful guide to create effective name badges
                        </h3>
                        <p className="card-text">
                          <small>
                            <picture>
                              <Image
                                src="/images/home/eventology-arrow.svg"
                                className="img-fluid"
                                height={15}
                                width={21}
                                alt="button"
                              />
                            </picture>
                          </small>
                        </p>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="eventology-column">
                    <Link href="#" className="card ">
                      <div className="eventology-image">
                        <picture>
                          <Image
                            src="/images/home/eventology.jpg"
                            className="card-img"
                            height={365}
                            width={365}
                            alt="Eventology"
                          />
                        </picture>
                      </div>
                      <div className="card-img-overlay">
                        <h3 className="card-title">
                          A useful guide to create effective name badges
                        </h3>
                        <p className="card-text">
                          <small>
                            <picture>
                              <Image
                                src="/images/home/eventology-arrow.svg"
                                className="img-fluid"
                                height={15}
                                width={21}
                                alt="button"
                              />
                            </picture>
                          </small>
                        </p>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="eventology-column">
                    <Link href="#" className="card ">
                      <div className="eventology-image">
                        <picture>
                          <Image
                            src="/images/home/eventology.jpg"
                            className="card-img"
                            height={365}
                            width={365}
                            alt="Eventology"
                          />
                        </picture>
                      </div>
                      <div className="card-img-overlay">
                        <h3 className="card-title">
                          A useful guide to create effective name badges
                        </h3>
                        <p className="card-text">
                          <small>
                            <picture>
                              <Image
                                src="/images/home/eventology-arrow.svg"
                                className="img-fluid"
                                height={15}
                                width={21}
                                alt="button"
                              />
                            </picture>
                          </small>
                        </p>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-12 text-center py-5">
            <div className="eventology-icon-object-two">
              <picture>
                <Image
                  src="/images/comment-icon.svg"
                  height={26}
                  width={29}
                  alt="ourstory"
                />
              </picture>
            </div>
            <Link href="" className="main-btn">
              Dive in
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Eventology;

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
const Star = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div>
      <section id="star" className="section-spacing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="story-icon-object-one">
                <picture>
                  <Image
                    src="/images/comment-icon.svg"
                    height={26}
                    width={29}
                    alt="ourstory"
                  />
                </picture>
              </div>
              <div className="circle-fill-icon story-icon-object-two"></div>
              <h2>
                <span className="special-heading">The Stars</span>
                of our Show
              </h2>
              <p>Brands we’ve co-created masterpiece events with</p>
              <div className="story-icon-object-three">
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
        <div className="container-fluid m-0 p-0 overflow-hidden">
          <div className="row">
            <div className="col-12">
              <Swiper
                spaceBetween={20}
                className="star-slider"
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    pagination: false,
                  },
                  600: {
                    slidesPerView: 3,
                  },
                  1000: {
                    slidesPerView: 6,
                  },
                }}
                autoplay={{
                  delay: 5000, // Set delay in milliseconds (5 seconds)
                  disableOnInteraction: false, // Continue autoplay even after user interactions
                }}
              >
                <SwiperSlide>
                  <Link href="#" className="card">
                    <div className="card-body zoom-hover">
                      <picture>
                        <Image
                          src="/images/home/abbott.svg"
                          className="card-img"
                          fill
                          alt="Abbott"
                        />
                      </picture>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#" className="card">
                    <div className="card-body zoom-hover">
                      <picture>
                        <Image
                          src="/images/home/audi.svg"
                          className="card-img"
                          fill
                          alt="Audi"
                        />
                      </picture>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#" className="card">
                    <div className="card-body zoom-hover">
                      <picture>
                        <Image
                          src="/images/home/bridgestone.svg"
                          className="card-img"
                          fill
                          alt="Bridgestone"
                        />
                      </picture>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#" className="card">
                    <div className="card-body zoom-hover">
                      <picture>
                        <Image
                          src="/images/home/dr-reddys.svg"
                          className="card-img"
                          fill
                          alt="Dr Reddys"
                        />
                      </picture>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#" className="card">
                    <div className="card-body zoom-hover">
                      <picture>
                        <Image
                          src="/images/home/glenmark.svg"
                          className="card-img"
                          fill
                          alt="Glenmark"
                        />
                      </picture>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#" className="card">
                    <div className="card-body zoom-hover">
                      <picture>
                        <Image
                          src="/images/home/sbi-life.svg"
                          className="card-img"
                          fill
                          alt="SBI Life"
                        />
                      </picture>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-12 py-5">
              <Link href="#" className="main-btn">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Star;

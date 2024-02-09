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
      <section id="game" className="section-spacing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                We’re In
                <span className="special-heading">The Game</span>
              </h2>
            </div>
            <div className="col-12">
              <Swiper
                spaceBetween={20}
                navigation={true}
                scrollbar={false}
                modules={[Navigation]}
                loop={false} // Disable looping
                pagination={{ clickable: false }}
                className="game-slider"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  1000: {
                    slidesPerView: 2,
                  },
                }}
                autoplay={{
                  delay: 5000, // Set delay in milliseconds (5 seconds)
                  disableOnInteraction: false, // Continue autoplay even after user interactions
                }}
              >
                <SwiperSlide>
                  <Link href="#" className="card">
                    <div className="card-body">
                      <picture>
                        <Image
                          src="/images/home/newspaper.svg"
                          className="img-fluid"
                          height={25}
                          width={35}
                          alt="News"
                        />
                      </picture>
                      <h3 className="card-title">
                        Top creative event promotion ideas to hike attendance.
                      </h3>
                      <span>Read more</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#" className="card">
                    <div className="card-body">
                      <picture>
                        <Image
                          src="/images/home/newspaper.svg"
                          className="img-fluid"
                          height={25}
                          width={35}
                          alt="News"
                        />
                      </picture>
                      <h3 className="card-title">
                        Top creative event promotion ideas to hike attendance.
                      </h3>
                      <span>Read more</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#" className="card">
                    <div className="card-body">
                      <picture>
                        <Image
                          src="/images/home/newspaper.svg"
                          className="img-fluid"
                          height={25}
                          width={35}
                          alt="News"
                        />
                      </picture>
                      <h3 className="card-title">
                        Top creative event promotion ideas to hike attendance.
                      </h3>
                      <span>Read more</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#" className="card">
                    <div className="card-body">
                      <picture>
                        <Image
                          src="/images/home/newspaper.svg"
                          className="img-fluid"
                          height={25}
                          width={35}
                          alt="News"
                        />
                      </picture>
                      <h3 className="card-title">
                        Top creative event promotion ideas to hike attendance.
                      </h3>
                      <span>Read more</span>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-12 py-5 text-center">
              <Link href="" className="main-btn">
                Read All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Star;

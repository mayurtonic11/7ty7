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
const OurstoryTimeline = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
      <section id="ourstory-timeline" className="section-spacing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Swiper
                spaceBetween={50}
                navigation={true}
                modules={[ Navigation]}
                loop={false} // Disable looping
                className="timeline-slider"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  1000: {
                    slidesPerView: 5,
                  },
                }}
                autoplay={{
                  delay: 5000, // Set delay in milliseconds (5 seconds)
                  disableOnInteraction: false, // Continue autoplay even after user interactions
                }}
              >
                <SwiperSlide>
                  <Link href="" className="card">
                    <div className="card-body">
                      <h3 className="card-title">2023</h3>
                      <p className="card-text">
                        A useful guide to create effective name badges
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className="card">
                    <div className="card-body">
                      <h3 className="card-title">2022</h3>
                      <p className="card-text">
                        A useful guide to create effective name badges
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className="card">
                    <div className="card-body">
                      <h3 className="card-title">2021</h3>
                      <p className="card-text">
                        A useful guide to create effective name badges
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className="card">
                    <div className="card-body">
                      <h3 className="card-title">2019</h3>
                      <p className="card-text">
                        A useful guide to create effective name badges
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className="card">
                    <div className="card-body">
                      <h3 className="card-title">2018</h3>
                      <p className="card-text">
                        A useful guide to create effective name badges
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className="card">
                    <div className="card-body">
                      <h3 className="card-title">2017</h3>
                      <p className="card-text">
                        A useful guide to create effective name badges
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OurstoryTimeline;

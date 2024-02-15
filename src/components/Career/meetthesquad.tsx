"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const MeettheSquad = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
      <section id="meet-squad" className="section-spacing">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2>Meet the<span className="special-heading">Squad</span></h2>
            </div>
            <div className="col-12">
              <Swiper
                spaceBetween={20}
                navigation={true}
                modules={[Pagination, Navigation]}
                loop={false} // Disable looping
                className="meet-squad-slider"
                pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  767: {
                    slidesPerView: 3,
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
                  <div className="card h-100">
                    <div className="card-photo">
                      <picture>
                        <Image
                          src="/images/career/meet-squad.jpg"
                          className="img-fluid"
                          height={166}
                          width={166}
                          alt="Meet the Squad"
                        />
                      </picture>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Murugan S</h5>
                      <p>2D Senior Visualizer</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card h-100">
                    <div className="card-photo">
                      <picture>
                        <Image
                          src="/images/career/meet-squad.jpg"
                          className="img-fluid"
                          height={166}
                          width={166}
                          alt="Meet the Squad"
                        />
                      </picture>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Murugan S</h5>
                      <p>2D Senior Visualizer</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card h-100">
                    <div className="card-photo">
                      <picture>
                        <Image
                          src="/images/career/meet-squad.jpg"
                          className="img-fluid"
                          height={166}
                          width={166}
                          alt="Meet the Squad"
                        />
                      </picture>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Murugan S</h5>
                      <p>2D Senior Visualizer</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card h-100">
                    <div className="card-photo">
                      <picture>
                        <Image
                          src="/images/career/meet-squad.jpg"
                          className="img-fluid"
                          height={166}
                          width={166}
                          alt="Meet the Squad"
                        />
                      </picture>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Murugan S</h5>
                      <p>2D Senior Visualizer</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card h-100">
                    <div className="card-photo">
                      <picture>
                        <Image
                          src="/images/career/meet-squad.jpg"
                          className="img-fluid"
                          height={166}
                          width={166}
                          alt="Meet the Squad"
                        />
                      </picture>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Murugan S</h5>
                      <p>2D Senior Visualizer</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card h-100">
                    <div className="card-photo">
                      <picture>
                        <Image
                          src="/images/career/meet-squad.jpg"
                          className="img-fluid"
                          height={166}
                          width={166}
                          alt="Meet the Squad"
                        />
                      </picture>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Murugan S</h5>
                      <p>2D Senior Visualizer</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MeettheSquad;

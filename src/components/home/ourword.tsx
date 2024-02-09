"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
const OurWord = () => {
    const [swiperRef, setSwiperRef] = useState(null); 
  return (
    <div>
      <section id="home-ourword" className="section-spacing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Don’t just take{" "}
                <span className="special-heading">Our Word</span> for it!
              </h2>
            </div>
            <div className="col-12">
              <Swiper
                spaceBetween={30}
                navigation={true}
                modules={[ Pagination, Navigation]}
                loop={false} // Disable looping
                className="ourword-slider"
                pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  1000: {
                    slidesPerView: 3,
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
                      <p className="card-text">
                        &quot; I want Seventy Seven to be the first & the last
                        face I see when I begin planning for I AM SHE 2013
                        &quot;
                      </p>
                      <div className="card-btn">Read More</div>
                      <span>I Am She</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className="card">
                    <div className="card-body">
                      <p className="card-text">
                        &quot;We have been associated with 7ty7 for a very long
                        time and we can say without a doubt that they are team
                        with the most talented and dedicated people around.
                        Injecting that infectious music fever into the masses
                        wouldn&apos;t surely have been an easy job. &quot;
                      </p>
                      <span>Sony India</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className="card">
                    <div className="card-body">
                      <p className="card-text">
                        &quot;Our experience with Seventy Seven Entertainment
                        (7ty7) has been excellent since 2006, where the agency
                        conceptualized the winning property for us. &quot;
                      </p>
                      <div className="card-btn">Read More</div>
                      <span>BNP Paribhas</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className="card">
                    <div className="card-body">
                      <p className="card-text">
                        &quot; I want Seventy Seven to be the first & the last
                        face I see when I begin planning for I AM SHE 2013
                        &quot;
                      </p>
                      <div className="card-btn">Read More</div>
                      <span>I Am She</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className="card">
                    <div className="card-body">
                      <p className="card-text">
                        &quot;We have been associated with 7ty7 for a very long
                        time and we can say without a doubt that they are team
                        with the most talented and dedicated people around.
                        Injecting that infectious music fever into the masses
                        wouldn&apos;t surely have been an easy job. &quot;
                      </p>
                      <span>Sony India</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className="card">
                    <div className="card-body">
                      <p className="card-text">
                        &quot;Our experience with Seventy Seven Entertainment
                        (7ty7) has been excellent since 2006, where the agency
                        conceptualized the winning property for us. &quot;
                      </p>
                      <div className="card-btn">Read More</div>
                      <span>BNP Paribhas</span>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OurWord;

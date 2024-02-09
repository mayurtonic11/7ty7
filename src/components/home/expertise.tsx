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
const Expertise = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div>
      <section id="expertise" className="section-spacing">
        <div className="container-fluid p-0 m-0 overflow-hidden">
          <div className="row">
            <div className="col-md-4">
              <div className="expertise-content">
                <h2>
                  <span className="special-heading">Expertise</span>
                  <span className="special-heading">That Tops</span>
                  <br></br>The Charts
                </h2>
                <p>
                  A youthful and passionate team of experts who enjoy organizing
                  unique and spectacular events across multiple avenues
                </p>
                <Link href="" className="main-btn">
                  Explore
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              <Swiper
                spaceBetween={50}
                navigation={true}
                modules={[Pagination, Navigation]}
                loop={false} // Disable looping
                className="expertise-slider"
                pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  1000: {
                    slidesPerView: 2.5,
                  },
                }}
                autoplay={{
                  delay: 5000, // Set delay in milliseconds (5 seconds)
                  disableOnInteraction: false, // Continue autoplay even after user interactions
                }}
              >
                <SwiperSlide>
                  <Link href="" className="card">
                    <div className="card-image">
                      <Image
                        src="/images/home/expertise-one.jpg"
                        className="card-img"
                        fill
                        alt="Expertise"
                      />
                    </div>
                    <div className="card-img-overlay">
                      <h5 className="card-title">
                        Concept, Graphics and Creative Solutions
                      </h5>
                      <p className="card-btn">
                        <Image
                          src="/images/home/btn.svg"
                          className="img-fluid"
                          height={15}
                          width={21}
                          alt="Expertise"
                        />
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className="card">
                    <div className="card-image">
                      <Image
                        src="/images/home/expertise-two.jpg"
                        className="card-img"
                        fill
                        alt="Expertise"
                      />
                    </div>
                    <div className="card-img-overlay">
                      <h5 className="card-title">Merchandising</h5>
                      <p className="card-btn">
                        <Image
                          src="/images/home/btn.svg"
                          className="img-fluid"
                          height={15}
                          width={21}
                          alt="Expertise"
                        />
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className="card">
                    <div className="card-image">
                      <Image
                        src="/images/home/expertise-three.jpg"
                        className="card-img"
                        fill
                        alt="Expertise"
                      />
                    </div>
                    <div className="card-img-overlay">
                      <h5 className="card-title">Ticketing</h5>
                      <p className="card-btn">
                        <Image
                          src="/images/home/btn.svg"
                          className="img-fluid"
                          height={15}
                          width={21}
                          alt="Expertise"
                        />
                      </p>
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
export default Expertise;

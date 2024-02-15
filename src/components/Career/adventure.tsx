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
import CareerForm from "./careerform";
const Adventure = () => {
  const [swiperRef, setSwiperRef] = useState(null); 
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
  return (
    <div>
      <section id="home-adventure" className="section-spacing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Join the
                <span className="special-heading">Adventure!</span>
              </h2>
            </div>
            <div className="col-12">
              <Swiper
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation]}
                loop={false} // Disable looping
                className="adventure-slider"
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
                  <div className="card" onClick={openModal}>
                    <div className="card-body">
                      <h5 className="card-title">Senior Copywriter</h5>
                      <p className="card-text">
                        &quot; I want Seventy Seven to be the first & the last
                        face I see when I begin planning for I AM SHE 2013
                        &quot;
                      </p>
                      <div className="card-btn">
                        <span className="main-btn">Apply Now</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card" onClick={openModal}>
                    <div className="card-body">
                      <h5 className="card-title">Senior Copywriter</h5>
                      <p className="card-text">
                        &quot; I want Seventy Seven to be the first & the last
                        face I see when I begin planning for I AM SHE 2013
                        &quot;
                      </p>
                      <div className="card-btn">
                        <span className="main-btn">Apply Now</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card" onClick={openModal}>
                    <div className="card-body">
                      <h5 className="card-title">Senior Copywriter</h5>
                      <p className="card-text">
                        &quot; I want Seventy Seven to be the first & the last
                        face I see when I begin planning for I AM SHE 2013
                        &quot;
                      </p>
                      <div className="card-btn">
                        <span className="main-btn">Apply Now</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card" onClick={openModal}>
                    <div className="card-body">
                      <h5 className="card-title">Senior Copywriter</h5>
                      <p className="card-text">
                        &quot; I want Seventy Seven to be the first & the last
                        face I see when I begin planning for I AM SHE 2013
                        &quot;
                      </p>
                      <div className="card-btn">
                        <span className="main-btn">Apply Now</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Stop the event propagation
          >
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <CareerForm />
          </div>
        </div>
      )}
    </div>
  );
};
export default Adventure;

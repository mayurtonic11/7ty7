"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
const MomentMagic = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  useEffect(() => {
    const delegate = "[data-fancybox]";
    const options = {};
    Fancybox.bind(delegate, options);
    return () => {
      Fancybox.destroy();
    };
  }, []);
  return (
    <>
      <section id="momentmagic-squad" className="section-spacing">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2>
                Moments of<span className="special-heading">Magic</span>
              </h2>
            </div>
            <div className="col-12">
              <Swiper
                spaceBetween={20}
                navigation={true}
                modules={[Pagination, Navigation]}
                loop={false} // Disable looping
                className="momentmagic-slider"
                pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 1,
                  },
                  767: {
                    slidesPerView: 3,
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
                  <Link
                    data-fancybox="moments-one"
                    href="/images/career/momentmagic-one.jpg"
                    className="card h-100"
                  >
                    <div className="card-photo">
                      <picture>
                        <Image
                          src="/images/career/momentmagic-one.jpg"
                          className="img-fluid"
                          height={351}
                          width={383}
                          alt="Meet the Squad"
                        />
                      </picture>
                    </div>
                    <div className="card-image-btn">
                      <picture>
                        <Image
                          src="/images/career/image-icon.svg"
                          className="img-fluid"
                          height={48}
                          width={48}
                          alt="Meet the Squad"
                        />
                      </picture>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Diwali 2023 S</h5>
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
                  <Link
                    data-fancybox="moments-one"
                    href="/images/career/momentmagic-one.jpg"
                    className="card h-100"
                  >
                    <div className="card-photo">
                      <picture>
                        <Image
                          src="/images/career/momentmagic-one.jpg"
                          className="img-fluid"
                          height={351}
                          width={383}
                          alt="Meet the Squad"
                        />
                      </picture>
                    </div>
                    <div className="card-image-btn">
                      <picture>
                        <Image
                          src="/images/career/image-icon.svg"
                          className="img-fluid"
                          height={48}
                          width={48}
                          alt="Meet the Squad"
                        />
                      </picture>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Diwali 2023 S</h5>
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
                  <Link
                    data-fancybox="moments-one"
                    href="/images/career/momentmagic-one.jpg"
                    className="card h-100"
                  >
                    <div className="card-photo">
                      <picture>
                        <Image
                          src="/images/career/momentmagic-one.jpg"
                          className="img-fluid"
                          height={351}
                          width={383}
                          alt="Meet the Squad"
                        />
                      </picture>
                    </div>
                    <div className="card-image-btn">
                      <picture>
                        <Image
                          src="/images/career/image-icon.svg"
                          className="img-fluid"
                          height={48}
                          width={48}
                          alt="Meet the Squad"
                        />
                      </picture>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Diwali 2023 S</h5>
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
                  <Link
                    data-fancybox="moments-one"
                    href="/images/career/momentmagic-one.jpg"
                    className="card h-100"
                  >
                    <div className="card-photo">
                      <picture>
                        <Image
                          src="/images/career/momentmagic-one.jpg"
                          className="img-fluid"
                          height={351}
                          width={383}
                          alt="Meet the Squad"
                        />
                      </picture>
                    </div>
                    <div className="card-image-btn">
                      <picture>
                        <Image
                          src="/images/career/image-icon.svg"
                          className="img-fluid"
                          height={48}
                          width={48}
                          alt="Meet the Squad"
                        />
                      </picture>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Diwali 2023 S</h5>
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
      <div className="gallery-album">
        <div id="moments-one" style={{ display: "none" }}>
          <Link
            data-fancybox="moments-one"
            href="/images/career/momentmagic-one.jpg"
            className="card h-100"
          >
            <div className="card-photo">
              <picture>
                <Image
                  src="/images/career/momentmagic-one.jpg"
                  className="img-fluid"
                  height={351}
                  width={383}
                  alt="Meet the Squad"
                />
              </picture>
            </div>
          </Link>
          <Link
            data-fancybox="moments-one"
            href="/images/career/momentmagic-two.jpg"
            className="card h-100"
          >
            <div className="card-photo">
              <picture>
                <Image
                  src="/images/career/momentmagic-two.jpg"
                  className="img-fluid"
                  height={351}
                  width={383}
                  alt="Meet the Squad"
                />
              </picture>
            </div>
          </Link>
          <Link
            data-fancybox="moments-one"
            href="/images/career/momentmagic-one.jpg"
            className="card h-100"
          >
            <div className="card-photo">
              <picture>
                <Image
                  src="/images/career/momentmagic-one.jpg"
                  className="img-fluid"
                  height={351}
                  width={383}
                  alt="Meet the Squad"
                />
              </picture>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default MomentMagic;

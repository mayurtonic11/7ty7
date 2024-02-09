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
const Ourcrew = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div>
      <section id="ourcrew" className="section-spacing">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="ourcrew-image">
                <picture>
                  <Image src="/images/home/join-crew.png" fill alt="Our Crew" />
                </picture>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ourcrew-content">
                <h2>
                  Join Our Crew
                  <span className="special-heading">(9-to-5s</span>
                  <span className="special-heading">(Are Overrated)</span>
                </h2>
                <p>
                  Embrace the Grind, Live for the Party’ is our vibe and we are
                  always on the lookout for people who bring their own spark.
                  Come join us on our exciting journey and feel how it is to
                  work with a team full of superstars!
                </p>
                <Link href="" className="main-btn">
                  Join Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Ourcrew;

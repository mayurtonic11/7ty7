"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const ImpeccableServices = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <section id="impeccable-services">
        <div className="circle-fill-icon services-icon-object-two"></div>
        <div className="container">
          <div className="row gy-5 gx-md-5 gy-md-3 gy-lg-5 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <Link href="" onClick={openModal} className="card">
                <div className="card-image">
                  <picture>
                    <Image
                      src="/images/expertise/expertise-one.jpg"
                      className="card-img"
                      fill
                      alt="Expertise"
                    />
                  </picture>
                </div>
                <div className="card-img-overlay">
                  <h5 className="card-title">Corporate Events</h5>
                  <p className="card-text">
                    We curate experiences with Live Concerts, leaving the
                    audience spellbound and craving for more
                  </p>
                  <p className="card-btn">
                    <Image
                      src="/images/expertise/btn.svg"
                      className="img-fluid"
                      height={15}
                      width={21}
                      alt="Expertise"
                    />
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="" onClick={openModal} className="card">
                <div className="card-image">
                  <picture>
                    <Image
                      src="/images/expertise/expertise-two.jpg"
                      className="card-img"
                      fill
                      alt="Expertise"
                    />
                  </picture>
                </div>
                <div className="card-img-overlay">
                  <h5 className="card-title">Content Production</h5>
                  <p className="card-text">
                    We curate experiences with Live Concerts, leaving the
                    audience spellbound and craving for more
                  </p>
                  <p className="card-btn">
                    <Image
                      src="/images/expertise/btn.svg"
                      className="img-fluid"
                      height={15}
                      width={21}
                      alt="Expertise"
                    />
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="" onClick={openModal} className="card">
                <div className="card-image">
                  <picture>
                    <Image
                      src="/images/expertise/expertise-three.jpg"
                      className="card-img"
                      fill
                      alt="Expertise"
                    />
                  </picture>
                </div>
                <div className="card-img-overlay">
                  <h5 className="card-title">Concerts and Festivals</h5>
                  <p className="card-text">
                    We curate experiences with Live Concerts, leaving the
                    audience spellbound and craving for more
                  </p>
                  <p className="card-btn">
                    <Image
                      src="/images/expertise/btn.svg"
                      className="img-fluid"
                      height={15}
                      width={21}
                      alt="Expertise"
                    />
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="" onClick={openModal} className="card">
                <div className="card-image">
                  <picture>
                    <Image
                      src="/images/expertise/expertise-four.jpg"
                      className="card-img"
                      fill
                      alt="Expertise"
                    />
                  </picture>
                </div>
                <div className="card-img-overlay">
                  <h5 className="card-title">
                    Concept, Graphics and Creative Solutions
                  </h5>
                  <p className="card-text">
                    We curate experiences with Live Concerts, leaving the
                    audience spellbound and craving for more
                  </p>
                  <p className="card-btn">
                    <Image
                      src="/images/expertise/btn.svg"
                      className="img-fluid"
                      height={15}
                      width={21}
                      alt="Expertise"
                    />
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="" onClick={openModal} className="card">
                <div className="card-image">
                  <picture>
                    <Image
                      src="/images/expertise/expertise-five.jpg"
                      className="card-img"
                      fill
                      alt="Expertise"
                    />
                  </picture>
                </div>
                <div className="card-img-overlay">
                  <h5 className="card-title">Merchandising</h5>
                  <p className="card-text">
                    We curate experiences with Live Concerts, leaving the
                    audience spellbound and craving for more
                  </p>
                  <p className="card-btn">
                    <Image
                      src="/images/expertise/btn.svg"
                      className="img-fluid"
                      height={15}
                      width={21}
                      alt="Expertise"
                    />
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="" onClick={openModal} className="card">
                <div className="card-image">
                  <picture>
                    <Image
                      src="/images/expertise/expertise-six.jpg"
                      className="card-img"
                      fill
                      alt="Expertise"
                    />
                  </picture>
                </div>
                <div className="card-img-overlay">
                  <h5 className="card-title">Ticketing</h5>
                  <p className="card-text">
                    We curate experiences with Live Concerts, leaving the
                    audience spellbound and craving for more
                  </p>
                  <p className="card-btn">
                    <Image
                      src="/images/expertise/btn.svg"
                      className="img-fluid"
                      height={15}
                      width={21}
                      alt="Expertise"
                    />
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="" onClick={openModal} className="card">
                <div className="card-image">
                  <picture>
                    <Image
                      src="/images/expertise/expertise-seven.jpg"
                      className="card-img"
                      fill
                      alt="Expertise"
                    />
                  </picture>
                </div>
                <div className="card-img-overlay">
                  <h5 className="card-title">MICE Management</h5>
                  <p className="card-text">
                    We curate experiences with Live Concerts, leaving the
                    audience spellbound and craving for more
                  </p>
                  <p className="card-btn">
                    <Image
                      src="/images/expertise/btn.svg"
                      className="img-fluid"
                      height={15}
                      width={21}
                      alt="Expertise"
                    />
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="" onClick={openModal} className="card">
                <div className="card-image">
                  <picture>
                    <Image
                      src="/images/expertise/expertise-eight.jpg"
                      className="card-img"
                      fill
                      alt="Expertise"
                    />
                  </picture>
                </div>
                <div className="card-img-overlay">
                  <h5 className="card-title">Talent Management</h5>
                  <p className="card-text">
                    We curate experiences with Live Concerts, leaving the
                    audience spellbound and craving for more
                  </p>
                  <p className="card-btn">
                    <Image
                      src="/images/expertise/btn.svg"
                      className="img-fluid"
                      height={15}
                      width={21}
                      alt="Expertise"
                    />
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="" onClick={openModal} className="card">
                <div className="card-image">
                  <picture>
                    <Image
                      src="/images/expertise/expertise-nine.jpg"
                      className="card-img"
                      fill
                      alt="Expertise"
                    />
                  </picture>
                </div>
                <div className="card-img-overlay">
                  <h5 className="card-title">Luxury & Experiential Tourism</h5>
                  <p className="card-text">
                    We curate experiences with Live Concerts, leaving the
                    audience spellbound and craving for more
                  </p>
                  <p className="card-btn">
                    <Image
                      src="/images/expertise/btn.svg"
                      className="img-fluid"
                      height={15}
                      width={21}
                      alt="Expertise"
                    />
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h3>Corporate Events</h3>
            <p>
              Here precision meets elegance and every detail is thoughtfully
              curated to ensure a seamless and exceptional experience. From the
              strategic planning to the grand finale, we orchestrate a fusion of
              creativity and expertise.
            </p>
            <Link href="" className="main-btn">
              Inquire Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default ImpeccableServices;

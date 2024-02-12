"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const BlogContent = () => {
  useEffect(() => {
    // JavaScript code
    var numberToShow = 6;
    var filterItems = document.querySelectorAll(".filter-item");
    var showMoreButton = document.getElementById("showmore");
    var showLessButton = document.getElementById("showless");
    // Check if buttons exist before attaching event listeners
    showMoreButton?.addEventListener("click", function () {
      for (var i = numberToShow; i < filterItems.length; i++) {
        // Explicitly cast to HTMLElement
        var element = filterItems[i] as HTMLElement;
        element.style.display = "block";
      }
      // Separate variable for styles
      var showMoreButtonStyle = showMoreButton?.style;
      var showLessButtonStyle = showLessButton?.style;
      showMoreButtonStyle?.setProperty("display", "none");
      showLessButtonStyle?.setProperty("display", "inline-block");
    });
    showLessButton?.addEventListener("click", function () {
      for (var i = numberToShow; i < filterItems.length; i++) {
        // Explicitly cast to HTMLElement
        var element = filterItems[i] as HTMLElement;
        element.style.display = "none";
      }
      // Separate variable for styles
      var showMoreButtonStyle = showMoreButton?.style;
      var showLessButtonStyle = showLessButton?.style;
      showMoreButtonStyle?.setProperty("display", "inline-block");
      showLessButtonStyle?.setProperty("display", "none");
    });
    // show only first 'numberToShow' blog items by default
    for (var i = numberToShow; i < filterItems.length; i++) {
      // Explicitly cast to HTMLElement
      var element = filterItems[i] as HTMLElement;
      element.style.display = "none";
    }
    // Update button display based on the number of items
    const shouldShowButtons = filterItems.length > numberToShow;
    showMoreButton?.style?.setProperty(
      "display",
      shouldShowButtons ? "inline-block" : "none"
    );
    showLessButton?.style?.setProperty(
      "display",
      shouldShowButtons ? "none" : "none"
    );
  }, []);
  return (
    <div>
      <section id="blog-content">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-4 filter-item">
              <Link href="#" className="card">
                <div className="card-image zoom-hover">
                  <picture>
                    <Image
                      src="/images/blog/blog-one.jpg"
                      height={285}
                      width={380}
                      alt="blog-image"
                    />
                  </picture>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Top creative event romotion ideas to hike attendance
                  </h5>
                  <p className="card-text">
                    <small>
                      <picture>
                        <Image
                          src="/images/home/eventology-arrow.svg"
                          className="img-fluid"
                          height={15}
                          width={21}
                          alt="button"
                        />
                      </picture>
                    </small>
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-4 filter-item">
              <Link href="#" className="card">
                <div className="card-image zoom-hover">
                  <picture>
                    <Image
                      src="/images/blog/blog-one.jpg"
                      height={285}
                      width={380}
                      alt="blog-image"
                    />
                  </picture>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Top creative event romotion ideas to hike attendance
                  </h5>
                  <p className="card-text">
                    <small>
                      <picture>
                        <Image
                          src="/images/home/eventology-arrow.svg"
                          className="img-fluid"
                          height={15}
                          width={21}
                          alt="button"
                        />
                      </picture>
                    </small>
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-4 filter-item">
              <Link href="#" className="card">
                <div className="card-image zoom-hover">
                  <picture>
                    <Image
                      src="/images/blog/blog-one.jpg"
                      height={285}
                      width={380}
                      alt="blog-image"
                    />
                  </picture>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Top creative event romotion ideas to hike attendance
                  </h5>
                  <p className="card-text">
                    <small>
                      <picture>
                        <Image
                          src="/images/home/eventology-arrow.svg"
                          className="img-fluid"
                          height={15}
                          width={21}
                          alt="button"
                        />
                      </picture>
                    </small>
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-4 filter-item">
              <Link href="#" className="card">
                <div className="card-image zoom-hover">
                  <picture>
                    <Image
                      src="/images/blog/blog-one.jpg"
                      height={285}
                      width={380}
                      alt="blog-image"
                    />
                  </picture>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Top creative event romotion ideas to hike attendance
                  </h5>
                  <p className="card-text">
                    <small>
                      <picture>
                        <Image
                          src="/images/home/eventology-arrow.svg"
                          className="img-fluid"
                          height={15}
                          width={21}
                          alt="button"
                        />
                      </picture>
                    </small>
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-4 filter-item">
              <Link href="#" className="card">
                <div className="card-image zoom-hover">
                  <picture>
                    <Image
                      src="/images/blog/blog-one.jpg"
                      height={285}
                      width={380}
                      alt="blog-image"
                    />
                  </picture>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Top creative event romotion ideas to hike attendance
                  </h5>
                  <p className="card-text">
                    <small>
                      <picture>
                        <Image
                          src="/images/home/eventology-arrow.svg"
                          className="img-fluid"
                          height={15}
                          width={21}
                          alt="button"
                        />
                      </picture>
                    </small>
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-4 filter-item">
              <Link href="#" className="card">
                <div className="card-image zoom-hover">
                  <picture>
                    <Image
                      src="/images/blog/blog-one.jpg"
                      height={285}
                      width={380}
                      alt="blog-image"
                    />
                  </picture>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Top creative event romotion ideas to hike attendance
                  </h5>
                  <p className="card-text">
                    <small>
                      <picture>
                        <Image
                          src="/images/home/eventology-arrow.svg"
                          className="img-fluid"
                          height={15}
                          width={21}
                          alt="button"
                        />
                      </picture>
                    </small>
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-4 filter-item">
              <Link href="#" className="card">
                <div className="card-image zoom-hover">
                  <picture>
                    <Image
                      src="/images/blog/blog-one.jpg"
                      height={285}
                      width={380}
                      alt="blog-image"
                    />
                  </picture>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Top creative event romotion ideas to hike attendance
                  </h5>
                  <p className="card-text">
                    <small>
                      <picture>
                        <Image
                          src="/images/home/eventology-arrow.svg"
                          className="img-fluid"
                          height={15}
                          width={21}
                          alt="button"
                        />
                      </picture>
                    </small>
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-4 filter-item">
              <Link href="#" className="card">
                <div className="card-image zoom-hover">
                  <picture>
                    <Image
                      src="/images/blog/blog-one.jpg"
                      height={285}
                      width={380}
                      alt="blog-image"
                    />
                  </picture>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Top creative event romotion ideas to hike attendance
                  </h5>
                  <p className="card-text">
                    <small>
                      <picture>
                        <Image
                          src="/images/home/eventology-arrow.svg"
                          className="img-fluid"
                          height={15}
                          width={21}
                          alt="button"
                        />
                      </picture>
                    </small>
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-4 filter-item">
              <Link href="#" className="card">
                <div className="card-image zoom-hover">
                  <picture>
                    <Image
                      src="/images/blog/blog-one.jpg"
                      height={285}
                      width={380}
                      alt="blog-image"
                    />
                  </picture>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Top creative event romotion ideas to hike attendance
                  </h5>
                  <p className="card-text">
                    <small>
                      <picture>
                        <Image
                          src="/images/home/eventology-arrow.svg"
                          className="img-fluid"
                          height={15}
                          width={21}
                          alt="button"
                        />
                      </picture>
                    </small>
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-12 py-4 text-center">
              <button id="showmore" className="main-btn">
                Show More
              </button>
              <button id="showless" className="main-btn">
                Show Less
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BlogContent;

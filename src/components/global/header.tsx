"use client"
import React, { useEffect, useState } from "react";
import Logo from "@/components/global/logo";
import Navlinks from "@/components/global/navlinks";
const Header = () => {
      const [prevScrollPos, setPrevScrollPos] = useState(0);
      const handleScroll = () => {
        if (typeof window !== "undefined") {
          const currentScrollPos = window.scrollY;
          const headerElement = document.querySelector("header");
          if (headerElement) {
            if (currentScrollPos > prevScrollPos) {
              // Scrolling down
              headerElement.classList.remove("nav-down");
              headerElement.classList.add("nav-up");
            } else {
              // Scrolling up or at the top
              headerElement.classList.remove("nav-up");
              headerElement.classList.add("nav-down");
            }
            setPrevScrollPos(currentScrollPos);
          }
        }
      };
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [prevScrollPos]);
  return (
    <div id="navigationbar">
      <header className="nav-down d-none d-lg-block">
        <nav className="navbar navbar-expand">
          <div className="container">
            <Logo />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-between">
                <Navlinks />
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="navbar menuButton d-block d-lg-none">
        <input
          style={{}}
          type="checkbox"
          id="navcheck"
          role="button"
          title="menu"
        />
        <label htmlFor="navcheck" aria-hidden="true" title="menu">
          <span className="burger">
            <span className="bar">
              <span className="visuallyhidden">Menu</span>
            </span>
          </span>
          <span>
            <Logo />
          </span>
        </label>
        <ul id="menu" className="menuNav">
          <Navlinks />
        </ul>
      </div>
    </div>
  );
};
export default Header;
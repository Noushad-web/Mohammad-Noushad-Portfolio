import React, { useEffect, useRef } from "react";

// For small devices
// In this navbar we need always to define the popup menu after the hamburger div as its nextElementSibling
// coz m not using ref again and again for reference so we need to that for perfomance optimization.

const Navbar = () => {
  const hamRef = useRef();

  useEffect(() => {
    console.log("render");
    const hamElement = hamRef.current;

    hamElement.addEventListener("click", (e) => {
      const children = e.target.children;
      const ulElement = e.target.nextElementSibling;

      children[0].classList.toggle("first");
      children[1].classList.toggle("middle");
      children[2].classList.toggle("last");
      ulElement.classList.toggle("left");

      // solving the issue of clicking any menu element and menu popup should be closed every time
      const liElements = ulElement.children;
      for (let i = 0; i < liElements.length; i++) {
        const element = liElements[i];

        element.addEventListener("click", (e) => {
          ulElement.classList.remove("left");
          children[0].classList.remove("first");
          children[1].classList.remove("middle");
          children[2].classList.remove("last");
        });
      }
    });
  });

  return (
    <header className="app py-md-0 py-1">
      <nav className="d-flex container">
        <a href="#home" className="navbar_logo">
          MDNS
        </a>

        <div className="hamburger d-md-none d-block " ref={hamRef}>
          <div className="lines "></div>
          <div className="lines "></div>
          <div className="lines "></div>
        </div>

        <ul className="d-flex">
          <li className="nav_li">
            <a href="#home" className="nav_btn">
              Home
            </a>
          </li>
          <li className="nav_li">
            <a href="#about" className="nav_btn">
              About
            </a>
          </li>
          <li className="nav_li">
            <a href="#project" className="nav_btn">
              Project
            </a>
          </li>
          <li className="nav_li">
            <a href="#contact" className="nav_btn">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

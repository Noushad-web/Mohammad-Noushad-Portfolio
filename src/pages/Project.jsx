import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import quoteRight from "../images/project/quotes-right.png";
import quoteLeft from "../images/project/quotes-left.png";
import guardianleft from "../images/project/guardian-left.png";
import guardianRight from "../images/project/guardian-right.png";
import colorShadesLeft from "../images/project/color-shades-left.png";
import colorShadesRight from "../images/project/color-shades-right.png";
/* Add your fronts.ai image imports here */
import frontsLeft from "../images/project/fronts-left.png";
import frontsRight from "../images/project/fronts-right.png";

const Project = () => {
  const firstProject = useRef();
  const secondProject = useRef();
  const thirdProject = useRef();
  const fourthProject = useRef();

  // IntersectionObserver - 1
  const [ref, inView, entry] = useInView({
    threshold: 0.9,
  });

  // IntersectionObserver - 2
  const [ref2, inView2, entry2] = useInView({
    threshold: 0.9,
  });

  // IntersectionObserver - 3
  const [ref3, inView3, entry3] = useInView({
    threshold: 0.9,
  });

  // IntersectionObserver - 4
  const [ref4, inView4, entry4] = useInView({
    threshold: 0.9,
  });

  // useEffect(() => {
  //   if (inView) {
  //     firstProject.current.classList.remove('split_img_wrapper');
  //   } else {
  //     firstProject.current.classList.add('split_img_wrapper');
  //   }

  //   if (inView2) secondProject.current.classList.remove('split_img_wrapper');
  //   else secondProject.current.classList.add('split_img_wrapper');

  //   if (inView3) thirdProject.current.classList.remove('split_img_wrapper');
  //   else thirdProject.current.classList.add('split_img_wrapper');

  //   if (inView4) fourthProject.current.classList.remove('split_img_wrapper');
  //   else fourthProject.current.classList.add('split_img_wrapper');

  // }, [inView, inView2, inView3, inView4]);

  return (
    <section className="project-section">
      <div id="project" className="container">
        <q className="h1Fake">
          <h1 className="theme_headline">Projects</h1>
        </q>

        {/*----------------------------------------------------- Fronts.ai (New First Row) ------------------------------------------- */}
        <div
          ref={ref}
          className="row pt-2 project-item mt-3 justify-content-between"
        >
          <div className="col-md-5">
            <q className="articleFake">
              <article>
                <h4>
                  <span className="roman-numbers">I.</span> Fronts.ai - AI
                  Powered Website Builder
                </h4>

                <p>
                  As a Full-Stack Engineer, I help build and maintain this
                  platform. I implemented a full meeting and services booking
                  system with timezone support, integrated Stripe for
                  subscriptions and marketplace payments, and managed core
                  website generation using Python and Flask. I also optimized
                  search and performance using MongoDB indexes and Redis
                  caching.
                </p>
              </article>
            </q>
            <div className="anchorBtnWrapper mt-3 d-flex justify-content-around">
              <q className="aFake">
                <a
                  href="https://fronts.ai"
                  data-project="true"
                  className="anchorBtn"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  website
                </a>
              </q>
            </div>
          </div>

          <div
            ref={firstProject}
            className="col-md-6 split_img_wrapper mt-3 me-0 row"
          >
            <figure className="col-6 left_side_fig transition pe-0 text-end">
              <img src={frontsLeft} alt="" className="img-fluid" />
            </figure>
            <figure className="col-6 right_side_fig transition text-start ps-0">
              <img src={frontsRight} alt="" className="img-fluid" />
            </figure>
          </div>
        </div>

        {/*----------------------------------------------------- second row ------------------------------------------- */}
        <div
          ref={ref2}
          className="row pt-2 project-item me-0 justify-content-between"
        >
          {/* heading */}
          <div className="col-md-5">
            <q className="articleFake">
              <article>
                <h4>
                  <span className="roman-numbers">III.</span> The Random Quotes
                </h4>

                <p>
                  I made this Random Quote generator from an open api. I used
                  the Vanilla Javascript in it. I used the fetch api in it. So,
                  In brief This is how it works You just need to click on the
                  button I provide and then an api call start and shows the any
                  random quote.
                </p>
              </article>
            </q>

            <div className="anchorBtnWrapper mt-3 d-flex justify-content-around">
              <q className="aFake">
                <a
                  href="https://github.com/Noushad-web/Quotes.github.io"
                  data-project="true"
                  className="anchorBtn"
                >
                  {" "}
                  github{" "}
                </a>
              </q>
              <q className="aFake">
                <a
                  href="https://noushad-web.github.io/Quotes.github.io/"
                  data-project="true"
                  className="anchorBtn"
                >
                  {" "}
                  website
                </a>
              </q>
            </div>
          </div>

          {/* image  */}
          <div
            ref={thirdProject}
            className="col-md-6 mt-3 row split_img_wrapper transition"
          >
            <figure className="col-6 left_side_fig transition pe-0 text-end">
              <img src={quoteLeft} alt="" className="img-fluid" />
            </figure>
            <figure className="col-6 right_side_fig transition text-start ps-0">
              <img src={quoteRight} alt="" className="img-fluid" />
            </figure>
          </div>
        </div>

        {/*----------------------------------------------------- Third row ------------------------------------------- */}
        <div
          ref={ref3}
          className="row pt-2 project-item me-0 justify-content-between"
        >
          {/* heading */}
          <div className="col-md-5">
            <q className="articleFake">
              <article>
                <h4>
                  <span className="roman-numbers">IV.</span> The Color Shades
                </h4>

                <p>
                  I made this project with REACT. The concept of this project is
                  to take the color code in hexadecimal color format or take the
                  color names and then after that by using the concept of hsl
                  concept of lightness. I'm making the shades of typed colors.
                </p>
              </article>
            </q>

            <div className="anchorBtnWrapper mt-3 d-flex justify-content-around">
              <q className="aFake">
                <a
                  href="https://github.com/Noushad-web/color-shades/tree/master"
                  data-project="true"
                  className="anchorBtn"
                >
                  {" "}
                  github{" "}
                </a>
              </q>
              <q className="aFake">
                <a
                  href="https://noushad-web.github.io/color-shades/"
                  data-project="true"
                  className="anchorBtn"
                >
                  {" "}
                  website
                </a>
              </q>
            </div>
          </div>

          {/* image  */}
          <div
            ref={fourthProject}
            className="col-md-6 mt-3 row split_img_wrapper transition"
          >
            <figure className="col-6 left_side_fig transition pe-0 text-end">
              <img src={colorShadesLeft} alt="" className="img-fluid" />
            </figure>
            <figure className="col-6 right_side_fig transition text-start ps-0">
              <img src={colorShadesRight} alt="" className="img-fluid" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

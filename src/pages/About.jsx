import SvgAllElement from "../component/skillSvg/SvgAllElement";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const aboutSection = useRef();
  const para = useRef();
  const [countAboutMe, setCountAboutMe] = useState(0);

  // IntersectionObserver
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    root: null,
  });

  const textAnimationFun = () => {
    const wordDelayDiv = para.current;
    // const wordDelaySpan = para.current.children;

    // text to be animated
    const animatedText = `I am a dedicated Full-Stack Engineer based in Ludhiana with a passion for building scalable, high-performance web applications. I describe myself as an engineer who thrives at the intersection of robust backend logic and seamless frontend experiences ❤️. I take great pride in the architecture of my code, ensuring that every project I touch is more optimized and maintainable than the last.

My core expertise has evolved from crafting responsive layouts with HTML, CSS, and Tailwind to architecting complex systems using React, Next.js, and Redux on the frontend, paired with Python (Flask) and Node.js on the backend. I have deep experience managing databases with MongoDB, implementing caching with Redis, and handling secure payment infrastructures with Stripe.

I am an active contributor to the open-source community and a firm believer in the power of the web platform. Beyond writing code, I focus on performance optimization, SEO-friendly architecture, and smooth third-party API integrations.

When I’m not at my desk, you’ll usually find me staying active through exercise, singing, or catching up on the latest technical deep-dives on Medium. `;
    const splittedArray = animatedText.split(" ");
    const space = " ";

    //animation Object transform
    const animationObjectTransform = [
      { opacity: 0, transform: "translateX(50px)" },
      { opacity: 0.5, offset: 0.5, transform: "translateX(10px)" },
      { opacity: 1, offset: 1, transform: "translateX(0)" },
    ];
    // animation Object fade
    const animationObjectFade = [
      { opacity: 0 },
      { opacity: 0.5, offset: 0.5 },
      { opacity: 1, offset: 1 },
    ];

    splittedArray.forEach((value, i) => {
      let span = document.createElement("span");
      if (splittedArray[i] !== "<br>") {
        span.innerHTML = splittedArray[i] + space;
        span.style.display = "inline-block";
        span.style.marginLeft = "5px";
        span.style.opacity = 0;
      } else {
        span.innerHTML = "<br> <br>";
        span.style.display = "inline";
      }

      if (wordDelayDiv != null) {
        wordDelayDiv.appendChild(span);
      }

      // animation
      span.animate(animationObjectFade, {
        duration: 500,
        fill: "forwards",
        delay: i * 80,
        // easing:'cubic-bezier(0.175, 0.885, 0.32, 1.275) ',
      });
    });
  };

  useEffect(() => {
    // console.log(inView);
    setCountAboutMe(countAboutMe + 1);
    if (inView && countAboutMe === 1) {
      textAnimationFun();
      aboutSection.current.classList.add("aboutSectionDark");
    }
  }, [inView]);

  // useEffect(() => {
  //   console.log(countAboutMe);
  // }, [countAboutMe])

  return (
    <section class="about-section" ref={aboutSection}>
      <div id="about" className="container" ref={ref}>
        <div className="bg-text-display">
          <q className="h1Fake">
            <h1 className="theme_headline">About Me</h1>
          </q>
        </div>

        <div className="contentAboutWrapper">
          {/* first part  */}
          <article className="aboutMeContent">
            <q className="paraFake">
              <div className="word-delay">
                <p ref={para} className=""></p>
              </div>
            </q>
          </article>

          {/* second part */}
          <div className="skillsDiv d-flex flex-wrap justify-content-evenly">
            {inView || countAboutMe > 1 ? <SvgAllElement /> : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

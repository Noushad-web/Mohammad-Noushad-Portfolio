
import SvgAllElement from "../component/skillSvg/SvgAllElement";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const About = ()=> {

  const aboutSection = useRef();
  const para = useRef();
  const [countAboutMe, setCountAboutMe] = useState(0);
  
  // IntersectionObserver
  const {ref, inView, entry} = useInView({
    threshold:0.5,
    root:null
  });
  

  const textAnimationFun = ()=>{
    const wordDelayDiv = para.current;
    // const wordDelaySpan = para.current.children;


    // text to be animated 
    const animatedText =
`I'm a hard working and dedicated professional Front-End developer based in Ludhiana. 
I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️. <br> I take great pride in my work, and I always try to better myself with every project I work on. 
I like to write semantic, cross browser compatible code by hand that is re-useable, maintainable and easy to understand. <br> 
The main areas of my expertise is HTML, CSS , JAVASCRIPT , JQUERY,  REACT, BOOTSTRAP, TAILWIND CSS and RWD ( Responsive Web Design ) 
but I have a intermediate knowledge of Nodejs, Express, MongoDB, Adobe Xd and Adobe Illustrator. <br> 
I also maintain my code on git and codepen. 
In my free time you can find me spending time doing exercise, singing or reading articles of medium. `;
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
    

    splittedArray.forEach((value, i)=>{
      let span = document.createElement("span");
        if(splittedArray[i] !== '<br>'){
          span.innerHTML = splittedArray[i] + space;
          span.style.display = "inline-block";
          span.style.marginLeft = "5px";
          span.style.opacity = 0;
        }else{
          span.innerHTML = '<br> <br>'
          span.style.display = "inline"
        }
        
        if(wordDelayDiv != null ){
            wordDelayDiv.appendChild(span);
        }
    
        // animation
        span.animate(animationObjectFade, {
          duration: 500,
          fill: "forwards",
          delay: i * 80,
          // easing:'cubic-bezier(0.175, 0.885, 0.32, 1.275) ',
        });
    }) 

  }



  useEffect(()=>{
    // console.log(inView);
    setCountAboutMe(countAboutMe + 1);
    if(inView && countAboutMe === 1){
      textAnimationFun();
      aboutSection.current.classList.add('aboutSectionDark');
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
        <article className="aboutMeContent" >
          <q className="paraFake">
            <div className="word-delay">
              <p ref={para} className=""></p>
            </div>
          </q>
        </article>

        {/* second part */}
        <div className="skillsDiv d-flex flex-wrap justify-content-evenly">
           {(inView || countAboutMe > 1) ? <SvgAllElement /> : null }
        </div>


      </div>
    </div>
    </section>
  );
}

export default About;

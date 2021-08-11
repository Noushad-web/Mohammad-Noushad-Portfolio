
import React, { useState } from "react";
import Bootstrap from "./Bootstrap";
import GithubIcon from "./GithubIcon";
import Jquery from "./Jquery";
import ReactSvg from "./ReactSvg";
import Sass from "./Sass";
import Javascript from "./Javascript";
import Tailwind from "./Tailwind";
import Html from "./Html";
import Css from "./Css";
import Nodejs from "./Nodejs";



const SvgAllElement = () => {



  const icon = {

    hidden: {
      opacity: 0,
      pathLength: 0,
      fill:'rgba(255,255,255,0)'
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill:'rgba(255,255,255,1)'
    },
  };

  return (
    <>
      {/* {countAboutMe === 1  ? ( */}
        <>
          <Bootstrap icon={icon}/>
          <Sass icon={icon}/>
          <ReactSvg icon={icon}/>
          <GithubIcon icon = {icon}/>
          <Jquery icon = {icon}/>
          <Javascript icon = {icon}/>
          <Tailwind icon = {icon}/>
          <Html icon = {icon}/>
          <Css icon = {icon}/>
          <Nodejs icon = {icon}/>
        </>
      {/* ) : (
        null */}
      {/* )} */}
    </>
  );
};

export default SvgAllElement;

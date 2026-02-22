import React, { useEffect, useRef } from "react";

const Footer = () => {
  const socialMediaBtnWrapper = useRef();

  // useEffect(()=>{

  //     const allBtns = socialMediaBtnWrapper.current.children;
  //     if (allBtns !== undefined) {

  //        for (let i = 0; i < allBtns.length; i++) {
  //            const element = allBtns[i];
  //         //    console.log(element);
  //             element.addEventListener('mouseover', (e)=>{
  //                 console.log(element);
  //             })

  //             element.addEventListener('mouseout', ()=>{
  //                 console.log();
  //             })
  //        }
  //     }

  // })

  return (
    <footer className="container ">
      <q className="h1Fake ps-md-5 ps-3 d-block">
        <br />
        <h1 className="theme_headline d-inline-block">Let's talk</h1>
        <br />
      </q>

      <div className="socialMediaBtns mx-auto" ref={socialMediaBtnWrapper}>
        <q className="btnFake">
          <a
            href="https://www.facebook.com/naushad.siddiqi.75"
            data-project="true"
            className="fb"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-noushad-siddiqi-82335620a/"
            data-project="true"
            className="linkedIn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=918566822287&text&app_absent=0"
            data-project="true"
            className="whatsApp"
          >
            <i class="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://github.com/Noushad-web"
            data-project="true"
            className="github"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://codepen.io/Noushad-siddiqi"
            data-project="true"
            className="codepen"
          >
            <i class="fab fa-codepen"></i>
          </a>
          <form
            method="post"
            className="d-inline-block"
            action="mailto:mdnoushadsiddiqi@gmail.com"
          >
            <button
              type="submit"
              data-project="true"
              className="gmail extraTranslate border-0"
            >
              <i class="far fa-envelope"></i>
            </button>
          </form>
          &nbsp; &nbsp; &nbsp;
        </q>
      </div>

      <q className="bodyFakeClose ps-md-3 ps-2 d-block "></q>
      <q className="htmlFakeClose d-block"></q>
    </footer>
  );
};

export default Footer;

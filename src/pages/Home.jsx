import React from "react";
// import profileImg from "../images/featherProfile2.png";
import profileImg from "../images/profile.png";

const Home = () => {
  return (
    <section className="home-section container">
      <div id="home" className="pt-4 pt-md-0 mx-auto wrapper-home flex-wrap d-flex justify-between">
      <div className="row">
        <article className="col-md-8 order-md-1 order-2 col-12 mx-auto">
          <q className="htmlFake d-block" data-aos="fade-right" data-aos-duration="700" data-aos-delay="100"></q>
          <q className="bodyFake ps-md-3 ps-2 d-block " data-aos="fade-right" data-aos-duration="700"
            data-aos-delay="300"></q>
          <q className="h1Fake d-block ps-md-5 ps-3" data-aos="fade-right" data-aos-duration="700" data-aos-delay="500">
            <h1 className="theme_headline" data-aos="fade" data-aos-easing="linear" data-aos-duration="1200"
              data-aos-delay="1000">
              Hi, <br />
              I'm Mohammad Noushad Siddiqi.
            </h1>
            <h1 className="theme_headline" data-aos="fade" data-aos-easing="ease" data-aos-duration="1200"
              data-aos-delay="1500">
              {" "}
              <span className="span-highlight">Front-end</span> developer.
            </h1>
          </q>
          <q className="para paraFake ps-md-5 ps-3  " data-aos="fade-right" data-aos-duration="700" data-aos-delay="1700">
            <p className=" d-block ps-md-5 ps-3 " data-aos="fade" data-aos-easing="ease" data-aos-duration="2000"
              data-aos-delay="2000">
              {" "}
              I focus to build websites that run across various platforms,
              user-friendly, attractive and Mobile compatibility. I love css and
              javascript and I'm on the way to be best in it.{""}
            </p>
          </q>
    
          <div className="btnDiv text-center" data-aos="fade-right" data-aos-once="true" data-aos-easing="linear"
            data-aos-duration="1000" data-aos-delay="2200">
              {/* 
              --------- btnPage ------------used as a class when background becomes crimson
              */}
              <q className="btnFake"><a href="#contact" data-project="true" className="btnPage" > 
                Hire Me
              </a>
            </q>
          </div>
        </article>
    
        <figure className="col-md-4 order-md-2 order-1  col-5 m-md-auto" data-aos="fade" data-aos-easing="ease" data-aos-duration="2000" data-aos-delay="2500">
          <img className="profileImg   m-auto img-fluid" src={profileImg} alt="" />
        </figure>
      
      </div>
    </div>
    </section>
  );
};

export default Home;

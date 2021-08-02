import { useEffect, useState } from "react";
import "./AboutSection.scss";
import IconCss from "../../images/icons/css.png";
import IconDj from "../../images/icons/dj.png";
import IconGit from "../../images/icons/git.png";
import IconHtml from "../../images/icons/html.png";
import IconJs from "../../images/icons/js.png";
import IconMongo from "../../images/icons/mongo.png";
import IconNodejs from "../../images/icons/nodejs.png";
import IconPostgresql from "../../images/icons/postgresql.png";
import IconPython from "../../images/icons/python.png";
import IconReact from "../../images/icons/react.png";
import IconSass from "../../images/icons/sass.png";
import StackItems from "../StackItems/StackItems";
import me1 from "../../images/me1.png";
import arrow from "../../images/arrow.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import twitter from "../../images/twitter.png";

export default function AboutSection() {
  const [parallaxDataTop, setParallaxDataTop] = useState([]);
  const [parallaxDataBot, setParallaxDataBot] = useState([]);
  //   const [distance, setDistance] = useState((convertVWToPx("100vw") * 0.8) / 5);
  const [iconTop] = useState([
    { IconCss: IconCss },
    { IconDj: IconDj },
    { IconGit: IconGit },
    { IconHtml: IconHtml },
    { IconJs: IconJs },
    { IconMongo: IconMongo },
  ]);
  const [iconBot] = useState([
    { IconNodejs: IconNodejs },
    { IconPostgresql: IconPostgresql },
    { IconPython: IconPython },
    { IconReact: IconReact },
    { IconSass: IconSass },
  ]);
  //   function convertVWToPx(value) {
  //     // eslint-disable-next-line no-useless-escape
  //     var parts = value.match(/([0-9\.]+)(vh|vw)/);
  //     var q = Number(parts[1]);
  //     var side =
  //       window[["innerHeight", "innerWidth"][["vh", "vw"].indexOf(parts[2])]];
  //     return side * (q / 100);
  //   }

  // console.log((convertVWToPx('100vw')*0.8/5))

  //   useEffect(() => {
  //     const data = [];
  //     for (let i = 0; i < 5; i++) {
  //       data.push([
  //         {
  //           start: ".parallax-top",
  //           end: ".halfpoint",
  //           properties: [
  //             {
  //               startValue: i * distance + 100,
  //               endValue: i * distance,
  //               property: "translateX",
  //             },
  //           ],
  //         },
  //         {
  //           start: ".parallax-top",
  //           end: ".halfpoint",
  //           properties: [
  //             {
  //               startValue: 0,
  //               endValue: 0.9,
  //               property: "opacity",
  //             },
  //           ],
  //         },
  //       ]);
  //     }
  //     const data1 = [];
  //     for (let i = 0; i < 5; i++) {
  //       data1.push([
  //         {
  //           start: ".halfpoint",
  //           end: ".endpoint",
  //           properties: [
  //             {
  //               startValue: i * distance - 100,
  //               endValue: i * distance,
  //               property: "translateX",
  //             },
  //           ],
  //         },
  //         {
  //           start: ".halfpoint",
  //           end: ".endpoint",
  //           properties: [
  //             {
  //               startValue: 0,
  //               endValue: 0.9,
  //               property: "opacity",
  //             },
  //           ],
  //         },
  //       ]);
  //     }
  //     setParallaxDataTop(data);
  //     setParallaxDataBot(data1);
  //     // console.log(parallaxData)
  //   }, [distance]);

  //   window.onresize = function () {
  //     const newDistance = (convertVWToPx("100vw") * 0.8) / 5;
  //     if (newDistance !== distance) {
  //       setDistance(newDistance);
  //     }
  //   };

  return (
    <div className="AboutSection">
      <div className="heading">
        <div className="centered-hr">
          <hr className="hr-text" data-content="About Me" />
        </div>
      </div>

      <main>
        <div className="about-main">
          <div className="section-border-r">
            <p className="intro-text">
              Hey there!
              <br /> My name is{" "}
              <span className="highlighted-text">Trong Nguyen</span>
            </p>
            <p className="sub-text">Welcome to my corner of the interwebs!</p>
          </div>
          <div className="main-text">

            <p>
              I am a passionate full stack developer residing currently based in NYC, New York - unwavering in my quest to be the best me that could possibly be! 
              <br/> With my experience in non-clinical health administration and a background in art and design, I always strive for an end-user first approach in design.

            </p>
            <p>
            <span className="highlighted-text">Full Name</span>: Trong T. Nguyen<br/>
            <span className="highlighted-text">Email</span>: Trong.nguyen1008@gmail.com<br/>
            <span className="highlighted-text">Education</span>: &nbsp;General Assembly&nbsp; / &nbsp;Bachelor of Computer Science &nbsp; / &nbsp;Associate's Degree (IT)
            </p>
            <div className="contact-info">
              <button>Contact me!</button> 
              <div>
              <img src={linkedin} alt=""/>
              <img src={github} alt=""/>
              <img src={twitter} alt=""/>
                </div>
            </div>
          </div>
        </div>
        <div className="pfp-area">
          {/* <div className="arrow">
            <img src={arrow} alt="" loading="lazy" />
          </div> */}

        </div>

      </main>
    </div>
  );
}

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
import arrow from "../../images/arrow1.png";

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
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>

      <main>
        <div className="about-text">
          {/* {parallaxDataTop.map((data,idx) => 
                        <StackItems index={ idx } data={ data } image={ iconTop[idx] } pos={"top"}/>)} */}
          <div class="sketchy">
            <p>
              I am a full stack developer residing in NYC, New York - unwavering
              in my quest to be the best me that could possibly be! After
              graduating Lehman College with a degree in Computer science, I
              went into medicine with an interest in nonclinical administration.
              I quickly realized that I've always been a programmer at heart,
              frequently learning new technologies and developing small apps to
              make my life easier at work.
            </p>
            <p>
              In 2021, I committed to General Assembly's bootcamp program and
              haven't looked back. Since graduating GA's SEI program, I strive
              to better my craft each and every day.
            </p>
            <span> &laquo; </span>
            <span> &raquo; </span>

            <span>
              {" "}
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </span>
          </div>
        </div>
        <div className="pfp-area">
          <div className="arrow">
            <img src={arrow} alt="" />
          </div>
          <div class="sketchy">
            <img src={me1} alt="" className="pfp" loading="lazy" />
          </div>
        </div>
        {/* <div style={{height:100}} className="endpoint"></div> */}
      </main>
    </div>
  );
}

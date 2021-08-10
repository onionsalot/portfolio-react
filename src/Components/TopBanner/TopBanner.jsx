import { Parallax } from "react-parallax";
import Plx from "react-plx";
import background from "../../images/bloop.png";
import video from "../../videos/Animasi.mp4";
import TypeOut from "react-typeout";
import "./TopBanner.scss";

export default function TopBanner() {
  const words = ["a Student", "a Developer", "an Artist"];
  const parallaxDataMouse = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 100,
          property: "translateY",
        },
      ],
    },
    {
      start: 400,
      end: 600,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];
  

  return (
    <div className="TopBanner">
      <div className="inside-animation">
        <video loop muted autoPlay src={video} className="animation" />
        
        <div className="opening-text">
          Hi, I'm Trong! <br /> I'm...&nbsp;
          <TypeOut
            words={words}
            random={false}
            typeSpeed={100}
            pauseSpeed={2000}
            caret={true}
            className="windup"
          />
        </div>
        <Plx className="mouse-container" parallaxData={parallaxDataMouse}>
          {/* <div className="mouse-container"> */}
          <div className="mouse">
            <div className="wheel" />
          </div>
          <div className="arrow-1">&#5167;</div>
          <div className="arrow-2">&#5167;</div>
          <div className="arrow-3">&#5167;</div>
          {/* </div> */}
        </Plx>
      </div>
    </div>
  );
}

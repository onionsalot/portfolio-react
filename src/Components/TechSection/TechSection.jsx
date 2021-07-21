import "./TechSection.scss";
import IconCss from "../../images/icons/css.png";
import IconDjango from "../../images/icons/dj.png";
import IconGit from "../../images/icons/git.png";
import IconHtml from "../../images/icons/html.png";
import IconJavascript from "../../images/icons/js.png";
import IconMongo from "../../images/icons/mongo.png";
import IconNodejs from "../../images/icons/nodejs.png";
import IconPostgresql from "../../images/icons/postgresql.png";
import IconPython from "../../images/icons/python.png";
import IconReact from "../../images/icons/react.png";
import IconSass from "../../images/icons/sass.png";
import Plx from "react-plx";
import { useEffect, useState } from "react";
import StackItems from "../StackItems/StackItems";

export default function TechSection() {
  const [parallaxData, setParallaxData] = useState([]);
  const [hoverItem, setHoverItem] = useState("");
  const [hoverState, setHoverState] = useState(false);
  const [icon] = useState([
    { IconCss: IconCss },
    { IconDjango: IconDjango },
    { IconGit: IconGit },
    { IconHtml: IconHtml },
    { IconJavascript: IconJavascript },
    { IconMongo: IconMongo },
    { IconNodejs: IconNodejs },
    { IconPostgresql: IconPostgresql },
    { IconPython: IconPython },
    { IconReact: IconReact },
    { IconSass: IconSass },
    { IconSass: IconSass },
    { IconSass: IconSass },
    { IconSass: IconSass },
  ]);


  useEffect(() => {
    const data = [];
    for (let i = 0; i < 14; i++) {
      data.push([
        {
          start: ".stack-container",
            // end: ".end-row",
          //   startOffset: 100,
          startOffset: 30 * i,
          duration: 400 - i*20,
          properties: [
            {
              startValue: 0,
              endValue: .7,
              property: "opacity",
            },
            {
              startValue: -50,
              endValue: 0,
              property: "translateY",
            },
          ],
        },
      ]);
    }
    
    setParallaxData(data);
    // setParallaxDataBot(data1);
    // console.log(parallaxData)
  }, []);

  function onMouseEnter(e) {
    console.log(e.target.className)
    setHoverItem(e.target.classList[0])
  }
  function onMouseLeave(e) {
    console.log(e)
    setHoverItem("")
  }
  
  return (
    <div className="TechSection">
      <div className="heading">
        <div className="centered-hr">
          <hr className="hr-text" data-content="Tech Stack" />
        </div>
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>

      <div className="stack-container">
        {parallaxData.map((data,idx) => 
                        <StackItems index={ idx } data={ data } image={ icon[idx] } hoverItem={ hoverItem } hoverState={ hoverState } onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>)}
        {/* <div className="item">
          <Plx className="" parallaxData={parallaxData[0]}>
            <img src={IconCss} alt="" />
          </Plx>
        </div>
        <div className="item">
          <Plx className="parallax-items" parallaxData={parallaxData[1]}>
            <img src={IconDj} alt="" />
          </Plx>
        </div>
        <div className="item">
          <Plx className="parallax-items" parallaxData={parallaxData[2]}>
            <img src={IconGit} alt="" />
          </Plx>
        </div>
        <div className="item">
          <Plx className="parallax-items" parallaxData={parallaxData[3]}>
            <img src={IconHtml} alt="" />
          </Plx>
        </div>
        <div className="item">
          <Plx className="parallax-items" parallaxData={parallaxData[4]}>
            <img src={IconJs} alt="" />
          </Plx>
        </div>
        <div className="item">
          <Plx className="parallax-items" parallaxData={parallaxData[5]}>
            <img src={IconMongo} alt="" />
          </Plx>
        </div>
        <div className="item">
          <Plx className="parallax-items" parallaxData={parallaxData[1]}>
            <img src={IconNodejs} alt="" />
          </Plx>
        </div>
        <div className="item">
          <Plx className="parallax-items" parallaxData={parallaxData[1]}>
            <img src={IconPostgresql} alt="" />
          </Plx>
        </div>
        <div className="item">
          <Plx className="parallax-items" parallaxData={parallaxData[1]}>
            <img src={IconPython} alt="" />
          </Plx>
        </div>
        <div className="item">
          <Plx className="parallax-items" parallaxData={parallaxData[1]}>
            <img src={IconReact} alt="" />
          </Plx>
        </div>
        <div className="item">
          <Plx className="parallax-items" parallaxData={parallaxData[1]}>
            <img src={IconSass} alt="" />
          </Plx>
        </div>
        <div className="item">
          <Plx className="parallax-items" parallaxData={parallaxData[1]}>
            <img src={IconNodejs} alt="" />
          </Plx>
        </div>
        <div className="item">
          <Plx className="parallax-items" parallaxData={parallaxData[1]}>
            <img src={IconNodejs} alt="" />
          </Plx>
        </div> */}
        
      </div>
      <div className="end-row" />
    </div>
  );
}

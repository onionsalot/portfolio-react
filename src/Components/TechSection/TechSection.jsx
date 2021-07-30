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
import KnowledgeItems from "../KnowledgeItems/KnowledgeItems";

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

  // useEffect(() => {
  //   const data = [];
  //   for (let i = 0; i < 14; i++) {
  //     data.push([
  //       {
  //         start: ".stack-container",
  //         // end: ".end-row",
  //         //   startOffset: 100,
  //         startOffset: 30 * i,
  //         duration: 400 - i * 20,
  //         properties: [
  //           {
  //             startValue: 0,
  //             endValue: 0.7,
  //             property: "opacity",
  //           },
  //           {
  //             startValue: -50,
  //             endValue: 0,
  //             property: "translateY",
  //           },
  //         ],
  //       },
  //     ]);
  //   }

  //   setParallaxData(data);
  //   // setParallaxDataBot(data1);
  //   // console.log(parallaxData)
  // }, []);

  function onMouseEnter(e) {
    console.log(e.target.className);
    setHoverItem(e.target.classList[0]);
  }
  function onMouseLeave(e) {
    console.log(e);
    setHoverItem("");
  }

  return (
    <div className="TechSection">
      <div className="heading light">
        <div className="centered-hr-light">
          <hr className="hr-text" data-content="My Skills" />
        </div>
      </div>

      <main>
      <div className="section-border-r">
            <span class="sub-text">Knowledge</span>
          </div>
        <div className="knowledge-section">
          <KnowledgeItems />
          <KnowledgeItems />
          <KnowledgeItems />
        </div>
        <br />
        <div className="section-border-l">
            <span class="sub-text">Tech Stack</span>
          </div>
        <div className="stack-container">
          {icon.map((data, idx) => (
            <StackItems
              index={idx}
              // data={data}
              image={data}
              hoverItem={hoverItem}
              hoverState={hoverState}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          ))}
        </div>
      </main>
      <div className="end-row" />
    </div>
  );
}

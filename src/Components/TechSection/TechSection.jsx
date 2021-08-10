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
  const [hoverItem, setHoverItem] = useState(null);
  const [hoverState, setHoverState] = useState(false);
  const [stack] = useState([
    { name: "CSS", IconCss: IconCss },
    { name: "Django", IconDjango: IconDjango },
    { name: "Git", IconGit: IconGit },
    { name: "HTML", IconHtml: IconHtml },
    { name: "Javascript", IconJavascript: IconJavascript },
    { name: "MongoDB", IconMongo: IconMongo },
    { name: "NodeJS", IconNodejs: IconNodejs },
    { name: "Postgresql", IconPostgresql: IconPostgresql },
    { name: "Python", IconPython: IconPython },
    { name: "React", IconReact: IconReact },
    { name: "SASS", IconSass: IconSass },
    { name: "AWS", IconSass: IconSass },
    { name: "Java", IconSass: IconSass },
    { name: "Photoshop", IconSass: IconSass },
  ]);
  // const cardObj = [
  //   {"Mobile-first" : "As the world moves forward, as do we. There are currently 3.8billion (48%) of people in the world with a smartphone, and building without them in mind is a mistake!"},
  //   {"Secure" : "Data is expensive, and stolen data is even more expensive. I make sure to never leave a stone unturned, whether it be a cryptographic approach to data handling, to a simple complier warning."},
  //   {"Consistent, DRY and KISS": "Moving out of the basement means working with real people. They need to know what you're writing, and YOU need to know what you're writing a month from then. Every line I write, I make sure that it is consistent and DRY, so I can keep consistency and not repeat myself. Oops."},
  // ]



  return (
    <div className="TechSection">
      <div className="heading">
        <div className="centered-hr">
          <hr className="hr-text" data-content="My Skills" />
        </div>
      </div>

      <main>
        <div className="left">
        
        <div className="laptop"> 
          {hoverItem ? (
            <div className={hoverItem}/>
            ) : (
            <div className="VSCode"/>
          )}
        </div>

        </div>
        <div className="right">
          <div className="section-border-l">
            {stack.map((e, idx) => (
              <StackItems idx={idx} stackItem={e} setHoverItem={setHoverItem}/>
            ))}
            
            <div className="more"><p className="main-text">...and if I don't know it, I'm willing to learn it!</p></div>
          </div>
        </div>
      </main>
    </div>
  );
}

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
import { useState } from "react";
import StackItems from "../StackItems/StackItems";

export default function TechSection() {
  const [hoverItem, setHoverItem] = useState(null);
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


  return (
    <div className="TechSection" id="tech">
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

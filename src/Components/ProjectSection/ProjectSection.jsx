import { useState } from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import PhoneDisplay from "../PhoneDisplay/PhoneDisplay";
import "./ProjectSection.scss";
import BootstrapP from "../../videos/bootstrapP.mp4";
import BootstrapT from "../../videos/bootstrapT.mp4";
import BootstrapD from "../../videos/bootstrapD.mp4";

import MatchP from "../../videos/matchP.mp4";
import MatchT from "../../videos/matchT.mp4";
import MatchD from "../../videos/matchD.mp4";

import NewsP from "../../videos/newsP.mp4";
import NewsT from "../../videos/newsT.mp4";
import NewsD from "../../videos/newsD.mp4";

import TutorP from "../../videos/tutorP.mp4";
import TutorT from "../../videos/tutorT.mp4";
import TutorD from "../../videos/tutorD.mp4";

export default function ProjectSection() {
  const [clicked, setClicked] = useState("");
  const [phoneClass, setPhoneClass] = useState("phone");
  const projectList = [
    {
      title: "Match Two",
      text: "A Memory card game designed using pure JS, CSS, and DOM manipulation.",
      git: "https://github.com/onionsalot/Matching-memory-game",
      link: "https://onionsalot.github.io/Matching-memory-game/",
      vidP: { MatchP },
      vidT: { MatchT },
      vidD: { MatchD },
      techs: "Javascript, HTML, CSS",
    },
    {
      title: "BootstrapMarketCap",
      text: "A Cryptocurrency tracker with auth and portfolio tracking included!",
      git: "https://github.com/onionsalot/crypto-app-mern",
      link: "https://bootstrapmarketcap.herokuapp.com/",
      vidP: { BootstrapP },
      vidT: { BootstrapT },
      vidD: { BootstrapD },
      techs: "Javascript, React, CSS, RESTFUL API, Mongoose, Express, NodeJS",
    },
    {
      title: "Coding Tutor",
      text: "A marketplace where students can connect with tutors, sign up on their available dates and leave reviews.",
      git: "https://github.com/onionsalot/codingtutor",
      link: "https://codingtutor.herokuapp.com/",
      vidP: { TutorP },
      vidT: { TutorT },
      vidD: { TutorD },
      techs: "Python, HTML, React, Django, Postgresql, CSS, RESTFUL API",
    },
    {
      title: "News Reader",
      text: "A heavily customizable, native android app featuring a plethora of new sources.",
      git: "https://github.com/onionsalot/NewsReader",
      link: "https://github.com/onionsalot/NewsReader",
      vidP: { NewsP },
      vidT: { NewsT },
      vidD: { NewsD },
      techs: "Java, RESTFUL API, SQLite",
    },
  ];

  function handleClick(e) {
    if (e.target.id === "phone") {
      setPhoneClass("phone");
    }
    if (e.target.id === "tablet") {
      setPhoneClass("phone horizontal");
    }
    if (e.target.id === "desktop") {
      setPhoneClass("phone desktop");
    }
  }

  return (
    <div className="ProjectSection" id="project">
      <div className="heading light">
        <div className="centered-hr-light">
          <hr className="hr-text" data-content="My Projects" />
        </div>
      </div>

      <main>
        <div className="left" id="display">
        <div>
          {phoneClass === "phone" ? (<button className="selected" onClick={handleClick} id="phone">
              Phone
            </button>):(<button onClick={handleClick} id="phone">
              Phone
            </button>)}
          {phoneClass === "phone horizontal" ? (<button className="selected" onClick={handleClick} id="tablet">
              Tablet
            </button>):(<button onClick={handleClick} id="tablet">
              Tablet
            </button>)}
          {phoneClass === "phone desktop" ? (<button className="selected" onClick={handleClick} id="desktop">
              Desktop
            </button>):(<button onClick={handleClick} id="desktop">
              Desktop
            </button>)}
          </div>
          <PhoneDisplay
            phoneClass={phoneClass}
            clicked={projectList[clicked]}
          />
        </div>
        <div className="right">
          {projectList.map((e, idx) => (
            <ProjectItem
              key={idx}
              idx={idx}
              content={e}
              clicked={clicked}
              setClicked={setClicked}
            />
          ))}
          
        </div>
      </main>
    </div>
  );
}

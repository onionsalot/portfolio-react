import { useEffect, useState } from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import PhoneDisplay from "../PhoneDisplay/PhoneDisplay"
import "./ProjectSection.scss";
import cryptoP from "../../videos/cryptoP.mp4"
import cryptoT from "../../videos/cryptoT.mp4"
import cryptoD from "../../videos/cryptoD.mp4"

export default function ProjectSection() {
  const [clicked, setClicked] = useState(0);
  const [phoneClass, setPhoneClass] = useState("phone")
  // const projectList1 = [
  //   { "project1": project1},
  //   { "project2": project2},
  // ]
  // const projectList2 = [
  //   { "project3": project3},
  //   { "project4": project4},
  // ]
  const projectList = [
    {
      title: "Match Two",
      text: "A Memory card game designed using pure JS, CSS, and DOM manipulation.",
      git: "",
      link: "",
      vidP: " ",
      vidT: " ",
      vidD: " ",
    },
    {
      title: "BootstrapMarketCap",
      text: "A Cryptocurrency tracker with auth and portfolio tracking included!",
      git: "",
      link: "",
      vidP: {cryptoP},
      vidT: {cryptoT},
      vidD: {cryptoD},
    },
    {
      title: "Coding Tutor",
      text: "A Marketplace where tutors and students can connect. Sign up for tutors on their available dates and leave reviews.",
      git: "",
      link: "",
      vidP: " ",
      vidT: " ",
      vidD: " ",
    },
    {
      title: "News Reader",
      text: "A heavily customizable, native android app featuring a plethora of new sources.",
      git: "",
      link: "",
      vidP: " ",
      vidT: " ",
      vidD: " ",
    },
  ];

  function handleClick(e) {
    if (e.target.id === "phone") {
      setPhoneClass("phone")
    }
    if (e.target.id === "tablet") {
      setPhoneClass("phone horizontal")
    }
    if (e.target.id === "desktop") {
      setPhoneClass("phone desktop")
    }
  }

  return (
    <div className="ProjectSection">
      <div className="heading">
        <div className="centered-hr">
          <hr className="hr-text" data-content="My Projects" />
        </div>
        {/* <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div> */}
      </div>

      <main>
        {/* <div className="top-row">
          {projectList1.map((project, idx)=> 
            <ProjectItem idx={idx} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} name={Object.keys(project)[0]} video={Object.values(project)[0]} hover={hover} />
          )}
        </div>
        <div className="bottom-row">
          {projectList2.map((project, idx)=> 
          <ProjectItem idx={idx} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} name={Object.keys(project)[0]} video={Object.values(project)[0]} hover={hover} />
          )}
        </div> */}
        <div className="left">
          {projectList.map((e, idx) => (
            <ProjectItem idx={idx} content={e} clicked={clicked} setClicked={setClicked} />
          ))}
        </div>
        <div className="right">
        <div>
            <button onClick={handleClick} id="phone">Phone</button>
            <button onClick={handleClick} id="tablet">Tablet</button>
            <button onClick={handleClick} id="desktop">Desktop</button>
          </div>
            <PhoneDisplay phoneClass={phoneClass} clicked={projectList[clicked]}/>
        </div>
      </main>
    </div>
  );
}

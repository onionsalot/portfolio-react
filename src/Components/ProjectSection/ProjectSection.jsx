import { useEffect, useState } from "react";
import project1 from "../../images/matchvid.mp4"
import project2 from "../../images/bootstrapvid.mp4"
import project3 from "../../images/sample-mp4-file.mp4"
import project4 from "../../images/sample-mp4-file.mp4"
import ProjectItem from "../ProjectItem/ProjectItem"
import "./ProjectSection.scss";


export default function ProjectSection() {
  const [hover, setHover]= useState("");
  const projectList1 = [
    { "project1": project1},
    { "project2": project2},
  ]
  const projectList2 = [
    { "project3": project3},
    { "project4": project4},
  ]
  function onMouseEnter(e) {
    e.target.play()
    setHover(e.target.id)
  }
  function onMouseLeave(e) {
    e.target.pause()
    e.target.currentTime=0;
    setHover("")
  }

  return (
    <div className="ProjectSection">
      <div className="heading">
        <div className="centered-hr">
          <hr className="hr-text" data-content="My Projects" />
        </div>
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>

      <main>
        <div className="top-row">
          {projectList1.map((project, idx)=> 
            <ProjectItem idx={idx} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} name={Object.keys(project)[0]} video={Object.values(project)[0]} hover={hover} />
          )}
        </div>
        <div className="bottom-row">
          {projectList2.map((project, idx)=> 
          <ProjectItem idx={idx} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} name={Object.keys(project)[0]} video={Object.values(project)[0]} hover={hover} />
          )}
        </div>


      </main>
    </div>
  );
}

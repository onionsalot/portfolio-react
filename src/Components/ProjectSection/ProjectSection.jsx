import { useEffect, useState } from "react";
import project1 from "../../images/sample-mp4-file.mp4"
import project2 from "../../images/sample-mp4-file.mp4"
import project3 from "../../images/sample-mp4-file.mp4"
import project4 from "../../images/sample-mp4-file.mp4"
import ProjectItem from "../ProjectItem/ProjectItem"
import "./ProjectSection.scss";


export default function ProjectSection() {
  const [hover, setHover]= useState("");
  const projectList = [
    { "project1": project1},
    { "project2": project2},
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
      {/* <hr class="hr-text" data-content="ABOUT ME" /> */}
      <div className="heading">
        <h1>
            My <span className="special"></span>
        </h1>
        <div class="divider"></div>

      </div>

      <main>
        {projectList.map((project, idx)=> 
          <ProjectItem idx={idx} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} name={Object.keys(project)[0]} video={Object.values(project)[0]} hover={hover} />
        )}


      </main>
    </div>
  );
}

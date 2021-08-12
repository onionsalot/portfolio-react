import "./ProjectItem.scss";
import { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import { Collapse } from "react-collapse";

export default function ProjectItem({
  idx,
  clicked,
  setClicked,
  content,
}) {
  const [show, setShow] = useState(false);
  const title = content["title"]
  const text = content["text"]
  const git = content["git"]
  const link = content["link"]
  const techs = content["techs"]


  useEffect(() => {
    if (clicked !== idx) {
      setShow(false)
    }
  },[clicked])

  function handleClicked(e) {
    setClicked(idx)
    setShow(true);
    document.getElementById('project').scrollIntoView();
  }

  return (
    <div className="ProjectItem" onClick={handleClicked}>
      <div className="card">
        <div className="card-heading highlight">
          <span className="highlighted-text main-text">{title}</span>
        </div>
        <div className="card-body main-text">
          {text}
        </div>
      </div>
        <Collapse isOpened={show}>
          {show ? (
            <div className="project-bottom">
              <span><a href={git} target="_blank" rel="noreferrer">&#9655; Git Repo</a>
              <a href={link} target="_blank" rel="noreferrer">&#9655; Try it out</a></span>
              <p className="multi">{techs}</p>
            </div>
          ):(
            <>
            </>
          )}
        </Collapse>
        {!show ? <div className="arrow">&#9660;</div> : ""}
    </div>
  );
}

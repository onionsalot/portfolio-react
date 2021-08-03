import "./ProjectItem.scss";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";

export default function ProjectItem({
  idx,
  clicked,
  setClicked,
  content,
}) {
  // const [holderClass, setHolderClass] = useState("ProjectItem");
  const [show, setShow] = useState(false);
  const title = content["title"]
  const text = content["text"]
  const git = content["git"]
  const link = content["link"]


  useEffect(() => {
    if (clicked !== idx) {
      setShow(false)
    }
  },[clicked])
  // useEffect(() => {
  //   if (hover == name) {
  //     setHolderClass("ProjectItem larger");
  //   } else if (hover !== name && hover !== "") {
  //     console.log("set smaller for", name);
  //     setHolderClass(`ProjectItem smaller`);
  //   } else {
  //     console.log("set neutral for", name);
  //     setHolderClass(`ProjectItem neutral`);
  //   }
  // }, [hover]);

  function handleShow() {
    setShow(!show);
  }

  // function onMouseEnter(e) {
  //   console.log("bloop", e.target.id)
  //   // e.target.play()
  //   setHover(e.target.id)
  //   setShow(true);
  // }
  // function onMouseLeave(e) {
  //   console.log("bloop")

  //   // e.target.pause()
  //   // e.target.currentTime=0;
  //   setHover("")
  //   setShow(false);

  // }

  function handleClicked(e) {
    console.log('clicked is', idx)
    setClicked(idx)
    setShow(!show);
  }

  return (
    <div className="ProjectItem">
      <div className="card" onClick={handleClicked}>
        <div className="card-heading highlight">
          <span className="highlighted-text main-text">{title}</span>
        </div>
        <div className="card-body main-text">
          {text}
        </div>
      <Collapse isOpened={show}>
        <div>Git Repo: {git}</div>
        <div>Link: {link}</div>
      </Collapse>
      </div>
    </div>
  );
}

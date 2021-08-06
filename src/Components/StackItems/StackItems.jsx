import { useEffect, useState } from "react";
import Plx from "react-plx";
import "./StackItems.scss";
import ScrollAnimation from "react-animate-on-scroll";

export default function StackItems({ stackItem, setHoverItem }) {
  const name = stackItem.name;
  // const imageValue = Object.values(image);
  // const styleInfo = `parallax-items`;
  // const [hover, setHover] = useState("neutral");
  // const dataContent = keyName[0].replace(/Icon/g, "");
  // useEffect(() => {
  //   if (hoverItem === keyName[0]) {
  //     console.log("set larger for", keyName[0]);
  //     setHover(`${keyName[0]} larger`);
  //   } else if (hoverItem !== keyName[0] && hoverItem !== "") {
  //     console.log("set smaller for", keyName[0]);
  //     setHover(`${keyName[0]} smaller`);
  //   } else {
  //     console.log("set neutral for", keyName[0]);
  //     setHover(`${keyName[0]} neutral`);
  //   }
  // }, [hoverItem]);

  function onMouseEnter(e) {
    console.log(e.target.id);
    setHoverItem(e.target.id);
  }
  function onMouseLeave(e) {
    setHoverItem(null);
  }

  return (
    <div className="item tech-bottom" id={name} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {name}
      {/* <div className="under_text">
        <div>{dataContent}</div>
      </div> */}
    </div>
  );
}

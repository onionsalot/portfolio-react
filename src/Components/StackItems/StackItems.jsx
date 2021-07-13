import { useEffect, useState } from "react";
import Plx from "react-plx";
import "./StackItems.scss";

export default function StackItems({
  index,
  data,
  image,
  hoverItem,
  hoverState,
  onMouseEnter,
  onMouseLeave,
}) {
  const keyName = Object.keys(image);
  const imageValue = Object.values(image);
  const styleInfo = `parallax-items`;
  const [hover,setHover] = useState("neutral")
  useEffect(() => {
      if(hoverItem === keyName[0]) {
          console.log("set larger for", keyName[0])
          setHover(`${keyName[0]} larger`)
      } else if (hoverItem !== keyName[0] && hoverItem !== "") {
        console.log("set smaller for", keyName[0])
        setHover(`${keyName[0]} smaller`)
      } else {
        console.log("set neutral for", keyName[0])
        setHover(`${keyName[0]} neutral`)
      }
  },[hoverItem])

  return (
    <div className="item">
      <Plx className={styleInfo} parallaxData={data}>
        <img
          src={imageValue[0]}
          alt=""
          className={hover}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </Plx>
      <span>BLEH</span>
    </div>
  );
}

import "./PhoneDisplay.scss";
import { useEffect, useState } from "react";

export default function PhoneDisplay({ phoneClass, clicked }) {
  const [vid, setVid] = useState("");
  useEffect(() => {
    console.log(clicked)
    console.log(Object.values(clicked.vidP)[0])
    if (phoneClass === "phone") {
      console.log("phone")
      setVid(Object.values(clicked.vidP)[0]);
    } else if (phoneClass === "phone horizontal") {
      console.log("Tablet")
      setVid(Object.values(clicked.vidT)[0]);
    } else if (phoneClass === "phone desktop") {
      console.log("Desktop")
      setVid(Object.values(clicked.vidD)[0]);
    }
  }, [clicked, phoneClass]);

  return (
    <>
      <div className={phoneClass}>
        <div className="content">{/* <img src={video} alt="" /> */}
        <video loop muted autoPlay src={vid}/>
            {/* <source src={vid} type="video/mp4"/>
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div>
    </>
  );
}

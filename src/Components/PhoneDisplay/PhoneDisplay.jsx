import "./PhoneDisplay.scss";
import { useEffect, useState } from "react";

export default function PhoneDisplay({ phoneClass, clicked }) {
  const [vid, setVid] = useState("");
  useEffect(() => {
    if (clicked !== undefined) {
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
    }
  }, [clicked, phoneClass]);

  return (
    <>
      <div className={phoneClass}>
        <div className="content">
          {clicked ? ("") : (
            <div className="empty">
              <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
              <div className="main-text">Click on a project to preview.</div>
            </div>
          )}
          <video loop muted autoPlay src={vid}/>
        </div>
      </div>
    </>
  );
}

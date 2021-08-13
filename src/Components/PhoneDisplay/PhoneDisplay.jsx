import "./PhoneDisplay.scss";
import { useEffect, useState } from "react";

export default function PhoneDisplay({ phoneClass, clicked }) {
  const [vid, setVid] = useState("");
  useEffect(() => {
    if (clicked !== undefined) {
      if (phoneClass === "phone") {
        setVid(Object.values(clicked.vidP)[0]);
      } else if (phoneClass === "phone horizontal") {
        setVid(Object.values(clicked.vidT)[0]);
      } else if (phoneClass === "phone desktop") {
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
          <video loop muted playsInline autoPlay src={vid}/>
        </div>
      </div>
    </>
  );
}

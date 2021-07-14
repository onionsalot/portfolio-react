import "./ProjectItem.scss";
import { useEffect, useState } from "react";


export default function ProjectItem({onMouseEnter, onMouseLeave, name, video, hover}) {
    const [holderClass, setHolderClass] = useState("ProjectItem")
    useEffect(() => {
        if (hover == name ) {
            setHolderClass("ProjectItem larger")
        } else if (hover !== name && hover !== "") {
            console.log("set smaller for", name)
            setHolderClass(`ProjectItem smaller`)
          } else {
            console.log("set neutral for", name)
            setHolderClass(`ProjectItem neutral`)
          }
    },[hover])

    return(

        <div className={holderClass}>
          <div className="holder">
            <p className="name-desc"><h2>{name}</h2><br/>
            DESCRIPTION
            

            </p>
          </div>
          <video loop muted className="projects" id={name} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <source src={video} type='video/mp4'/>
          </video>
        </div>
    )
}

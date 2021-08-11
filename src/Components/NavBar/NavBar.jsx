import "./NavBar.scss";
import { useEffect, useState } from "react";

export default function NavBar() {
    const [toggleSide, setToggleSide] = useState("nav-links")
    const [toggleBurger, setToggleBurger] = useState("burger")

    function onClickSlider() {
        if (toggleSide==="nav-links") {
            console.log("bloop")
            setToggleSide("nav-links nav-active")
            setToggleBurger("burger burger-active")
        } else {
            setToggleSide("nav-links")
            setToggleBurger("burger")
        }
    }
return(
    <div className="NavBar">

        <nav>
            <div className="logo"/>
            <ul className={toggleSide}>
                <li>
                    <a href="#" alt="">Home</a>
                </li>
                <li>
                    <a href="#" alt="">About</a>
                </li>
                <li>
                    <a href="#" alt="">Work</a>
                </li>
                <li>
                    <a href="#" alt="">Projects</a>
                </li>
                <li>
                    <a href="#" alt="">Projects</a>
                </li>
            </ul>

            <div className={toggleBurger} onClick={onClickSlider}>
                <div className="line1"/>
                <div className="line2"/>
                <div className="line3"/>
            </div>
        </nav>
    </div>
)
}

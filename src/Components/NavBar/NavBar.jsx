import "./NavBar.scss";
import { useEffect, useState } from "react";

export default function NavBar() {
    const [toggle, setToggle] = useState(false);

    const [sideClass, setSideClass] = useState("nav-links")
    const [burgerClass, setBurgerClass] = useState("burger")

    useEffect(() => {
        if (toggle === true) {
            setSideClass("nav-links nav-active")
            setBurgerClass("burger burger-active")
        } else {
            setSideClass("nav-links")
            setBurgerClass("burger")
        }
      }, [toggle]);


return(
    <div className="NavBar">

        <nav>
            <div className="logo"/>
            <ul className={sideClass} onClick={()=> {setToggle(!toggle)}}>
                <li>
                    <a href="#about" alt="">About</a>
                </li>
                <li>
                    <a href="#project" alt="">Projects</a>
                </li>
                <li>
                    <a href="#tech" alt="">Skills</a>
                </li>
                <li>
                    <a href="#philosophy" alt="">Philosophy</a>
                </li>
                <li>
                    <a href="#contact" alt="">Contact</a>
                </li>
            </ul>

            <div className={burgerClass} onClick={()=> {setToggle(!toggle)}}>
                <div className="line1"/>
                <div className="line2"/>
                <div className="line3"/>
            </div>
        </nav>
    </div>
)
}

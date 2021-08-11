import "./NavBar.scss";
import { useEffect, useState } from "react";
import ScrollAnimation from 'react-animate-on-scroll';

export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    const [nameToggle, setNameToggle] = useState(false);
    const [sideClass, setSideClass] = useState("link-section")
    const [linkClass, setLinkClass] = useState("nav-links")
    const [burgerClass, setBurgerClass] = useState("burger")
    const [navExtend, setNavExtend] = useState("")

    useEffect(() => {
        if (toggle === true) {
            setSideClass("link-section nav-active")
            setBurgerClass("burger burger-active")
            setLinkClass("nav-links nav-active")
        } else {
            setSideClass("link-section")
            setBurgerClass("burger")
            setLinkClass("nav-links")
        }
      }, [toggle]);

      useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
      }, []);
      const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 200) {
            setNavExtend("extend");
            setNameToggle(true);
        }
        if (position < 201) {
            setNavExtend("");
            setNameToggle(false);
        }
    };
return(
    <div className="NavBar">

        <nav className={navExtend}>
        {/* <ScrollAnimation offset="200" animateIn="fadeIn">
        TrongNguyen
</ScrollAnimation> */}

            <div className={nameToggle ? "logo show-logo" : "logo"}>Trong Nguyen</div>
            
            {/* <div className={sideClass} onTouchStart={()=>{setToggle(!toggle)}} onMouseDown={()=>{setToggle(!toggle)}} > */}
            <div className={sideClass} >
                <div className="empty-box" onWheel={()=>{setToggle(false)}} onTouchStart={()=>{setToggle(false)}} onMouseDown={()=>{setToggle(false)}}/>

                <ul className={linkClass} >
                    <li>
                        <a href="#about" alt="" onClick={()=>{setToggle(!toggle)}}>About</a>
                    </li>
                    <li>
                        <a href="#project" alt="" onClick={()=>{setToggle(!toggle)}}>Projects</a>
                    </li>
                    <li>
                        <a href="#tech" alt="" onClick={()=>{setToggle(!toggle)}}>Skills</a>
                    </li>
                    <li>
                        <a href="#philosophy" alt="" onClick={()=>{setToggle(!toggle)}}>Philosophy</a>
                    </li>
                    <li>
                        <a href="#contact" alt="" onClick={()=>{setToggle(!toggle)}}>Contact</a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/document/d/1S8aMJ3WoTIo6sUAvhkNf_9uvzYKVeWI1WqVsm5E8re0/edit?usp=sharing" target="_blank" rel="noreferrer" alt="" onClick={()=>{setToggle(!toggle)}}>Resume</a>
                    </li>
                </ul>
            </div>

            <div className={burgerClass} onClick={()=> {setToggle(!toggle)}}>
                <div className="line1"/>
                <div className="line2"/>
                <div className="line3"/>
            </div>
        </nav>
    </div>
)
}

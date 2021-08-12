import { useEffect, useState } from "react";
import "./AboutSection.scss";
import IconCss from "../../images/icons/css.png";
import IconDj from "../../images/icons/dj.png";
import IconGit from "../../images/icons/git.png";
import IconHtml from "../../images/icons/html.png";
import IconJs from "../../images/icons/js.png";
import IconMongo from "../../images/icons/mongo.png";
import IconNodejs from "../../images/icons/nodejs.png";
import IconPostgresql from "../../images/icons/postgresql.png";
import IconPython from "../../images/icons/python.png";
import IconReact from "../../images/icons/react.png";
import IconSass from "../../images/icons/sass.png";
import StackItems from "../StackItems/StackItems";
import me1 from "../../images/me1.png";
import arrow from "../../images/arrow.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import twitter from "../../images/twitter.png";

export default function AboutSection() {

  return (
    <div className="AboutSection" id="about">
      <div className="heading">
        <div className="centered-hr">
          <hr className="hr-text" data-content="About Me" />
        </div>
      </div>

      <main>
        <div className="about-main">
          <div className="section-border-r">
            <p className="intro-text">
              Hey there!
              <br /> Thanks for stopping by.

            </p>
            <p className="sub-text">Welcome to my corner of the interwebs!</p>
          </div>
          <div className="main-text">

            <p>
              I am a passionate full-stack developer currently residing in NYC, New York - unwavering in my quest to be the best me that could possibly be! 
              <br/> With my experience in non-clinical health administration and a background in art and design, I always strive for an end-user first approach in design.

            </p>
            <p>
            <span className="highlighted-text">Full Name</span>: Trong T. Nguyen <span style={{"font-size":"15px", "font-style":"italic"}}>(pronounced 'win' hence the domain!)</span><br/>
            <span className="highlighted-text">Email</span>: Trong.nguyen1008@gmail.com<br/>
            <span className="highlighted-text">Education</span>: &nbsp;General Assembly&nbsp; / &nbsp;Bachelor of Computer Science &nbsp; / &nbsp;Associate's Degree (IT)
            </p>
            <div className="contact-info">
              <div>
              <a className="link_button" href="#contact">Contact me!</a>
              </div>
              
              <div>
              <a href="https://www.linkedin.com/in/trong-nguyen1008/" target="_blank" rel="noreferrer"> <img src={linkedin} alt=""/> </a>
              <a href="https://github.com/onionsalot" target="_blank" rel="noreferrer"> <img src={github} alt=""/> </a>
              <a href="https://twitter.com/onionsalot" target="_blank" rel="noreferrer"> <img src={twitter} alt=""/> </a>
                </div>
            </div>
          </div>
        </div>
        <div className="pfp-area">
          {/* <div className="arrow">
            <img src={arrow} alt="" loading="lazy" />
          </div> */}

        </div>

      </main>
    </div>
  );
}

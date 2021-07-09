import { useEffect, useState } from 'react';
import './AboutSection.scss'
import Plx from 'react-plx';
import IconCss from '../../images/icons/css.png';
import IconDj from '../../images/icons/dj.png';
import IconGit from '../../images/icons/git.png';
import IconHtml from '../../images/icons/html.png';
import IconJs from '../../images/icons/js.png';
import IconMongo from '../../images/icons/mongo.png';
import IconNodejs from '../../images/icons/nodejs.png';
import IconPostgresql from '../../images/icons/postgresql.png';
import IconPython from '../../images/icons/python.png';
import IconReact from '../../images/icons/react.png';
import IconSass from '../../images/icons/sass.png';

export default function AboutSection() {
    const parallaxData0 = [
        {
            start:'.halfpoint',
            end:'.endpoint',
            properties: [
                {
                    startValue:100,
                    endValue:0,
                    property:'translateX',
                }
            ]
        }, 
        {
            start: '.halfpoint',
            end:'.endpoint',
            properties: [
                {
                    startValue:0,
                    endValue:1,
                    property:'opacity'
                }
            ]
        }
        
    ]
    const parallaxData1 = [
        {
            start:'.halfpoint',
            end:'.endpoint',
            properties: [
                {
                    startValue:400,
                    endValue:200,
                    property:'translateX',
                }
            ]
        }, 
        {
            start: '.halfpoint',
            end:'.endpoint',
            properties: [
                {
                    startValue:0,
                    endValue:1,
                    property:'opacity'
                }
            ]
        }
    ]

    function comvertVWToPx(value) {
        var parts = value.match(/([0-9\.]+)(vh|vw)/)
        var q = Number(parts[1])
        var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
        return side * (q/100)
      }

    console.log(comvertVWToPx('100vw'))
    return (
        <div className="AboutSection">
            <hr />
            <h1>ABOUT ME</h1>
            <hr />

                <main>
                    <div className="about-text">
                    <Plx className="parallax-top" parallaxData={ parallaxData0 } >
                        <img src={IconCss} alt="" />

                    </Plx>
                    <Plx className="parallax-top" parallaxData={ parallaxData1 } >
                        <img src={IconDj} alt="" />

                    </Plx>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur amet perspiciatis velit repellendus, est distinctio eaque asperiores nisi, quisquam consequuntur, facere numquam libero tempore! Amet repellat eos quos odio aspernatur.</p>

                            <div className="halfpoint">test</div>

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur amet perspiciatis velit repellendus, est distinctio eaque asperiores nisi, quisquam consequuntur, facere numquam libero tempore! Amet repellat eos quos odio aspernatur.</p>
                    </div>
                </main>
                        <div className="endpoint" >test</div>
        </div>
    );
}
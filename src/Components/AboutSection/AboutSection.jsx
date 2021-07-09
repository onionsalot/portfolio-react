import { useEffect, useState } from 'react';
import './AboutSection.scss'
import Plx from 'react-plx';
import icon from '../../images/icon_JS.png';
import icon1 from '../../images/icon_PYTHON.png';

export default function AboutSection() {
    const parallaxData0 = [
        {
            start:'.halfpoint',
            end:'.endpoint',
            properties: [
                {
                    startValue:1000,
                    endValue:0,
                    property:'translateX',
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
                    startValue:1000,
                    endValue:200,
                    property:'translateX',
                }
            ]
        }
    ]


    return (
        <div className="AboutSection">
            <hr />
            <h1>ABOUT ME</h1>
            <hr />
                    <Plx className="parallax-top" parallaxData={ parallaxData0 } >
                        {/* <img src={icon} alt="" /> */}
                        test1
                    </Plx>
                    <Plx className="parallax-top" parallaxData={ parallaxData1 } >
                        {/* <img src={icon} alt="" /> */}
                        test2
                    </Plx>

                <div className="about-text">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur amet perspiciatis velit repellendus, est distinctio eaque asperiores nisi, quisquam consequuntur, facere numquam libero tempore! Amet repellat eos quos odio aspernatur.</p>

                        <div className="halfpoint">test</div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur amet perspiciatis velit repellendus, est distinctio eaque asperiores nisi, quisquam consequuntur, facere numquam libero tempore! Amet repellat eos quos odio aspernatur.</p>
                </div>
                        <div className="endpoint" >test</div>
        </div>
    );
}
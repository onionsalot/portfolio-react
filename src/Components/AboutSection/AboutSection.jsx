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
    const [parallaxDataTop, setParallaxDataTop] = useState([]);
    const [parallaxDataBot, setParallaxDataBot] = useState([]);
    const [distance, setDistance] = useState(convertVWToPx('100vw')*0.8/5)
    const [iconTop, setIconTop] = useState([ IconCss, IconDj, IconGit, IconHtml, IconJs, IconMongo ])
    const [iconBot, setIconBot] = useState([ IconNodejs, IconPostgresql, IconPython, IconReact, IconSass ])
    function convertVWToPx(value) {
        var parts = value.match(/([0-9\.]+)(vh|vw)/) 
        var q = Number(parts[1])
        var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
        return side * (q/100)
      }

    // console.log((convertVWToPx('100vw')*0.8/5))

    useEffect(() => {

        const data = []
        for (let i=0; i<5; i++) {
            data.push(
                [
                    {
                        start:'.parallax-top',
                        end:'.halfpoint',
                        properties: [
                            {
                                startValue:i*distance+100,
                                endValue:i*distance,
                                property:'translateX',
                            }
                        ]
                    }, 
                    {
                        start: '.parallax-top',
                        end:'.halfpoint',
                        properties: [
                            {
                                startValue:0,
                                endValue:1,
                                property:'opacity'
                            }
                        ]
                    }
                ]
            )
        }
        const data1 = []
        for (let i=0; i<5; i++) {
            data1.push(
                [
                    {
                        start:'.halfpoint',
                        end:'.endpoint',
                        properties: [
                            {
                                startValue:i*distance-100,
                                endValue:i*distance,
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
            )
        }
        setParallaxDataTop(data)
        setParallaxDataBot(data1)
        // console.log(parallaxData)
    }, [distance])


    window.onresize = function() {
        const newDistance = convertVWToPx('100vw')*0.8/5
        if (newDistance !== distance) {
            setDistance(newDistance)
        }
    }


    // const parallaxData0 = [
    //     {
    //         start:'.halfpoint',
    //         end:'.endpoint',
    //         properties: [
    //             {
    //                 startValue:100,
    //                 endValue:0,
    //                 property:'translateX',
    //             }
    //         ]
    //     }, 
    //     {
    //         start: '.halfpoint',
    //         end:'.endpoint',
    //         properties: [
    //             {
    //                 startValue:0,
    //                 endValue:1,
    //                 property:'opacity'
    //             }
    //         ]
    //     }
        
    // ]
    // const parallaxData1 = [
    //     {
    //         start:'.halfpoint',
    //         end:'.endpoint',
    //         properties: [
    //             {
    //                 startValue:400,
    //                 endValue:200,
    //                 property:'translateX',
    //             }
    //         ]
    //     }, 
    //     {
    //         start: '.halfpoint',
    //         end:'.endpoint',
    //         properties: [
    //             {
    //                 startValue:0,
    //                 endValue:1,
    //                 property:'opacity'
    //             }
    //         ]
    //     }
    // ]
    // const parallaxData2 = [
    //     {
    //         start:'.halfpoint',
    //         end:'.endpoint',
    //         properties: [
    //             {
    //                 startValue:600,
    //                 endValue:400,
    //                 property:'translateX',
    //             }
    //         ]
    //     }, 
    //     {
    //         start: '.halfpoint',
    //         end:'.endpoint',
    //         properties: [
    //             {
    //                 startValue:0,
    //                 endValue:1,
    //                 property:'opacity'
    //             }
    //         ]
    //     }
    // ]
    // const parallaxData3 = [
    //     {
    //         start:'.halfpoint',
    //         end:'.endpoint',
    //         properties: [
    //             {
    //                 startValue:800,
    //                 endValue:600,
    //                 property:'translateX',
    //             }
    //         ]
    //     }, 
    //     {
    //         start: '.halfpoint',
    //         end:'.endpoint',
    //         properties: [
    //             {
    //                 startValue:0,
    //                 endValue:1,
    //                 property:'opacity'
    //             }
    //         ]
    //     }
    // ]
    // const parallaxData4 = [
    //     {
    //         start:'.halfpoint',
    //         end:'.endpoint',
    //         properties: [
    //             {
    //                 startValue:1000,
    //                 endValue:800,
    //                 property:'translateX',
    //             }
    //         ]
    //     }, 
    //     {
    //         start: '.halfpoint',
    //         end:'.endpoint',
    //         properties: [
    //             {
    //                 startValue:0,
    //                 endValue:1,
    //                 property:'opacity'
    //             }
    //         ]
    //     }
    // ]
    return (
        <div className="AboutSection">
            <hr />
            <h1>ABOUT ME</h1>
            <hr />

                <main>
                    <div className="about-text">

                    {parallaxDataTop.map((data,idx) => <Plx className="parallax-top" parallaxData={ data } >
                        <img src={iconTop[idx]} alt="" />
                    </Plx>)}
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur amet perspiciatis velit repellendus, est distinctio eaque asperiores nisi, quisquam consequuntur, facere numquam libero tempore! Amet repellat eos quos odio aspernatur.</p>


                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur amet perspiciatis velit repellendus, est distinctio eaque asperiores nisi, quisquam consequuntur, facere numquam libero tempore! Amet repellat eos quos odio aspernatur.</p>
                            <div className="halfpoint">test</div>
                        {parallaxDataBot.map((data,idx) => <Plx className="parallax-bot" parallaxData={ data } >
                        <img src={iconBot[idx]} alt="" />
                    </Plx>)}
                    </div>
                </main>
                        <div className="endpoint" >test</div>
        </div>
    );
}
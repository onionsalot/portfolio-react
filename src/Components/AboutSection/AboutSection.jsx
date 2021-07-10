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
import StackItems from '../StackItems/StackItems'

export default function AboutSection() {
    const [parallaxDataTop, setParallaxDataTop] = useState([]);
    const [parallaxDataBot, setParallaxDataBot] = useState([]);
    const [distance, setDistance] = useState(convertVWToPx('100vw')*0.8/5)
    const [iconTop, setIconTop] = useState([ {"IconCss": IconCss}, {"IconDj":IconDj}, {"IconGit":IconGit}, {"IconHtml":IconHtml}, {"IconJs":IconJs}, {"IconMongo":IconMongo} ])
    const [iconBot, setIconBot] = useState([ {"IconNodejs":IconNodejs}, {"IconPostgresql":IconPostgresql}, {"IconPython":IconPython}, {"IconReact":IconReact}, {"IconSass":IconSass} ])
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
                                endValue:.6,
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
                                endValue:.6,
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
            <hr class="hr-text" data-content="ABOUT ME" />


                <main>
                    <div className="about-text">

                    {parallaxDataTop.map((data,idx) => 
                        <StackItems index={ idx } data={ data } image={ iconTop[idx] } pos={"top"}/>)}
                    <div class="sketchy">
                            <p>
                                I am a full stack developer residing in NYC, New York - unwavering in my quest to be the best me that could possibly be! After graduating Lehman College with a degree in Computer science, I went into medicine with an interest in nonclinical administration. I quickly realized that I've always been a programmer at heart, frequently learning new technologies and developing small apps to make my life easier at work.
                            </p>
                            <p>
                                In 2021, I committed to General Assembly's bootcamp program and haven't looked back. Since graduating GA's SEI program, I strive to better my craft each and every day. 
                            </p>
                    </div>
                            <div className="halfpoint"></div>
                        {parallaxDataBot.map((data,idx) => 
                            <StackItems index={ idx } data={ data } image={ iconBot[idx] } pos={"bot"}/>)}
                    </div>
                </main>
                        <div className="endpoint" ></div>
        </div>
    );
}
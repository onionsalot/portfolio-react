import { Parallax } from 'react-parallax';
import background from '../../images/bloop.png';
import TypeOut from 'react-typeout';
import './TopBanner.scss'

export default function TopBanner() {
    const words = ['Student', 'A Developer', 'An Artist'];
    return (
        <div className="TopBanner">
            
            
            <Parallax blur={{ min: -15, max: 15 }} bgImage={background} strength={100} bgImageStyle={{height: "100vh"}}>
            <div className= "inside-para">
                <div className="opening-text">
                    Hi, I'm Trong! <br/> I'm...&nbsp;
                    <TypeOut words={words} random={false} typeSpeed={100} pauseSpeed={2000} caret={true} className="windup"/>
                </div>

                </div>
            </Parallax>

        </div>
    );
}
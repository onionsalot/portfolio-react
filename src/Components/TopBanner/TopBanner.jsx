import { Parallax } from 'react-parallax';
import background from '../../images/bloop.png';
import TypeOut from 'react-typeout';
import './TopBanner.scss'

export default function TopBanner() {
    const words = ['a Student', 'a Developer', 'an Artist'];
    return (
        <div className="TopBanner">
            
            
            <Parallax bgImage={background} strength={100} bgImageStyle={{height: "110vh"}} className="para">
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
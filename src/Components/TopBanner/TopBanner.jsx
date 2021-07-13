import { Parallax } from 'react-parallax';
import foreground from '../../images/foreground.png';
import middle from '../../images/middle.png';
import background from '../../images/background.png';
import { WindupChildren } from "windups";
import './TopBanner.scss'

export default function TopBanner() {

    return (
        <div className="TopBanner">
            
            <div className="opening-text">
                <WindupChildren>
                {"This is "}
            <em>{"super"}</em>
            {" cool!"}
                </WindupChildren>
            </div>
            <Parallax bgImage={background} strength={100} bgImageStyle={{height: "100vh", width:"100vw"}}>
                <Parallax bgImage={middle} strength={0} bgImageStyle={{height: "100vh", width:"100vw", position:"absolute", bottom:0}} >
                        <Parallax bgImage={foreground} strength={-300} bgImageStyle={{height: "100vh", width:"100vw", position:"absolute", bottom:-290}} >
                            <div style={{ height: "100vh" }} />
                        </Parallax>
                </Parallax>
            </Parallax>
        </div>
    );
}
import { Parallax } from 'react-parallax';
import background from '../../images/bloop.png';
import { WindupChildren } from "windups";
import './TopBanner.scss'

export default function TopBanner() {

    return (
        <div className="TopBanner">
            
            {/* <div className="opening-text">
                <WindupChildren>
                {"This is "}
            <em>{"super"}</em>
            {" cool!"}
                </WindupChildren>
            </div> */}
            <Parallax blur={{ min: -15, max: 15 }} bgImage={background} strength={100} bgImageStyle={{height: "100vh"}}>
            <div style={{ height: "1080px" }} />
            </Parallax>

        </div>
    );
}
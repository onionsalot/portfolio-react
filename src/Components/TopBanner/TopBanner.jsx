import { Parallax, Background } from 'react-parallax';
import foreground from '../../images/foreground.png';
import middle from '../../images/middle.png';
import background from '../../images/background.png';

export default function TopBanner() {

    return (
        <>
            <Parallax bgImage={background} strength={100} bgImageStyle={{height: "100vh", width:"100vw"}}>
            <Parallax bgImage={middle} strength={0} bgImageStyle={{height: "100vh", width:"100vw", position:"absolute", bottom:0}} blur={{min:-50,max:40}}>
                    <Parallax bgImage={foreground} strength={-300} bgImageStyle={{height: "100vh", width:"100vw", position:"absolute", bottom:-290}} blur={{min:-50,max:40}}>
                        <div style={{ height: "100vh" }} />
                    </Parallax>
            </Parallax>
        </Parallax>
        </>
    );
}
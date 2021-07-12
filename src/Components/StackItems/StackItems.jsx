import Plx from 'react-plx';
import './StackItems.scss';

export default function StackItems({index, data, image, pos} ) {
    const keyName = Object.keys(image)
    const imageValue = Object.values(image)
    const styleInfo = `parallax-${pos} ${keyName[0]}`


    return(
        <Plx className={styleInfo} parallaxData={ data } >
            <div className="img-container">
                <img src={ imageValue[0]} alt="" className="items"/>
                <span className="text sketchy">BLEH</span>
            </div>
        </Plx>
    )
}
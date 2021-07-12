import Plx from 'react-plx';
import './StackItems.scss';

export default function StackItems({index, data, image} ) {
    const keyName = Object.keys(image)
    const imageValue = Object.values(image)
    const styleInfo = `parallax-items ${keyName[0]}`


    return(
        <div className="item">
          <Plx className={styleInfo} parallaxData={ data }>
          <img src={ imageValue[0]} alt="" className="items"/>
          </Plx>
          {/* <span className="text sketchy">BLEH</span> */}
        </div>
    )
}
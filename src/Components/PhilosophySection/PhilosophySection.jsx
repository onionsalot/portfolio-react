import "./PhilosophySection.scss";
import { useEffect, useState } from "react";
import PhilosophyItem from "../PhilosophyItem/PhilosophyItem";
import img1 from "../../images/github.png"

export default function PhilosophySection() {

  const [hoverItem, setHoverItem] = useState(null);

  const cardObj = [
    { name : "Mobile-first",
      text : "As the world moves forward, so do we. There are currently 3.8billion (48%) of people in the world with a smartphone and building without them in mind is a mistake!",
      img : img1},
      { name : "Responsive",
      text : "Dogs come in all colors, shapes (mostly dog shapes), and sizes, as do internet-browsers! My design should be consistent, coherent, and immersive across all screen sizes, across all Internet browsers, and across all wristwatches...maybe.",
    img : img1},
    { name : "Secure",
      text : "Data is expensive, and stolen data is even more expensive. I make sure to never leave a stone unturned, whether it be a cryptographic approach to data handling, or a simple complier warning.",
    img : img1},
    { name : "Consistent and DRY",
      text : "Moving out of the basement means working with real people. They need to know what you're writing, and YOU need to know what you're writing a month from then. Every line I write, I make sure that it is consistent and DRY, so I can keep consistency and not repeat myself. Oops.",
    img : img1},
  ]



  return (
    <div className="PhilosophySection">
      <div className="heading light">
        <div className="centered-hr-light">
          <hr className="hr-text" data-content="Coding Philosophy" />
        </div>
      </div>

      <main>
          {cardObj.map((e, idx) => (
            <PhilosophyItem idx={idx} content={e} setHoverItem={setHoverItem} hoverItem={hoverItem}/>
          ))}
      </main>
    </div>
  );
}

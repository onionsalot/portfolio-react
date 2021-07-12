import TopBanner from "../../Components/TopBanner/TopBanner";
import AboutSection from "../../Components/AboutSection/AboutSection";
import TechSection from "../../Components/TechSection/TechSection";
import './IndexPage.scss';

export default function IndexPage() {

    return (
        <div className="container">
            <TopBanner />


            <AboutSection />
            <TechSection />
            <div style={{height: 5000}}/>
        </div>
    );
}
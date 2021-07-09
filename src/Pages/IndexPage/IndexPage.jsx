import TopBanner from "../../Components/TopBanner/TopBanner";
import AboutSection from "../../Components/AboutSection/AboutSection";
import './IndexPage.scss';

export default function IndexPage() {

    return (
        <div className="container">
            <TopBanner />


            <AboutSection />
            <div style={{height: 5000}}/>
        </div>
    );
}
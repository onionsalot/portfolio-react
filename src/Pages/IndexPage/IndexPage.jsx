import TopBanner from "../../Components/TopBanner/TopBanner";
import AboutSection from "../../Components/AboutSection/AboutSection";
import TechSection from "../../Components/TechSection/TechSection";
import ProjectSection from "../../Components/ProjectSection/ProjectSection";
import './IndexPage.scss';

export default function IndexPage() {

    return (
        <div className="container">
            <TopBanner />


            <AboutSection />
            <TechSection />
            <ProjectSection />
            <div style={{height: 5000}}/>
        </div>
    );
}
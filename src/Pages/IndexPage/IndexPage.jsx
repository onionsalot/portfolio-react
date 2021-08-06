import TopBanner from "../../Components/TopBanner/TopBanner";
import AboutSection from "../../Components/AboutSection/AboutSection";
import PhilosophySection from "../../Components/PhilosophySection/PhilosophySection";
import TechSection from "../../Components/TechSection/TechSection";
import ProjectSection from "../../Components/ProjectSection/ProjectSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import './IndexPage.scss';

export default function IndexPage() {

    return (
        <div className="container">
            <TopBanner />

            <AboutSection />
            <PhilosophySection />
            <TechSection />
            <ProjectSection />
            <ContactSection />
            {/* <div style={{height: 5000}}/> */}
        </div>
    );
}
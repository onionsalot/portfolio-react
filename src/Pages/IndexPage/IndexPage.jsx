import TopBanner from "../../Components/TopBanner/TopBanner";
import AboutSection from "../../Components/AboutSection/AboutSection";
import PhilosophySection from "../../Components/PhilosophySection/PhilosophySection";
import TechSection from "../../Components/TechSection/TechSection";
import ProjectSection from "../../Components/ProjectSection/ProjectSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import './IndexPage.scss';
import NavBar from "../../Components/NavBar/NavBar";

export default function IndexPage() {

    return (
        <div className="container">
            <NavBar />
            <TopBanner />

            <AboutSection />
            <ProjectSection />
            <TechSection />
            <PhilosophySection />
            <ContactSection />
        </div>
    );
}
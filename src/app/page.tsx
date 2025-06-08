import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import CardGrid from "@/components/CardGrid";
import ProjectShowcase from "@/components/ProjectShowcase";
import PythonProjectsSection from "@/components/PythonProjectsSection";
import TechStackGrid from "@/components/TechStackGrid";
import CrossBanners from "@/components/CrossBanners";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <CardGrid />
            <ProjectShowcase />
            <PythonProjectsSection />
            <TechStackGrid />
            <CrossBanners />
        </div>
    );
}

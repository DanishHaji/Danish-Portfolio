import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import CardGrid from "@/components/CardGrid";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <CardGrid />
            <ProjectShowcase />
        </div>
    );
}

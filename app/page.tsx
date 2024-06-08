import AboutSection from "@/components/sections/AboutSection"
import ContactSection from "@/components/sections/ContactSection"
import HeroSection from "@/components/sections/HeroSection"
import ProjectSection from "@/components/sections/ProjectSection"
import TechSection from "@/components/sections/TechSection"
import TimelineSection from "@/components/sections/TimelineSection"

const page = () => {
  return (
    <div>
      <HeroSection />
      <TimelineSection />
      <TechSection/>
      <ProjectSection/>
      <AboutSection/>
      <ContactSection/>
    </div>
  )
}

export default page
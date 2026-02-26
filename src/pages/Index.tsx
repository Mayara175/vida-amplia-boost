import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DoctorsSection from "@/components/DoctorsSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <DoctorsSection />
        <SpecialtiesSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

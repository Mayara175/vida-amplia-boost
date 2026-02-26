import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import DoctorsSection from "@/components/DoctorsSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import PhilosophySection from "@/components/PhilosophySection";
import ClinicGallery from "@/components/ClinicGallery";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DoctorsSection />
      <SpecialtiesSection />
      <PhilosophySection />
      <ClinicGallery />
      <ContactSection />
    </Layout>
  );
};

export default Index;

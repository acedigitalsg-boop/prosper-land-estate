import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FoundationSection from "@/components/FoundationSection";
import ApproachSection from "@/components/ApproachSection";
import LocationsSection from "@/components/LocationsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProcessSection from "@/components/ProcessSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import BackToTop from "@/components/BackToTop";

export default function Index() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar onOpenContact={() => setContactOpen(true)} />
      <HeroSection onOpenContact={() => setContactOpen(true)} />
      <FoundationSection />
      <ApproachSection />
      <LocationsSection />
      <PhilosophySection />
      <ProcessSection />
      <WhoWeServeSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection onOpenContact={() => setContactOpen(true)} />
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <BackToTop />
    </>
  );
}

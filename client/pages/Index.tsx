import { useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import SkillsGrid from "@/components/SkillsGrid";
import BenefitsSection from "@/components/BenefitsSection";
import CommunityVision from "@/components/CommunityVision";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Index() {
  const contactFormRef = useRef<HTMLDivElement>(null);

  const handleCTAClick = () => {
    // Scroll to contact form
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection onCTAClick={handleCTAClick} />

      {/* Skills Grid Section */}
      <SkillsGrid />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Community Vision Section */}
      <CommunityVision />

      {/* Contact Form Section */}
      <div id="contact-form" ref={contactFormRef}>
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

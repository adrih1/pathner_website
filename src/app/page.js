"use client";

// Sections
import HeroSection from "./components/sections/herosection/herosection";
import Navbar from "./components/navbar/navbar";
import HeroSectionBis from "./components/sections/herosection/herosectionbis";
import FeatureSection from "./components/sections/featuresection/feature";
import LocalExperienceSection from "./components/sections/localexperiencesection/localexperiencesection";
import FaqSection from "./components/sections/faqsection/faqsection";
import PhoneSection from "./components/sections/phonesection/phonesection";
import FooterSection from "./components/sections/footersection/footersection";

// Components
import CTAButton from "./components/cta/cta";
import EarlyAccessForm from "./components/earlyaccessform/EarlyAccessForm";

// Style
import styles from "./page.module.css";
import text from "./styles/text.module.css";
import colors from "./styles/colors.module.css";

// Data
import featuresData from './components/sections/featuresection/featuresData';
import HowItWorksSection from "./components/sections/howitworkssection/howitworks";

export default function Home() {

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <HeroSectionBis />
        {featuresData.map((feature) => (
          <FeatureSection 
            key={feature.id} 
            title={feature.title} 
            description={feature.description}
            image={feature.image}
            flexFlow={feature.flexFlow} 
          />
        ))}
        <LocalExperienceSection />
        <FaqSection />
        <HowItWorksSection />
        {/* <PhoneSection /> */}
      </main>
      <FooterSection />
    </div>
  );
}

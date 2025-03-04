"use client";

// Sections
import Navbar from "./components/navbar/navbar";
import HeroSectionDesktop from "./components/sections/herosection/herosection";
import HeroSectionMobile from "./components/sections/herosection/herosectionmobile";
import AboutUs from "./components/sections/aboutus/aboutussection";
import FeatureSection from "./components/sections/featuresection/feature";
import LocalExperienceSection from "./components/sections/localexperiencesection/localexperiencesection";
import HowItWorksSection from "./components/sections/howitworkssection/howitworks";
import FaqSection from "./components/sections/faqsection/faqsection";
import FooterSection from "./components/sections/footersection/footersection";

import HeroSection from "./components/sections/herosection/herosection";
import PhoneSection from "./components/sections/phonesection/phonesection";


// Components
import CTAButton from "./components/cta/cta";
import EarlyAccessForm from "./components/earlyaccessform/EarlyAccessForm";

// Style
import styles from "./page.module.css";
import text from "./styles/text.module.css";
import colors from "./styles/colors.module.css";

// Data
import featuresData from './components/sections/featuresection/featuresData';

export default function Home() {

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <HeroSectionMobile />
        <HeroSection />
        <AboutUs />
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
        <HowItWorksSection />
        <FaqSection />
        {/* <PhoneSection /> */}
      </main>
      <FooterSection />
    </div>
  );
}

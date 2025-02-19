// Components
import HeroSection from "./components/sections/herosection/herosection";
import FeatureSection from "./components/sections/featuresection/feature";
import LocalExperienceSection from "./components/sections/localexperiencesection/localexperiencesection";
import FaqSection from "./components/sections/faqsection/faqsection";
import CTAButton from "./components/cta/cta";

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
      {/* <Navbar /> */}
      <main className={styles.main}>
        <HeroSection />
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
      </main>
      <footer className={styles.footer}>
        <div className={styles.subfooter}>
          <h2 className={`${text.secondary_title} ${colors.onPrimary}`}>Get early access</h2>
          <p className={`${text.text} ${colors.onPrimary}`}>Enter your email below and you’ll be the first to know when nexplor launches.</p>
          <div className={styles.ctas_container}>
            <input
              type="email"
              placeholder="Your email"
              className={styles.hero_input}
            />
            <CTAButton label="Request Early Access" />
          </div>
        </div>
        <div className={styles.footer_links}>
          <p>© 2025 nexplor</p>
          <div className={styles.footer_links_right}>
            <p className={styles.link_text}>Terms of Service</p>
            <p className={styles.link_text}>Privacy policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

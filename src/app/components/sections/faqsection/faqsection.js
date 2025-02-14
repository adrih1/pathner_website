"use client";

// Packages
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";

// Styles
import styles from "./faqsection.module.css";
import text from "../../../styles/text.module.css";

const FaqSection = () => {
  return (
    <div className={styles.faq_container}>
      <h2 className={text.secondary_title} style={{ color: "var(--white)" }}>
        FAQ
      </h2>
      <AccordionRoot collapsible>
        {items.map((item, index) => (
          <FaqItem key={index} item={item} index={index} />
        ))}
      </AccordionRoot>
    </div>
  );
};

const FaqItem = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10px 0px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={itemVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={styles.motion_item}
    >
      <AccordionItem
        value={item.value}
        className={styles.accordion_item}
      >
        <AccordionItemTrigger className={text.third_title}>
          {item.title}
        </AccordionItemTrigger>
        <AccordionItemContent className={styles.text}>
          {item.text}
        </AccordionItemContent>
      </AccordionItem>
    </motion.div>
  );
};

// Animation Variants for Items
const itemVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.2, // Progressive delay for each item
      duration: 0.6, // Duration of the animation
      ease: "easeOut",
    },
  }),
};

const items = [
  {
    value: "a",
    title: "Are the itineraries guided or self-guided?",
    text: "All itineraries are self-guided, meaning you can follow them at your own pace without a live guide. The app provides interactive maps and detailed information to guide you.",
  },
  {
    value: "b",
    title: "How can I become an itinerary creator?",
    text: "1. Download the app and create an account. 2. Go to the Create an Itinerary section. 3. Add your favorite spots, practical tips, and stories to make the experience unique. 4. Publish your itinerary and start earning money!",
  },
  {
    value: "c",
    title: "How much do itineraries cost?",
    text: "Itineraries have varying prices set by local creators. Some may even be free. You’ll always see the price before purchasing.",
  },
  {
    value: "d",
    title: "Can I book attractions or restaurants through the app?",
    text: "Not yet but we plan on integrating more services to make your experience even smoother.",
  },
  {
    value: "e",
    title: "In which cities is the app available?",
    text: "We are gradually launching in different cities! You can already explore itineraries in France, Italy, Portugal, Spain and Germany. If you’re a local in another city, you can start creating itineraries right now!",
  },
];

export default FaqSection;

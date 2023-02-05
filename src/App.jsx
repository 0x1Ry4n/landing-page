import React, { useEffect } from "react";
import styles from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div
        className={`${styles.paddingX} ${styles.flexCenter}`}
        data-aos="fade-left"
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`} data-aos="fade-down">
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats aos="fade-right" />
          <Business aos="fade-right" />
          <Billing aos="fade-left" />
          <CardDeal aos="fade-right" />
          <Testimonials aos="zoom-in" />
          <Clients aos="fade-left" />
          <CTA aos="flip-down" />
          <Footer aos="fade-right" />
        </div>
      </div>
    </div>
  );
};

export default App;

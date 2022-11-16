import React from "react";
import styles from "./style";
import {
  Navbar,
  Billing,
  CardDeal,
  Bussiness,
  Clients,
  CTA,
  Stats,
  Footar,
  Testimonials,
  Hero
} from "./Components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={"${styles.paddingsX} ${styles.flexCenter}"}>
        <div className={"${styles.boxwidth}"}>
          <Navbar />
        </div>
      </div>
      <div className={"bg-primary ${styles.flexStart}"}>
        <div className={"${styles.boxWidth}"}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Bussiness />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footar />
      </div>
    </div>
    </div>
  );
};

export default App;

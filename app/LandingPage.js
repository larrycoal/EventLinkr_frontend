import React from "react";
import styles from "./home.module.css"
const LandingPage = () => {
  return (
    <div className={styles.landing_wrapper}>
      <section className={styles.hero_sect}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1>EventLinkr.</h1>
            <p>
              Create, <span>Share</span>, and Celebrate
            </p>
            <p>
              Effortlessly organize unforgettable events with our interactive
              invitation and RSVP platform
            </p>
            <button>Get started</button>
          </div>
          <div className={styles.left}>An image</div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

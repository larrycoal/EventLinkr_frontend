import React from "react";
import styles from "./home.module.css";
import { BsLink, BsFillCalendar2CheckFill, BsShareFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
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
          <div className={styles.right}>
            <div className={styles.logo_container}>
              <span>
                <BsLink />
              </span>
              <span>
                <BsFillCalendar2CheckFill />
              </span>
              <span>
                <CiLocationOn />
              </span>
              <span>
                <BsShareFill />
              </span>
              <span>
                <IoIosPeople />
              </span>
              {/*  */}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.howto}>
        <div className={styles.container}>
            <h2>Getting Started</h2>
            <div></div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

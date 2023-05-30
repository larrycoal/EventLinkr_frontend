import React from "react";
import Image from "next/image";
import styles from "./home.module.css";
import {
  FaShareAltSquare,
  FaLocationArrow,
  FaStaylinked,
} from "react-icons/fa";
import lanreBitmoji from "../assets/images/lanre_bitmoji.png";
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
                <FaLocationArrow />
              </span>
              <span>
                <BsFillCalendar2CheckFill />
              </span>
              <span>
                <FaStaylinked />
              </span>
              <span>
                <FaShareAltSquare />
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
          <h2>How it works</h2>
          <div className={styles.instructions}>
            <ul>
              <li>
                <h3>Create an account for free</h3>
                <p>
                  Dolore laboris non ex irure labore sit laboris. Elit et sit
                  quis eiusmod dolore id voluptate reprehenderit consequat
                  incididunt dolor nulla nulla. Tempor nostrud ad minim est
                  minim nostrud irure commodo Lorem veniam et cillum.
                </p>
              </li>
              <li>
                <h3>Create an account for free</h3>
                <p>
                  Dolore laboris non ex irure labore sit laboris. Elit et sit
                  quis eiusmod dolore id voluptate reprehenderit consequat
                  incididunt dolor nulla nulla. Tempor nostrud ad minim est
                  minim nostrud irure commodo Lorem veniam et cillum.
                </p>
              </li>
              <li>
                <h3>Create an account for free</h3>
                <p>
                  Dolore laboris non ex irure labore sit laboris. Elit et sit
                  quis eiusmod dolore id voluptate reprehenderit consequat
                  incididunt dolor nulla nulla. Tempor nostrud ad minim est
                  minim nostrud irure commodo Lorem veniam et cillum.
                </p>
              </li>
              <li>
                <h3>Create an account for free</h3>
                <p>
                  Dolore laboris non ex irure labore sit laboris. Elit et sit
                  quis eiusmod dolore id voluptate reprehenderit consequat
                  incididunt dolor nulla nulla. Tempor nostrud ad minim est
                  minim nostrud irure commodo Lorem veniam et cillum.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.team}>
        <h2>The team</h2>
        <div className={styles.container}>
          <div className={styles.left}>
            <Image src={lanreBitmoji} width="400" height="400" />
          </div>
          <div className={styles.right}>
            <h3>Hi! My name is Olanrewaju</h3>
            <p>
              Laborum eiusmod est ut minim fugiat laboris excepteur ea fugiat et
              est cupidatat. Et incididunt cupidatat eiusmod ut non do minim
              duis officia id sunt magna voluptate ad. Duis esse Lorem officia
              do. duis officia id sunt magna voluptate ad. Duis esse Lorem
              officia do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

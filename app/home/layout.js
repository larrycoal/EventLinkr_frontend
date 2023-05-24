import React from "react";
//import styles from "./home.module.css"
const HomeLayout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <h2>Logo</h2>
          <ul>
            <li>About</li>
            <li>Dashboard</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
      {children}
      <footer>
        Made with love
      </footer>
    </>
  );
};

export default HomeLayout;

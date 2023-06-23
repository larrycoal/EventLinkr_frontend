import React from "react";
import styles from "./home.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const HeaderFooter = ({ children }) => {
  const { data, status } = useSession();
  const handleSignIn =async ()=>{
    try {
      fetch(
        `http://localhost:1337/api/connect/google`
      )
        .then((res) => res.json())
        .then(({ data }) => console.log("login data",data));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <header className={styles.header}>
        <nav>
          <h2>EventLinkr</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            {status === "unauthenticated" ? (
              <li>
                <button onClick={() => handleSignIn()}> Sign In</button>
              </li>
            ) : (
              <li>
                <button onClick={() => signOut()}> Sign out</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      {children}
      <footer className={styles.footer}>Made with love</footer>
    </>
  );
};

export default HeaderFooter;

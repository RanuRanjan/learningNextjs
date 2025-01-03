"use client";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default function Home() {
  const handleNavigation = (url) => {
    redirect(url);
  };

  return (
    <div className={styles.main}>
      <h1>Welcome to college Website</h1>
      <div>
        <ul className={styles.main_navbar}>
          <li onClick={() => handleNavigation("/about")}>About</li>
          <li onClick={() => handleNavigation("/login")}>Login</li>
          <li onClick={() => handleNavigation("/projects")}>Projects</li>
          <li onClick={() => handleNavigation("/subject")}>Subject</li>
          <li onClick={() => handleNavigation("/degree")}>Degree</li>
        </ul>
      </div>
    </div>
  );
}

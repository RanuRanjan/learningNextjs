"use client";

import Link from "next/link";
import "./about.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const path = usePathname();
  return (
    <>
      <div>
        <ul className="about-menu">
          {path !== "/about" ? (
            <li>
              <Link href="/about">About</Link>
            </li>
          ) : null}
          {path !== "/about/student" ? (
            <li>
              <Link href="/about/student">Student</Link>
            </li>
          ) : null}
          {path !== "/about/teacher" ? (
            <li>
              <Link href="/about/teacher">Teacher</Link>
            </li>
          ) : null}
          <li>
              <Link href="/">Main Menu</Link>
            </li>
        </ul>
        {path === "/about" ? (
          <h1 style={{ textAlign: "center" }}>About Us</h1>
        ) : null}
      </div>
      {children}
    </>
  );
}

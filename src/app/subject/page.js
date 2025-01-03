"use client";
import React from "react";
import Link from "next/link";
export default function Subject() {
  const allSubject = [{ name: "Math" }, { name: "Science" }, { name: "Hindi" }];

  return (
    <div>
      <ul>
        <li>
          {allSubject.map((sub, index) => {
            return (
              <Link href={`/subject/${sub.name}`} key={index}>
                {sub.name}
              </Link>
            );
          })}
        </li>
      </ul>

      {/* <ul>
            <li>
                <Link href='/subject/math'>Math</Link>
            </li>
        </ul> */}
    </div>
  );
}

'use client'
import styles from "./page.module.css";

export default function Home() {
 
  const testingFn =()=>{
    alert("Hello Next")
  }

  return (
    <div className={styles.page}>
      <h1 onClick={()=>testingFn()}>Home Page</h1>
    </div>
  );
}

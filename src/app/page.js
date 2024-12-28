'use client'
import styles from "./page.module.css";
import { redirect } from 'next/navigation'

export default function Home() {
 
  const testingFn =()=>{
    redirect('/about')
  }

  return (
    <div className={styles.page}>
      <h1 onClick={()=>testingFn()}>Home Page</h1>
    </div>
  );
}

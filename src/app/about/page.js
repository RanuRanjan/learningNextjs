'use client'
import { redirect } from 'next/navigation'
import React from 'react'


export default function About() {

  const nav=[
    {
      n:"se",
      i:"d"
    },
    {
      n:"sem",
      i:"dk"
    }
  ]
 
    const handleNavigation=(route)=>{
        // redirect('/projects')
        redirect(route)
    }

    console.log(nav.map((key,g)=>{
      return(
        key.n
      )

    }),"hi")

  return (
    <>
      {/* <h1>About page </h1> */}
      {/* <h1 onClick={() => handleNavigation("/about/student")}>About student</h1>
      <h1 onClick={() => handleNavigation("/about/teacher")}>about teacher</h1> */}
    </>
  );
}

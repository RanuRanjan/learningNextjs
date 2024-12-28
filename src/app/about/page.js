'use client'
import { redirect } from 'next/navigation'
import React from 'react'


export default function About() {
 
    const handleNavigation=()=>{
        redirect('/projects')
    }

  return (
    <div onClick={handleNavigation}>About Page</div>
  )
}

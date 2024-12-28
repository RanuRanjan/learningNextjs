'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Projects() {
    const navigate= useRouter()
  return (
    <div onClick={()=>navigate.push('/login')}>Projects</div>
  )
}

"use client"
import AboutMe from '@/components/AboutMe'
import Hero from '@/components/Hero'
import MyWork from '@/components/MyWork'
import Specialty from '@/components/Specialty'
import WordsLoop from '@/components/WordsLoop'
import React from 'react'

export default function page() {
  return (
    <>
      <Hero />
      <WordsLoop />
      <AboutMe />
      <MyWork />
      <Specialty />
    </>
  )
}

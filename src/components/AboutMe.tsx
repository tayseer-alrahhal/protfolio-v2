"use client"
import React, { RefObject, useRef } from 'react'
import { TextReveal } from './ui/text-reveal'
import { Rose } from 'lucide-react'

export default function AboutMe() {
    const sectionRef = useRef<HTMLElement | null>(null)

    return (
        <section ref={sectionRef} className='flex flex-col items-center mt-16 sm:mt-24 lg:mt-[96px] sm:px-10 md:px-[120px] lg:px-[70px]'>
            <span className='flex items-center justify-center gap-2 uppercase text-[12px] sm:text-[14px] text-(--highlight)'>
                <Rose size={19} />
                About Me
            </span>
            <TextReveal scrollTargetRef={sectionRef as RefObject<HTMLElement>}>
                I&apos;m Tayseer, a Web Developer with over 2+ years of experience specializing in React.js, Next.js,
                and Tailwind CSS. I focus on creating high-quality, responsive, and user-friendly web
                applications. I have collaborated with teams to deliver efficient and impactful digital solutions.
            </TextReveal>
        </section>
    )
}

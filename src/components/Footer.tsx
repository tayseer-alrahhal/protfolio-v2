"use client"
import React from 'react'
import SplitText from './ui/SplitText'
import HoverButton from './HoverButton'
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <Linkedin className='w-[20px] h-[20px]' />,
            link: "https://www.linkedin.com/in/tayseer-alrahhal-942334223/",
        },
        {
            name: "GitHub",
            icon: <Github className='w-[20px] h-[20px]' />,
            link: "https://github.com/TayseerAlrahhal",
        },
        {
            name: "Instagram",
            icon: <Instagram className='w-[20px] h-[20px]' />,
            link: "https://www.instagram.com/tayseeralrahhal/",
        },
        {
            name: "Email",
            icon: <Mail className='w-[20px] h-[20px]' />,
            link: "mailto:tayseeralrahhal@gmail.com",
        }
    ]

    return (
        <footer className='relative z-10 flex flex-col items-start w-full mt-16 sm:mt-24 lg:mt-[96px] px-6 sm:px-10 md:px-[120px] lg:px-[170px]'>

            <div className='flex flex-col items-center justify-center w-full px-4 py-14 bg-(--bg-800) rounded-3xl shadow'>
                <div className='flex items-center justify-center gap-2 rounded-full py-2 px-4 bg-[#B5FF6D]/10 w-fit mb-4'>
                    <div className='relative w-2 h-2 bg-(--highlight)/50 rounded-full animate-pulse'>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-(--highlight) rounded-full animate-pulse'></div>
                    </div>
                    <span className='text-[12px]'>Available for work</span>
                </div>

                <SplitText
                    text="Let's build your vision with precision."
                    className="
                        text-[32px] sm:text-[40px] md:text-[48px]
                        w-full max-w-[550px]
                        font-clash font-medium mb-6 text-center
                    "
                    delay={50}
                    duration={0.4}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />

                <HoverButton
                    href="/contact"
                    name1="Contact me"
                    name2="Contact me"
                />

                <div className='md:hidden flex items-center justify-center gap-8 mt-8'>
                    {socialLinks.map((item, index) => (
                        <Link href={item.link} target='_blank' key={index} className='text-[24px]'>
                            {item.icon}
                        </Link>
                    ))}
                </div>
            </div>

            <div className='flex items-center justify-between w-full my-6'>
                <span className='max-md:mb-[50px] max-md:mx-auto'>© 2025 Tayseer Alrahhal. All rights reserved.</span>

                <div className='max-md:hidden flex items-center justify-center gap-8'>
                    {socialLinks.map((item, index) => (
                        <Link href={item.link} target='_blank' key={index} className='text-[24px]'>
                            {item.icon}
                        </Link>
                    ))}
                </div>
            </div>

        </footer>
    )
}

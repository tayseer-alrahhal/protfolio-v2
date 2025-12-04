"use client"
import { ChevronDown, ChevronUp, CodeXml, Rose } from 'lucide-react'
import SplitText from './ui/SplitText'
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion"

export default function Specialty() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const items = [
        {
            title: "Development",
            desc: "Building responsive websites. Providing the users an enriching experience that responds to any device and screen size."
        }
    ]

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i)
    }

    const technologiesLogos = [
        { name: "HTML", logo: "/technologies-logos/html.png" },
        { name: "CSS", logo: "/technologies-logos/css.png" },
        { name: "Javascript", logo: "/technologies-logos/javascript.png" },
        { name: "Typescript", logo: "/technologies-logos/typescript.png" },
        { name: "React.js", logo: "/technologies-logos/reactjs.png" },
        { name: "Next.js", logo: "/technologies-logos/nextjs.png" },
        { name: "Node.js", logo: "/technologies-logos/nodejs.png" },
        { name: "Tailwindcss", logo: "/technologies-logos/tailwindcss.png" },
        { name: "MongoDB", logo: "/technologies-logos/mongodb.png" },
        { name: "Git", logo: "/technologies-logos/git.png" },
        { name: "Github", logo: "/technologies-logos/github.png" },
        { name: "Firebase", logo: "/technologies-logos/firebase.png" },
    ]

    return (
        <section className='flex flex-col items-start mt-16 sm:mt-24 lg:mt-[96px] px-6 sm:px-10 md:px-[120px] lg:px-[170px] w-full overflow-hidden'>
            
            {/* TITLE */}
            <div className='flex flex-col items-start justify-center gap-2'>
                <span className='flex items-center justify-start gap-2 uppercase text-[14px] text-(--highlight)'>
                    <Rose size={19} />
                    Speciality
                </span>

                <SplitText
                    text="Areas of Expertise"
                    className="text-[32px] sm:text-[40px] md:text-[48px] font-clash font-medium"
                    delay={50}
                    duration={0.4}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left"
                />
            </div>

            {/* CONTENT */}
            <div className='flex max-md:flex-col items-start justify-center gap-6 w-full mt-[32px]'>
                
                {/* LEFT */}
                <div className="flex flex-col items-center justify-start gap-4 w-full md:w-[50%]">
                    {items.map((item, i) => {
                        const isOpen = openIndex === i

                        return (
                            <div
                                key={i}
                                onClick={() => toggle(i)}
                                className="flex flex-col items-start justify-center gap-4 cursor-pointer w-full px-6 py-4 bg-(--bg-800) mb-4 rounded-2xl border border-(--bg-700)"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center justify-center gap-2">
                                        <CodeXml />
                                        <span>{item.title}</span>
                                    </div>

                                    <button className="flex items-center justify-center cursor-pointer gap-2">
                                        {isOpen ? <ChevronUp /> : <ChevronDown />}
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            {item.desc}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className='w-full md:w-[50%] flex items-center justify-center'>
                    <div className='relative w-full max-w-[450px] sm:max-w-[550px] md:max-w-[600px] h-[240px] sm:h-[300px] md:h-[335px]'>
                        <Image
                            src="/coding.gif"
                            alt="coding"
                            fill
                            className='object-cover rounded-2xl'
                        />
                    </div>
                </div>

            </div>

            {/* TECHNOLOGIES SLIDER */}
            <div className="relative mt-[32px] w-full overflow-hidden">

                <div className="pointer-events-none w-[200px] h-[113px] absolute z-10 top-0 left-0 bg-linear-to-r from-(--bg-900) to-transparent"></div>

                <div className="flex items-center justify-center gap-5 animate-slider2">
                    {[...technologiesLogos, ...technologiesLogos, ...technologiesLogos].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center gap-2 py-2 px-5 bg-(--bg-800) border border-(--bg-700) rounded-full"
                        >
                            <Image
                                src={item.logo}
                                alt={item.name}
                                width={18}
                                height={18}
                                className="object-cover rounded-full"
                                quality={100}
                            />
                            <span className="text-[14px] whitespace-nowrap">{item.name}</span>
                        </div>
                    ))}
                </div>

                <div className="pointer-events-none w-[200px] h-[113px] absolute z-10 top-0 right-0 bg-linear-to-l from-(--bg-900) to-transparent"></div>

            </div>

        </section>
    )
}

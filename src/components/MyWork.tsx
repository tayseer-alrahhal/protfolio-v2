"use client"
import { Rose } from 'lucide-react'
import SplitText from './ui/SplitText'
import Image from 'next/image'
import React, { useCallback, useRef, useState } from 'react'
import HoverButton from './HoverButton'
import { projectsData } from '@/lib/projectsData'
import { Project } from '@/typs'
import Link from 'next/link'

function ProjectCard({ src, title, year, defaultBg, id }: { src: string; title: string; year: string; defaultBg: string; id: string }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [bgColor, setBgColor] = useState<string>(defaultBg)

    const handleImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
        const img = e.currentTarget
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        const w = 64
        const h = 64
        canvas.width = w
        canvas.height = h
        ctx.drawImage(img, 0, 0, w, h)
        const imageData = ctx.getImageData(0, 0, w, h)
        const data = imageData.data
        let r = 0, g = 0, b = 0, count = 0
        for (let i = 0; i < data.length; i += 4) {
            r += data[i]
            g += data[i + 1]
            b += data[i + 2]
            count++
        }
        r = Math.floor(r / count)
        g = Math.floor(g / count)
        b = Math.floor(b / count)
        setBgColor(`rgb(${r}, ${g}, ${b})`)
    }, [])

    return (
        <Link href={`/project-details/${id}`}>
            <div className='flex flex-col items-start justify-center w-full'>
                <div className="
                    group 
                    w-full max-w-[570px] 
                    h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px]
                    rounded-3xl flex items-center justify-center cursor-pointer
                " style={{ backgroundColor: bgColor }}>
                    <div className="
                        w-full max-w-[454px]
                        h-full max-h-[304px]
                        rounded-3xl shadow-2xl flex items-center justify-center bg-white
                        transition-transform duration-300 ease-out group-hover:scale-105
                    ">
                        <div className="
                            w-full max-w-[450px]
                            h-full max-h-[300px]
                            relative rounded-3xl overflow-hidden
                        ">
                            <Image
                                src={src}
                                alt="Project screenshot"
                                fill
                                className="object-cover rounded-3xl"
                                onLoad={handleImageLoad}
                            />
                        </div>
                    </div>
                </div>
                <canvas ref={canvasRef} className="hidden" />
                <span className='text-[20px] mt-4 mb-2 px-1'>{title}</span>
                <div className='flex items-center justify-between w-full px-1'>
                    <span className='text-[14px]'>Development</span>
                    <span className='text-[15px]'>{year}</span>
                </div>
            </div>
        </Link>
    )
}

export default function MyWork() {
    const [projects] = useState<Project[]>(projectsData);

    return (
        <section className='flex flex-col items-start mt-16 sm:mt-24 lg:mt-[96px] px-6 sm:px-10 md:px-[120px] lg:px-[170px] w-full'>
            <div className='flex flex-col items-start justify-center gap-2'>
                <span className='flex items-center justify-start gap-2 uppercase text-[14px] text-(--highlight)'>
                    <Rose size={19} />
                    My Work
                </span>
                <SplitText
                    text="Selected Projects"
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
                <p className='text-[16px] text-left'>Here&apos;s a curated selection showcasing my expertise and the achieved results.</p>
            </div>

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-[64px] w-full">
                {projects.map((p) => (
                    <div key={p.id} className={p.margin + " w-full"}>
                        <ProjectCard
                            src={p.src}
                            title={p.title}
                            year={p.year}
                            defaultBg={p.defaultBg}
                            id={p.id}
                        />
                    </div>
                ))}
            </div>

            <div className='flex items-center justify-center text-center w-full mt-[64px]'>
                <HoverButton href="/" name1="View All Projects" name2="Projects" />
            </div>
        </section>
    )
}

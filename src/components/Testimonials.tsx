"use client"
import { ArrowLeft, ArrowRight, Rose } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import SplitText from './ui/SplitText'
import Image from 'next/image'

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const testimonials = [
        {
            name: 'John Doe',
            role: 'Software Engineer',
            image: '/me.webp',
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt itaque repellendus praesentium officia! Adipisci,accusamus quis itaque optio laudantium ipsum.Debitis nostrum blanditiisid doloremque illo voluptatem illum enim modi?',
        },
        {
            name: 'tayseer alrahhal',
            role: 'Web Developer',
            image: '/me.webp',
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt itaque repellendus praesentium officia! Adipisci,accusamus quis itaque optio laudantium ipsum.Debitis nostrum blanditiisid doloremque illo voluptatem illum enim modi?',
        },
        {
            name: 'test',
            role: 'Web Developer',
            image: '/me.webp',
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt itaque repellendus praesentium officia! Adipisci,accusamus quis itaque optio laudantium ipsum.Debitis nostrum blanditiisid doloremque illo voluptatem illum enim modi?',
        },
    ]

    const prev = () => {
        setCurrent((c) => c > 0 ? c - 1 : testimonials.length - 1)
    }

    const next = () => {
        setCurrent((c) => (c + 1) % testimonials.length);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 10000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <section className='flex flex-col md:flex-row items-start justify-center gap-12 mt-16 sm:mt-24 lg:mt-[96px] px-6 sm:px-10 md:px-[120px] lg:px-[170px] w-full'>
            <div className='w-full md:w-[35%]'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <span className='flex items-center justify-start gap-2 uppercase text-[14px] text-(--highlight)'>
                        <Rose size={19} />
                        Testimonials
                    </span>
                    <SplitText
                        text="What others say"
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
            </div>

            <div className='w-full md:w-[65%]'>
                <div className="w-full overflow-hidden relative">
                    <div
                        className="flex transition-transform duration-500 inner"
                        style={{
                            display: 'flex',
                            transform: `translateX(-${current * 100}%)`,
                            transition: 'transform 0.5s ease',
                        }}
                    >
                        {testimonials.map((item, i) => (
                            <div
                                key={i}
                                className="border-(--bg-700) shrink-0 w-full flex flex-col gap-4 rounded-3xl border p-6 sm:p-8"
                            >
                                <div className='flex items-center gap-2'>
                                    <div className="relative w-[70px] h-[70px] flex items-center justify-center">
                                        <svg width="70" height="70" viewBox="0 0 100 100" className="absolute">
                                            <circle cx="50" cy="50" r="45" fill="none" strokeWidth="4" style={{ stroke: "var(--bg-600)" }} />
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="none"
                                                strokeDasharray="282"
                                                strokeDashoffset="282"
                                                strokeLinecap="round"
                                                strokeWidth="4"
                                                transform="rotate(-90 50 50)"
                                                style={{ stroke: "var(--text-primary)" }}
                                            >
                                                <animate attributeName="stroke-dashoffset" from="282" to="0" dur="10.5s" repeatCount="indefinite" />
                                            </circle>
                                        </svg>

                                        <Image
                                            src={item.image}
                                            alt=""
                                            width={50}
                                            height={50}
                                            className="rounded-full"
                                        />
                                    </div>

                                    <div className='flex flex-col items-start justify-center gap-1'>
                                        <h5 className='text-[20px]'>{item.name}</h5>
                                        <span className='text-[14px] text-[--text-secondary]'>{item.role}</span>
                                    </div>
                                </div>

                                <p>{item.quote}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className='flex items-center justify-end mt-4 w-full'>
                    <div className='flex items-center justify-center gap-2'>
                        <button onClick={prev} className='w-[48px] h-[48px] bg-(--background) rounded-full border border-(--bg-700) font-semibold flex items-center justify-center hover:bg-(--accent) transition-colors duration-300 cursor-pointer'>
                            <ArrowLeft size={16} />
                        </button>

                        <div className='flex items-center justify-center gap-2 text-(--muted-foreground)'>
                            <span>{current + 1}</span>
                            <span>/</span>
                            <span>{testimonials.length}</span>
                        </div>

                        <button onClick={next} className='w-[48px] h-[48px] bg-(--background) rounded-full border border-(--bg-700) font-semibold flex items-center justify-center hover:bg-(--accent) transition-colors duration-300 cursor-pointer'>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}

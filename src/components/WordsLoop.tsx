import { Rose } from 'lucide-react'
import React from 'react'

export default function WordsLoop() {


    const words = [
        "Community",
        "Development",
        "Mentor",
        "Websites",
        "Designing",
        "Graphics",
        "Animations"

    ]

    return (
        <section className='relative w-full h-[113px] mt-[96px] overflow-hidden border-y border-(--bg-700)'>
            <div className='w-[300px] h-[113px] absolute z-10 top-0 left-0 bg-linear-to-r from-(--bg-900) to-transparent'></div>
            <div className='w-full h-full flex items-center justify-center gap-4 animate-slider'>
                {[...words, ...words, ...words, ...words, ...words, ...words].map((word, index) => (
                    <div key={index} className='flex items-center justify-center gap-4 text-[48px] font-clash text-(--bg-600)'>
                        {word}
                        <Rose size={24} />
                    </div>
                ))}
            </div>
            <div className='w-[300px] h-[113px] absolute z-10 top-0 right-0 bg-linear-to-l from-(--bg-900) to-transparent'></div>
        </section>
    )
}

import Link from 'next/link'
import React from 'react'

export default function HoverButton({ href, name1, name2 }: { href: string, name1: string, name2: string }) {
    return (
        <Link href={href}>
            <button className='custom-button'><span className="text">{name1}</span><span>{name2}</span></button>
        </Link>
    )
}

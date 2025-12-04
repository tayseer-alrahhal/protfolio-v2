"use client"
import { useEffect, useState } from "react"

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
    const [revealed, setRevealed] = useState(false)

    useEffect(() => {
        const reveal = () => setRevealed(true)

        if (document.readyState === "complete") {
            reveal()
        } else {
            window.addEventListener("load", reveal, { once: true })
            return () => window.removeEventListener("load", reveal)
        }
    }, [])

    return (
        <div
            className={`
                transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                will-change-transform will-change-opacity
                ${revealed
                    ? "opacity-100 blur-0 translate-x-0 visible"
                    : "opacity-0 blur-xl -translate-x-10 invisible"
                }
            `}
        >
            {children}
        </div>
    )
}

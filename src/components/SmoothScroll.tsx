"use client"
import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            lerp: 0.08,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            wheelMultiplier: 1,
            touchMultiplier: 1.1,
        });




        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return <>{children}</>
}

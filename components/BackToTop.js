'use client'
import { useEffect, useState } from "react"

export default function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        // Ensure this code runs on the client side only
        const onScroll = () => {
            if (window.scrollY > 100 && !hasScrolled) {
                setHasScrolled(true)
            } else if (window.scrollY < 100 && hasScrolled) {
                setHasScrolled(false)
            }
        }

        // Adding scroll event listener
        window.addEventListener("scroll", onScroll)

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [hasScrolled])

    return (
        <>
            {hasScrolled && (
                <a className="scroll-top scroll-to-target open hover:bg-red-700" href="#top">
                    <i className="fas fa-level-up-alt text-uRed hover:text-slate-200" />
                </a>
            )}
        </>
    )
}

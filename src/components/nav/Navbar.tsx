'use client'

import useClickOutside from '@/_hooks/useClickOutside'
import { useCallback, useEffect, useRef, useState } from 'react'
import TopBar from './TopBar'
import Nav from './Nav'
import { createPortal } from 'react-dom'

function Navbar() {
    const [show, setShow] = useState(true)
    const navRef = useRef(null)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isExpanded, setIsExpanded] = useState(false)
    const [hasBorder, setHasBorder] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            const triggerScroll = 0

            if (currentY > triggerScroll) {
                if (currentY > lastScrollY) {
                    setShow(false)
                    setIsExpanded(false)
                } else {
                    setShow(true)
                }
            } else {
                setShow(true)
            }

            setHasBorder(currentY > 0)

            setLastScrollY(currentY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY, isExpanded])

    const toogleNav = () => {
        setIsExpanded((is) => !is)
    }
    const closeNav = useCallback(() => {
        setIsExpanded(false)
    }, [])

    useClickOutside(navRef, closeNav)

    return (
        <nav
            className={`duration-400 fixed top-0 z-50 w-full transition-transform ${show ? 'translate-y-0' : '-translate-y-[120%]'}`}
        >
            <TopBar />

            <div
                className={`mx-auto h-[82px] w-full max-w-[1240px] px-4 pt-4 lg:h-fit lg:py-[14px] xl:px-0 ${hasBorder ? 'bg-dark backdrop-blur-[18px] lg:bg-transparent' : 'bg-transparent'}`}
                ref={navRef}
            >
                <Nav isExpanded={isExpanded} toogleNav={toogleNav} />
            </div>
            {isExpanded &&
                createPortal(
                    <div className="bg-dark/40 fixed inset-0 z-40 backdrop-blur-sm lg:hidden"></div>,
                    document.body
                )}
        </nav>
    )
}

export default Navbar

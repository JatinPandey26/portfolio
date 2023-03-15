import React, { useLayoutEffect } from 'react'
import style from './style.module.scss'

import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

const Gallery = () => {

    useLayoutEffect(() => {

        // gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.img',
                scrub: true
            }
        })
            .to('.img', {
                stagger: .2,
                y: -700,
                scrub: true
            })
    }, [])

    return (
        <div className={style.gallery}>
            <h1>FAVS</h1>

            <section>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </section>

            <section>
                <div className={style.img +" img"}></div>
                <div className={style.img +" img"}></div>
                <div className={style.img +" img"}></div>
                <div className={style.img +" img"}></div>
                <div className={style.img +" img"}></div>
                <div className={style.img +" img"}></div>
                <div className={style.img +" img"}></div>
                <div className={style.img +" img"}></div>
                <div className={style.img +" img"}></div>
            </section>

            <section></section>
        </div>
    )
}

export default Gallery
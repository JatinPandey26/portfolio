import styles from './style.module.scss'

import React, { useLayoutEffect } from 'react'

import { marquee } from '../../utils/marquee'

const HomeLeft = () => {
    useLayoutEffect(() => {
        marquee()
    }, [])
    return (
        <div className={styles.wrapper}>
            <div className="marquee">
                <div className="marquee-content">
                    <div className="text-block">JATIN</div>
                    <div className="text-block">PANDEY</div>
                </div>
            </div>
            <p>
                <svg width="3rem" height="2rem" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>    An innovative and diverse collection showcasing my skills, achievements, and passions with creativity and impact.</p>

        </div>
    )
}

export default HomeLeft
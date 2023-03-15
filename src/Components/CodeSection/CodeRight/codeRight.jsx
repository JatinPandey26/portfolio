import React from 'react'
import styles from './style.module.scss'
import arrow from './arrow.png'
import { Link } from 'react-scroll'
export const CodeRight = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <h1>CODE</h1>
                <h1>DELIVER</h1>
                <h1>REPEAT</h1>
            </div>

            <button><Link to='scrollTOPRojects' smooth={true} >See Work</Link></button>
            <p>"Discover my abilities and attention to detail through my portfolio. Review a range of impressive projects that showcase my creativity and expertise. Take a look and let me know your thoughts."</p>
            <svg width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>

            <img src={arrow} alt="" />
        </div>
    )
}

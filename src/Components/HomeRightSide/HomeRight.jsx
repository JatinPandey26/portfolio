import styles from './style.module.scss'

import React from 'react'
import video from '../../assets/biker.mp4'


const HomeRight = () => {
    return (
        <div className={styles.wrapper}>
            <video src={video} autoPlay muted loop></video>
        </div>
    )
}

export default HomeRight
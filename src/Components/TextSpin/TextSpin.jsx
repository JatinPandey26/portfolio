import React, { useLayoutEffect, useRef } from 'react'
import styles from './styles.module.scss'
const TextSpin = () => {
    const textRef = useRef(null);
    useLayoutEffect(() => {
        const text = textRef.current;
        window.addEventListener('scroll', function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrollPosition = ((scrollTop / scrollHeight)) * 5000;

            text.style.setProperty('--rotation', `${scrollPosition}deg`);
        });
    }, [])
    return (
        <div className={styles.wrapper} ref={textRef}>
            <h1 >
                Life's a bore? Come spin, round and round. Twirl with me, let's break new ground!
            </h1>
        </div>
    )
}

export default TextSpin
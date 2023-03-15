import React, { useLayoutEffect } from 'react'
import { marquee } from '../../../utils/marquee'
import style from './style.module.scss'
const MarqueBars = () => {
    useLayoutEffect(() => {
        marquee()
    }, [])
    return (
        <div className={style.wrapper}>
            <div className="marquee">
                <div className="marquee-content">
                    <div className="text-block">CHAI</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='red' width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" /></svg>
                    <div className="text-block">CODE</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='red' width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" /></svg>
                </div>
            </div>
        </div>
    )
}

export default MarqueBars
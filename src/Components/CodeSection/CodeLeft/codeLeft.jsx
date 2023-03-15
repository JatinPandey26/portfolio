import React from 'react'
import style from './style.module.scss'
import happy from './happy-icon.svg'
import chai from './chai.svg'
const CodeLeft = () => {
    return (
        <div className={style.wrapper} >
            <h1>CHAI</h1>
            <h2>&</h2>
            <h1>CODE</h1>
            <div className={style.item}>
                <img src={happy} alt="" />
            </div>
            <div className={style.item}>
                <img src={happy} alt="" />
            </div>
            <div className={style.item}>
                <img src={happy} alt="" />
            </div>
            <div className={style.item}>
                <img src={happy} alt="" />
            </div>


        </div>
    )
}

export default CodeLeft
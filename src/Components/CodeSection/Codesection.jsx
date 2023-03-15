import React from 'react'
import CodeLeft from './CodeLeft/codeLeft'
import { CodeRight } from './CodeRight/codeRight'
import styles from './style.module.scss'
const Codesection = () => {
    return (
        <div className={styles.codesection}>
            <CodeLeft />
            <CodeRight />
        </div>
    )
}

export default Codesection
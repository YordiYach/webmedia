import React from 'react'
import logo from '../imgs/logo.png'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo} className={styles.logo} alt="logo" />
            <p className={styles.p}>Guatemala 2023</p>
            <p className={styles.p}>All Rights Reserved to Yordi Yach</p>
        </footer>
    )
}

export default Footer
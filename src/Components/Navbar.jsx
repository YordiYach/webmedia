import React from 'react'
import styles from './Navbar.module.css'
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} className={styles.logo} alt="logo" />
            </div>
            <div className={styles.linksContainer}>
                <Link to="/?cat=art" className={styles.link} >
                    <h6>ART</h6>
                </Link>

                <Link to="/?cat=science" className={styles.link} >
                    <h6>SCIENCE</h6>
                </Link>

                <Link to="/?cat=technology" className={styles.link} >
                    <h6>TECHNOLOGY</h6>
                </Link>

                <Link to="/?cat=cinema" className={styles.link} >
                    <h6>CINEMA</h6>
                </Link>

                <Link to="/?cat=design" className={styles.link} >
                    <h6>DESIGN</h6>
                </Link>

                <Link to="/?cat=food" className={styles.link} >
                    <h6>FOOD</h6>
                </Link>

                <span className={styles.link}>Jhon</span>
                <span className={styles.link}>Logout</span>
                <span className={styles.write}>
                    <Link className={styles.write} to="/write">WRITE</Link>
                </span>
            </div>
        </div>
    )
}

export default Navbar
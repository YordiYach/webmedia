import React from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className={styles.display}>
      <div className={styles.container}>
        <h1 className={styles.title} >LOGIN</h1>
        <form className={styles.form}>
          <input required type='text' className={styles.input} placeholder='Username' />
          <input required type='password' className={styles.input} placeholder='Password' />
          <button className={styles.button}>Login</button>
        </form>
        <p className={styles.error}>Algo a ocurrido!</p>
        <span className={styles.description}>
          Don't have an account?<Link className={styles.description} to="/register">Click Here!</Link>
        </span>
      </div>
    </div>
  )
}

export default Login
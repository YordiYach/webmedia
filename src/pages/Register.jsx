import React from 'react'
import styles from './Register.module.css'

const Register = () => {
  return (
    <div className={styles.display}>
      <div className={styles.container}>
        <h1 className={styles.title} >REGISTER</h1>
        <form className={styles.form}>
          <input required type='text' className={styles.input} placeholder='Username' />
          <input required type='email' className={styles.input} placeholder='Email' />
          <input required type='password' className={styles.input} placeholder='Password' />
          <button className={styles.button}>Register</button>
        </form>
        <p className={styles.error}>Algo a ocurrido!</p>
      </div>
    </div >
  )
}

export default Register
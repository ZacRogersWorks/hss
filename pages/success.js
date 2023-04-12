import React from 'react'
import styles from "../styles/Home.module.css";

const success = () => {
  return (
    <div className={styles.success}>
      Email sent successfully!
      <a href="/">Back to Home</a>
    </div>
  )
}

export default success
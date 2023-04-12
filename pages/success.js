import React from 'react'
import styles from "../styles/Home.module.css";
import Link from 'next/link';

const success = () => {
  return (
    <div className={styles.success}>
      Email sent successfully!
      <Link href="/">Back to Home</Link>
    </div>
  )
}

export default success
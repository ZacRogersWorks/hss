import React from 'react'
import styles from "../styles/Home.module.css";
import Link from 'next/link';
import Head from 'next/head';

const success = () => {
  return (
    <>
    <Head>
        <title>Hospital Safety Solutions</title>
        <meta
          name="description"
          content="Providing solutions for a cleaner and safer workplace.  "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
    <div className={styles.success}>
      Email sent successfully!
      <Link href="/">Back to Home</Link>
    </div>
    </>
  )
}

export default success
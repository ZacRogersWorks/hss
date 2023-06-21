import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      {/* <link rel="stylesheet" href="https://use.typekit.net/dop2uqb.css" /> */}
      <link rel="stylesheet" href="/styles/globals.css"/>
      <link rel="stylesheet" href="/styles/Home.css"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
        <Head />
      <body>
        <Script
            id="cookieyes"
            src={`https://cdn-cookieyes.com/client_data/325eee571a93360fa68a7a10/script.js`}
            onLoad={() => {
              console.log('Script has loaded')
            }}
            strategy="beforeInteractive"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
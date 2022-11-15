/* eslint-disable @next/next/no-page-custom-font */
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='light'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap' rel='stylesheet' />
        <link rel='apple-touch-icon' sizes='120x120' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='msapplication-TileColor' content='#30BA78' />
        <meta name='theme-color' content='#ffffff'></meta>
      </Head>
      <body className='font-body'>
        <Main />
        <NextScript />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EH6S6EJ2S3"></script>
        <script dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EH6S6EJ2S3');
          `,
          }}
        />

      </body>
    </Html>
  )
}

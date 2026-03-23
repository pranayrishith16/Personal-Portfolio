import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Pranay Rishith Bondugula | ML & MLOps Engineer, Data Scientist',
  description: 'Portfolio of Pranay Rishith Bondugula, an ML & MLOps Engineer and Data Scientist building production AI systems, RAG pipelines, and edge AI solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-X9WXFHQNCV" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X9WXFHQNCV');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}

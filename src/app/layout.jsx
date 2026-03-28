import './globals.css'
import Script from 'next/script'
import { Inter, Space_Grotesk, Fira_Code } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' })
const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
  display: 'optional',
})

export const metadata = {
  title: 'Pranay Rishith Bondugula | ML Engineer & Data Scientist',
  description: 'ML Engineer at Accenture building production RAG systems, LLM fine-tuning pipelines, and MLOps infrastructure. 4+ years shipping AI to 50K+ devices.',
  metadataBase: new URL('https://pranayrishith.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Pranay Rishith Bondugula | ML Engineer',
    description: 'ML Engineer · GenAI · RAG · MLOps · Accenture',
    url: 'https://pranayrishith.com',
    siteName: 'Pranay Bondugula',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranay Rishith Bondugula | ML Engineer',
    description: 'ML Engineer · GenAI · RAG · MLOps',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pranay Rishith Bondugula',
  url: 'https://pranayrishith.com',
  jobTitle: 'ML Engineer',
  worksFor: { '@type': 'Organization', name: 'Accenture' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of North Texas' },
  sameAs: [
    'https://linkedin.com/in/pranayrishith16',
    'https://github.com/pranayrishith16',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.smidigflytt.se'),
  title: "Smidigflytt - Professionell Flyttfirma & Städservice",
  description: "Professionell flyttfirma med bohagsflytt, företagsflytt och städservice i hela Sverige. RUT-avdrag, försäkring och erfarna flyttare. Få offert idag!",
  keywords: "flyttfirma, bohagsflytt, företagsflytt, utlandsflytt, bärhjälp, packhjälp, bortforsling, magasinering, flyttstädning, byggstädning, fönsterputsning, Sverige, RUT-avdrag",
  authors: [{ name: "Smidigflytt" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
  openGraph: {
    title: "Smidigflytt - Professionell Flyttfirma & Städservice",
    description: "Professionell flytt- och städservice i hela Sverige. RUT-avdrag och försäkring ingår.",
    type: "website",
    locale: "sv_SE",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Smidigflytt - Professionell Flyttfirma'
      }
    ]
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

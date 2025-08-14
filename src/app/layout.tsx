import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smidigflytt - Professionell Flyttfirma & Städservice",
  description: "Smidigflytt erbjuder bohagsflytt, företagsflytt, utlandsflytt, bärhjälp, packhjälp, bortforsling, magasinering, flyttstädning, byggstädning och fönsterputsning i hela Sverige. RUT-avdrag, försäkring och professionella flyttare. Begär offert idag!",
  keywords: "flyttfirma, bohagsflytt, företagsflytt, utlandsflytt, bärhjälp, packhjälp, bortforsling, magasinering, flyttstädning, byggstädning, fönsterputsning, Sverige, RUT-avdrag",
  authors: [{ name: "Smidigflytt" }],
  robots: "index, follow",
  openGraph: {
    title: "Smidigflytt - Professionell Flyttfirma & Städservice",
    description: "Professionell flytt- och städservice i hela Sverige. RUT-avdrag och försäkring ingår.",
    type: "website",
    locale: "sv_SE",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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

'use client'

// This component is for the app directory - metadata is handled in layout.tsx and page.tsx files
// This component can be used for dynamic structured data

import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
}

export default function SEO({ title, description, keywords, image, url }: SEOProps) {
  useEffect(() => {
    // Update page title dynamically
    document.title = title

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }

    // Add structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Smidigflytt",
      "description": description,
      "url": url || "https://smidigflytt365.se",
      "telephone": "+46-10-544-05-77",
      "email": "info@smidigflytt365.se",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SE"
      },
      "serviceArea": {
        "@type": "Country", 
        "name": "Sverige"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Flytt- och städtjänster",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bohagsflytt privatflytt",
              "description": "Professionell bohagsflytt för privatpersoner"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Företagsflytt",
              "description": "Specialiserade på företagsflytt med minimal störning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Utlandsflytt",
              "description": "Internationella flyttar med expertis inom tullformaliteter"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bärhjälp",
              "description": "Professionell bärhjälp för tunga lyft och transport"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Packhjälp vid flytt",
              "description": "Professionell packning med kvalitetsmaterial"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bortforsling av möbler",
              "description": "Miljövänlig bortforsling och återvinning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Magasinering av möbler",
              "description": "Säker förvaring i bevakade magasin"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Flyttstädning",
              "description": "Garanterad godkänd flyttstädning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Byggstädning",
              "description": "Professionell byggstädning efter renovering"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fönsterputsning",
              "description": "Kristallklara fönster för hem och företag"
            }
          }
        ]
      }
    })

    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [title, description, keywords, image, url])

  return null
}

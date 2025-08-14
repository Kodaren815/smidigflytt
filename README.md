# Smidigflytt Website

En modern, responsiv hemsida för flyttfirman Smidigflytt byggd enligt specifikationerna i Instructions.md.

## 🚀 Quick Deployment

### Docker (VPS/Self-hosted)
```bash
./deploy-vps.sh
```

### Vercel
```bash
vercel --prod
```

### Netlify
```bash
netlify deploy --prod
```

📋 **Se [DEPLOYMENT.md](DEPLOYMENT.md) för detaljerade instruktioner**

## ✅ Fullständig implementering av alla funktioner

### Webbplatsstruktur enligt instruktionerna
- **Startsida** med hero-sektion, fördelar, tjänstöversikt, kundrecensioner och call-to-action
- **Dynamisk multisteg-prisberäknare** (exakt som specificerat i instruktionerna)
- **Stadssidor** för SEO-optimering (Stockholm, Västerås, mall för fler städer)
- **Tjänstesidor** med detaljerad information (Flytthjälp implementerad, mall för alla tjänster)
- **Responsiv design** som fungerar perfekt på alla enheter

### SEO-optimering (Enligt instruktionerna)
- Unika meta-titlar och meta-beskrivningar för varje sida
- Strukturerade data (Schema.org) för sökmotoroptimering
- SEO-vänliga URL:er för städer och tjänster (/stader/stockholm, /tjanster/flytthjalp)
- Interna länkar mellan relaterade sidor
- H1, H2, H3 rubriker med rätt nyckelord för sökmotorer

### Designsystem (Exakt enligt instruktionerna)
- **Färgschema**: Alla färger från instruktionerna implementerade
  - #3361AC (blå), #E7E6DD (ljusgrå), #E8C766 (ljusgul)
  - #E8AF30 (gul), #162F65 (mörkblå), #0F2043 (djupblå)
- **Gradienter**: Implementerade enligt instruktionerna
- **Moderna animationer** med Framer Motion
- **Glaseffekter och skuggor** för premium-känsla

### Dynamisk Prisberäknare (Multisteg - Enligt instruktionerna)
Exakt som specificerat med:
1. **Tjänstval** (Flytt eller Städ)
2. **Datumväljare**
3. **Adressinmatning**
4. **Boendetyp** (Lägenhet, Radhus, Villa)
5. **Boyta i kvm**
6. **Våning**
7. **Hiss ja/nej**
8. **Balkong ja/nej**
9. **Kontaktuppgifter**
10. **Sammanfattning och skicka**

Funktioner:
- ✅ Visa bara en fråga i taget
- ✅ Progressbar
- ✅ Responsiv och mobile-first
- ✅ Prisuppskattning baserad på val
- ✅ Bekräftelsemeddelande

## Installation och körning

```bash
# Navigera till projektmappen
cd smidigflytt-website

# Installera dependencies
npm install

# Starta development server
npm run dev

# Öppna i webbläsare: http://localhost:3000
```

## Projektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout med Header & Footer
│   ├── page.tsx           # Startsida
│   ├── globals.css        # Global styles med färgvariabler
│   ├── prisberknare/      # Prisberäknare sida
│   ├── offert/            # Offert sida
│   ├── stader/            # Stadssidor för SEO
│   │   ├── stockholm/
│   │   └── vasteras/
│   └── tjanster/          # Tjänstesidor
│       └── flytthjalp/
├── components/            # Återanvändbara komponenter
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── WhyChooseUs.tsx
│   ├── ServicesOverview.tsx
│   ├── CustomerReviews.tsx
│   ├── CallToAction.tsx
│   ├── PriceCalculator.tsx
│   ├── CityPage.tsx
│   ├── ServicePage.tsx
│   └── SEO.tsx
```

## Teknisk stack

- **Next.js 15** med App Router
- **TypeScript** för typsäkerhet
- **Tailwind CSS v4** med anpassade färger enligt instruktionerna
- **Framer Motion** för animationer
- **Lucide React** för ikoner

## Nästa steg för lansering

1. **Lägg till fler städer**: Använd CityPage-komponenten för Göteborg, Malmö, Uppsala, etc.
2. **Lägg till fler tjänster**: Använd ServicePage-komponenten för flyttstädning, magasinering, etc.
3. **Deploy till production**: Webbplatsen är redo för deploy till Vercel/Netlify
4. **Google Analytics**: Lägg till tracking för att mäta prestanda

Webbplatsen är **komplett enligt alla specifikationer i Instructions.md** och redo att lanseras! 🚀

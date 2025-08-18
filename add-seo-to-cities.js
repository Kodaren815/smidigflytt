const fs = require('fs');
const path = require('path');

// Get all city page files
const staderDir = path.join(__dirname, 'src/app/stader');

function getAllCityPages(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory() && item !== '[region]') {
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        files.push({
          path: pagePath,
          city: item
        });
      }
    }
  });
  
  return files;
}

function addSeoToPage(filePath, cityName) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if SEO is already imported
  if (content.includes("import SEO from")) {
    console.log(`SEO already added to ${cityName}`);
    return;
  }
  
  // Add SEO import
  content = content.replace(
    "import CityPage from '@/components/CityPage'",
    "import CityPage from '@/components/CityPage'\nimport SEO from '@/components/SEO'"
  );
  
  // Find the return statement pattern
  const returnMatch = content.match(/return <CityPage city={cityData} \/>/);
  if (!returnMatch) {
    console.log(`Could not find return statement in ${cityName}`);
    return;
  }
  
  // Get city name in proper case
  const cityDisplayName = cityName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-')
    .replace('Orebro', 'Örebro')
    .replace('Nykoping', 'Nyköping')
    .replace('Vasteras', 'Västerås')
    .replace('Malmo', 'Malmö')
    .replace('Goteborg', 'Göteborg')
    .replace('Strangnas', 'Strängnäs')
    .replace('Oxelosund', 'Oxelösund')
    .replace('Nynashamn', 'Nynäshamn')
    .replace('Sodertalje', 'Södertälje')
    .replace('Jarfalla', 'Järfälla')
    .replace('Osteraker', 'Österåker')
    .replace('Upplands-vasby', 'Upplands-Väsby')
    .replace('Varmdo', 'Värmdö')
    .replace('Tyreso', 'Tyresö')
    .replace('Ekero', 'Ekerö')
    .replace('Lidingo', 'Lidingö')
    .replace('Taby', 'Täby');
  
  // Build the new return statement with SEO
  const newReturn = `  const serviceType = isStadfirma ? 'Städfirma' : 'Flyttfirma'
  const serviceDescription = isStadfirma ? 'städtjänster' : 'flytthjälp'

  return (
    <>
      <SEO
        title={\`\${serviceType} ${cityDisplayName} - Professionell \${serviceDescription} i ${cityDisplayName} | Smidigflytt\`}
        description={\`Letar du efter en pålitlig \${serviceType.toLowerCase()} i ${cityDisplayName}? Smidigflytt erbjuder trygg \${serviceDescription}, \${isStadfirma ? 'hemstäd och kontorsstäd' : 'flyttstädning och magasinering'} i hela ${cityDisplayName}. RUT-avdrag och försäkring ingår.\`}
        keywords={\`\${serviceType.toLowerCase()} ${cityName.toLowerCase()}, \${serviceDescription} ${cityName.toLowerCase()}, \${isStadfirma ? 'hemstäd' : 'flyttstädning'} ${cityName.toLowerCase()}, \${isStadfirma ? 'städning' : 'flytt'} ${cityName.toLowerCase()}\`}
        url={\`https://smidigflytt.se/stader/${cityName}\${isStadfirma ? '?type=stadfirma' : ''}\`}
      />
      <CityPage city={cityData} />
    </>
  )`;
  
  // Replace the return statement
  content = content.replace(
    /return <CityPage city={cityData} \/>/,
    newReturn
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Added SEO to ${cityName}`);
}

// Main execution
const cityPages = getAllCityPages(staderDir);
console.log(`Found ${cityPages.length} city pages`);

cityPages.forEach(({ path: filePath, city }) => {
  addSeoToPage(filePath, city);
});

console.log('Finished adding SEO to all city pages');

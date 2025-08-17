const fs = require('fs');
const path = require('path');

// List of files that need to be updated
const files = [
  'src/app/stader/gnesta/page.tsx',
  'src/app/stader/fagersta/page.tsx',
  'src/app/stader/goteborg/page.tsx',
  'src/app/stader/karlskoga/page.tsx',
  'src/app/stader/malmo/page.tsx',
  'src/app/stader/nora/page.tsx',
  'src/app/stader/norberg/page.tsx',
  'src/app/stader/huddinge/page.tsx',
  'src/app/stader/torshalla/page.tsx',
  'src/app/stader/jarfalla/page.tsx',
  'src/app/stader/oxelosund/page.tsx',
  'src/app/stader/sundbyberg/page.tsx',
  'src/app/stader/stockholm-stad/page.tsx',
  'src/app/stader/nacka/page.tsx',
  'src/app/stader/haninge/page.tsx',
  'src/app/stader/uppsala/page.tsx',
  'src/app/stader/nykoping/page.tsx',
  'src/app/stader/nynashamn/page.tsx',
  'src/app/stader/tyreso/page.tsx',
  'src/app/stader/flen/page.tsx',
  'src/app/stader/skultuna/page.tsx',
  'src/app/stader/trosa/page.tsx',
  'src/app/stader/malardalen/page.tsx',
  'src/app/stader/varmdo/page.tsx',
  'src/app/stader/degerfors/page.tsx',
  'src/app/stader/strangnas/page.tsx',
  'src/app/stader/sala/page.tsx',
  'src/app/stader/ekero/page.tsx',
  'src/app/stader/arboga/page.tsx',
  'src/app/stader/taby/page.tsx',
  'src/app/stader/eskilstuna/page.tsx',
  'src/app/stader/vasteras/page.tsx',
  'src/app/stader/kumla/page.tsx',
  'src/app/stader/askersund/page.tsx',
  'src/app/stader/solna/page.tsx',
  'src/app/stader/vallentuna/page.tsx',
  'src/app/stader/nykvarn/page.tsx',
  'src/app/stader/orebro/page.tsx',
  'src/app/stader/salem/page.tsx',
  'src/app/stader/lidingo/page.tsx',
  'src/app/stader/sodertalje/page.tsx',
  'src/app/stader/upplands-vasby/page.tsx',
  'src/app/stader/osteraker/page.tsx',
  'src/app/stader/hallefors/page.tsx',
  'src/app/stader/hallsberg/page.tsx',
  'src/app/stader/surahammar/page.tsx',
  'src/app/stader/koping/page.tsx',
  'src/app/stader/sollentuna/page.tsx',
  'src/app/stader/lindesberg/page.tsx',
  'src/app/stader/danderyd/page.tsx',
  'src/app/stader/katrineholm/page.tsx',
  'src/app/stader/botkyrka/page.tsx',
  'src/app/stader/hallstahammar/page.tsx',
  'src/app/stader/sigtuna/page.tsx',
  'src/app/stader/kungsor/page.tsx',
  'src/app/stader/upplands-bro/page.tsx',
  'src/app/stader/stockholm/page.tsx'
];

files.forEach(filePath => {
  console.log(`Processing ${filePath}...`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the Props interface
    content = content.replace(
      /interface Props \{\s*searchParams: \{\s*type\?: 'flyttfirma' \| 'stadfirma'\s*\}\s*\}/g,
      `interface Props {
  searchParams: Promise<{
    type?: 'flyttfirma' | 'stadfirma'
  }>
}`
    );
    
    // Replace generateMetadata function to make it async and await searchParams
    content = content.replace(
      /export async function generateMetadata\(\{ searchParams \}: Props\) \{([^}]*(?:\{[^}]*\}[^}]*)*)\s*const serviceType = searchParams\.type/g,
      `export async function generateMetadata({ searchParams }: Props) {$1
  const resolvedSearchParams = await searchParams
  const serviceType = resolvedSearchParams.type`
    );
    
    // Replace other searchParams references in generateMetadata
    content = content.replace(/searchParams\.type/g, 'resolvedSearchParams.type');
    
    // Replace the main function export to be async and await searchParams
    content = content.replace(
      /export default function (\w+)\(\{ searchParams \}: Props\) \{/,
      'export default async function $1({ searchParams }: Props) {'
    );
    
    // Add await for searchParams in the main function
    content = content.replace(
      /export default async function \w+\(\{ searchParams \}: Props\) \{([^}]*(?:\{[^}]*\}[^}]*)*?)\s*return/,
      (match, body) => {
        if (body.includes('await searchParams')) {
          return match; // Already has await
        }
        const newBody = body.replace(
          /^(\s*)(\S)/m,
          `$1const resolvedSearchParams = await searchParams
$1$2`
        );
        return match.replace(body, newBody);
      }
    );
    
    // Replace searchParams references in the main function
    content = content.replace(
      /(\s+)const resolvedSearchParams = await searchParams[\s\S]*?return/,
      (match) => {
        return match.replace(/searchParams(?!.*resolvedSearchParams)/g, 'resolvedSearchParams');
      }
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated ${filePath}`);
    
  } catch (error) {
    console.error(`✗ Failed to process ${filePath}:`, error.message);
  }
});

console.log('\nDone! All files have been processed.');

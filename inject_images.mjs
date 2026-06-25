import fs from 'fs';

const csv = fs.readFileSync('products.csv', 'utf8');
const rows = csv.split('\n').filter(r => r.trim() !== '');

// skip header
rows.shift();

let catalog = fs.readFileSync('lib/catalog-data.ts', 'utf8');

rows.forEach((row, index) => {
  const parts = row.split('","');
  if (parts.length < 42) return;
  const imageField = parts[41];
  let imageUrl = '';
  if (imageField) {
    const splitImg = imageField.split(' ! alt :')[0];
    if (splitImg && splitImg.startsWith('http')) {
      imageUrl = splitImg;
    }
  }

  if (imageUrl) {
    const cKey = `key: "prod_${index + 5}",`;
    catalog = catalog.replace(cKey, `imageUrl: "${imageUrl}",\n    ${cKey}`);

    const wKey = `key: "wprod_${index + 5}",`;
    catalog = catalog.replace(wKey, `imageUrl: "${imageUrl}",\n    ${wKey}`);
  }
});

fs.writeFileSync('lib/catalog-data.ts', catalog);
console.log('Images injected!');

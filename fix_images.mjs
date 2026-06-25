import fs from 'fs';

let catalog = fs.readFileSync('lib/catalog-data.ts', 'utf8');

const images = [
  "https://jeepoo.com/wp-content/uploads/2025/02/Add-a-heading.webp",
  "https://jeepoo.com/wp-content/uploads/2025/02/6-monthly.webp",
  "https://jeepoo.com/wp-content/uploads/2025/02/Solution-2.webp",
  "https://jeepoo.com/wp-content/uploads/2025/02/Solution-3.webp"
];

for (let i = 0; i < 4; i++) {
  const cKey = `key: "prod_${i + 1}",`;
  if (!catalog.includes(`imageUrl: "${images[i]}",\n    ${cKey}`)) {
     catalog = catalog.replace(cKey, `imageUrl: "${images[i]}",\n    ${cKey}`);
  }
  
  const wKey = `key: "wprod_${i + 1}",`;
  if (catalog.includes(wKey) && !catalog.includes(`imageUrl: "${images[i]}",\n    ${wKey}`)) {
     catalog = catalog.replace(wKey, `imageUrl: "${images[i]}",\n    ${wKey}`);
  }
}

fs.writeFileSync('lib/catalog-data.ts', catalog);
console.log('Fixed first 4 items!');

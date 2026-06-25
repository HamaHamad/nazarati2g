import fs from 'fs';

let catalog = fs.readFileSync('lib/catalog-data.ts', 'utf8');

// Extract all imageUrls that were already injected
const imageUrls = [];
const regex = /imageUrl:\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(catalog)) !== null) {
  if (!imageUrls.includes(match[1])) {
    imageUrls.push(match[1]);
  }
}

if (imageUrls.length === 0) {
  console.log("No images found to reuse!");
  process.exit(1);
}

// Ensure wholesale products get images
const wholesaleBlocks = [
  "key: \"acetateRound\",",
  "key: \"metalRectangle\",",
  "key: \"titaniumFrame\",",
  "key: \"wayfarer\",",
  "key: \"aviator\",",
  "key: \"sportWrap\",",
  "key: \"catEye\",",
  "key: \"browline\",",
  "key: \"oversized\",",
  "key: \"retroSquare\",",
  "key: \"clearDaily\",",
  "key: \"clearMonthly\",",
  "key: \"colorHazel\",",
  "key: \"colorBlue\",",
  "key: \"colorGreen\",",
  "key: \"solution100\",",
  "key: \"solution250\",",
  "key: \"solution360\",",
  "key: \"drops\",",
  "key: \"case\""
];

wholesaleBlocks.forEach((keyLine, i) => {
  if (catalog.includes(keyLine) && !catalog.includes(`imageUrl: "${imageUrls[i % imageUrls.length]}",\n    ${keyLine}`)) {
    catalog = catalog.replace(keyLine, `imageUrl: "${imageUrls[i % imageUrls.length]}",\n    ${keyLine}`);
  }
});

fs.writeFileSync('lib/catalog-data.ts', catalog);
console.log('Wholesale images injected!');

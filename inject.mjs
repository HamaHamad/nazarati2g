import fs from 'fs';

const catalog = fs.readFileSync('lib/catalog-data.ts', 'utf8');
const generatedCatalog = fs.readFileSync('generated_catalog.txt', 'utf8');

const updatedCatalog = catalog.replace('export const customerProducts: CustomerProduct[] = [', 'export const customerProducts: CustomerProduct[] = [\n' + generatedCatalog);
fs.writeFileSync('lib/catalog-data.ts', updatedCatalog);

const i18n = fs.readFileSync('lib/i18n.tsx', 'utf8');
const generatedI18nAr = fs.readFileSync('generated_i18n_ar.txt', 'utf8');
const generatedI18nEn = fs.readFileSync('generated_i18n_en.txt', 'utf8');

let updatedI18n = i18n.replace('products: {\n        acetateRound', 'products: {\n' + generatedI18nAr + '\n        acetateRound');
// Replace the english one too
const englishProductsStart = `products: {
        acetateRound: { name: "Acetate Round Frame"`;
updatedI18n = updatedI18n.replace(englishProductsStart, 'products: {\n' + generatedI18nEn + '\n        acetateRound: { name: "Acetate Round Frame"');

fs.writeFileSync('lib/i18n.tsx', updatedI18n);

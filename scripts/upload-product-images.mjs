import { v2 as cloudinary } from "cloudinary";

const products = [
  ["fresh-carrots", "Fresh Carrots", "fresh-vegetables", "#E67E22"],
  ["fresh-potatoes", "Fresh Potatoes", "fresh-vegetables", "#B8863B"],
  ["colored-peppers", "Colored Bell Peppers", "fresh-vegetables", "#C0392B"],
  ["fresh-broccoli", "Fresh Broccoli", "fresh-vegetables", "#2E7D32"],
  ["citrus-fruits", "Citrus Fruits", "fresh-fruits", "#F39C12"],
  ["fresh-garlic", "Fresh Garlic", "fresh-vegetables", "#D9D2BF"],
  ["fresh-onions", "Fresh Onions", "fresh-vegetables", "#B5651D"],
  ["fresh-green-beans", "Fresh Green Beans", "fresh-vegetables", "#168246"],
  ["frozen-strawberries", "Frozen Strawberries", "frozen-fruits", "#C0392B"],
  ["frozen-mango", "Frozen Mango", "frozen-fruits", "#F4A62A"],
  ["frozen-green-peas", "Frozen Green Peas", "frozen-vegetables", "#43A047"],
  ["frozen-green-beans", "Frozen Green Beans", "frozen-vegetables", "#0F7A4A"],
  ["frozen-molokhia", "Frozen Molokhia", "frozen-vegetables", "#1B5E20"],
  ["frozen-okra-zero", "Frozen Okra Zero", "frozen-vegetables", "#2E7D32"],
  ["frozen-okra-medium", "Frozen Okra Medium", "frozen-vegetables", "#388E3C"],
  ["frozen-okra-whole", "Frozen Okra Whole", "frozen-vegetables", "#33691E"],
  ["mixed-vegetables", "Mixed Vegetables", "frozen-vegetables", "#2F9E44"],
  ["frozen-carrot-cuts", "Frozen Carrot Cuts", "frozen-vegetables", "#E67E22"],
  ["frozen-baba-ghanoush", "Frozen Baba Ghanoush", "frozen-vegetables", "#6D4C41"],
  ["frozen-spinach", "Frozen Spinach", "frozen-vegetables", "#1B5E20"],
  ["frozen-broccoli", "Frozen Broccoli", "frozen-vegetables", "#2E7D32"],
];

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function productSvg(name, category, color) {
  const badge = category.startsWith("frozen") ? "FROZEN" : "FRESH";
  const categoryLabel = category.toUpperCase().replaceAll("-", " ");
  const safeName = escapeXml(name);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fbfaf5"/>
        <stop offset="1" stop-color="#edf7ea"/>
      </linearGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="24" stdDeviation="22" flood-color="#10261a" flood-opacity=".18"/>
      </filter>
    </defs>
    <rect width="1200" height="1200" fill="url(#bg)"/>
    <circle cx="1040" cy="120" r="260" fill="#e1b56f" opacity=".16"/>
    <circle cx="90" cy="1060" r="310" fill="#55a56f" opacity=".12"/>
    <rect x="58" y="58" width="1084" height="1084" rx="58" fill="white" opacity=".9" stroke="#10261a" stroke-opacity=".14" stroke-width="2"/>

    <g transform="translate(112 100)">
      <circle cx="42" cy="42" r="38" fill="#edf7ea"/>
      <path d="M42 16 C62 38 55 64 42 76 C29 64 22 38 42 16Z" fill="#168246"/>
      <path d="M42 34 C58 26 75 34 78 52 C60 60 48 51 42 34Z" fill="#55a56f"/>
      <text x="98" y="34" font-family="Arial, sans-serif" font-size="30" font-weight="900" fill="#0f6b3a">AL BARAKA</text>
      <text x="100" y="66" font-family="Arial, sans-serif" font-size="16" font-weight="800" letter-spacing="3" fill="#53605a">IMPORT &amp; EXPORT</text>
    </g>

    <rect x="872" y="92" width="220" height="62" rx="31" fill="#168246"/>
    <text x="982" y="132" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="900" letter-spacing="2" fill="white">${badge}</text>

    <g filter="url(#softShadow)">
      <circle cx="600" cy="470" r="235" fill="${color}"/>
      <circle cx="685" cy="395" r="92" fill="#ffffff" opacity=".18"/>
      <circle cx="515" cy="550" r="70" fill="#10261a" opacity=".08"/>
    </g>

    <rect x="132" y="820" width="936" height="210" rx="34" fill="#10261a"/>
    <text x="600" y="910" text-anchor="middle" font-family="Arial, sans-serif" font-size="64" font-weight="900" fill="white">${safeName}</text>
    <rect x="360" y="970" width="480" height="46" rx="23" fill="white"/>
    <text x="600" y="1001" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="900" letter-spacing="2" fill="#b47736">${categoryLabel}</text>
    <text x="96" y="1110" font-family="Arial, sans-serif" font-size="18" font-weight="800" fill="#53605a">Export-ready Egyptian produce</text>
  </svg>`;
}

async function uploadProductImage([slug, name, category, color]) {
  const svg = productSvg(name, category, color);
  const dataUri = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  const result = await cloudinary.uploader.upload(dataUri, {
    public_id: `al-baraka/products/${slug}-card`,
    overwrite: true,
    format: "webp",
    display_name: `${slug}-card`,
    tags: ["al-baraka", "product", "generated", "catalog", category],
    context: {
      product_slug: slug,
      product_name: name,
      category,
    },
    quality_analysis: true,
    colors: true,
  });

  return {
    slug,
    public_id: result.public_id,
    secure_url: result.secure_url,
  };
}

async function main() {
  if (!process.env.CLOUDINARY_URL) {
    throw new Error("Missing CLOUDINARY_URL environment variable.");
  }

  console.log(`Uploading ${products.length} Al Baraka product images...`);

  const uploaded = [];
  for (const product of products) {
    const result = await uploadProductImage(product);
    uploaded.push(result);
    console.log(`✓ ${result.slug}: ${result.secure_url}`);
  }

  console.log("\nUpload complete. Product image map:\n");
  console.log(JSON.stringify(Object.fromEntries(uploaded.map((item) => [item.slug, item.secure_url])), null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

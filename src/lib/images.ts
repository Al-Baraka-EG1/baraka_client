const cloud = "https://res.cloudinary.com/dd8tccdv5";
const image = (id: string) => `${cloud}/image/upload/${id}`;
const video = (id: string) => `${cloud}/video/upload/${id}`;

const card = {
  pepper: image("v1778013798/Red-Bell-Peppers-Product-Card_kct9na.png"),
  green: image("v1778013730/Green-Bell-Peppers-Product-Card_korxjg.png"),
  yellow: image("v1778013843/Yellow-Bell-Peppers-Product-Card_qdtbrz.png"),
  carrots: image("v1778013690/Fresh-Carrots-Product-Card_zjaxar.png"),
  strawberries: image("v1778013683/Frozen-Strawberries-Product-Card_jmayti.png"),
  apples: image("v1778013772/Polish-Apples-Product-Card_t5orxi.png"),
};

const hero = {
  pepper: image("v1778013805/Red-Bell-Peppers-Hero_z6ehck.png"),
  green: image("v1778013702/Green-Bell-Peppers-Hero_z090qj.png"),
  yellow: image("v1778013836/Yellow-Bell-Peppers-Hero_pibkjs.png"),
  carrots: image("v1778013695/Fresh-Carrots-Hero_ghzhjw.png"),
  strawberries: image("v1778013705/Frozen-Strawberries-Hero_hdxjo7.png"),
  apples: image("v1778013767/Polish-Apples-Hero_tlsmzj.png"),
};

const growing = {
  pepper: image("v1778013804/red-peppers-growing_viymxf.png"),
  green: image("v1778013724/green-peppers-growing_qz0fuq.png"),
  yellow: image("v1778013823/yellow-peppers-growing_ikt1sc.png"),
  carrots: image("v1778013658/carrtos-growing_uofzst.png"),
  strawberries: image("v1778013838/strawbierries-growing_f9vu4s.png"),
  apples: image("v1778013647/apple-growing_a3taki.png"),
};

const products: Record<string, string> = {
  "fresh-carrots": card.carrots,
  "fresh-potatoes": card.carrots,
  "colored-peppers": card.pepper,
  "fresh-broccoli": card.green,
  "citrus-fruits": card.apples,
  "fresh-garlic": card.yellow,
  "fresh-onions": card.yellow,
  "fresh-green-beans": card.green,
  "frozen-strawberries": card.strawberries,
  "frozen-mango": card.strawberries,
  "frozen-green-peas": card.green,
  "frozen-green-beans": card.green,
  "frozen-molokhia": card.green,
  "frozen-okra-zero": card.green,
  "frozen-okra-medium": card.green,
  "frozen-okra-whole": card.green,
  "mixed-vegetables": card.carrots,
  "frozen-carrot-cuts": card.carrots,
  "frozen-baba-ghanoush": card.yellow,
  "frozen-spinach": card.green,
  "frozen-broccoli": card.green,
  "red-bell": card.pepper,
  "green-bell": card.green,
  "yellow-bell": card.yellow,
  carrots: card.carrots,
  apples: card.apples,
  strawberries: card.strawberries,
};

const productHeroes: Record<string, string> = {
  ...Object.fromEntries(Object.keys(products).map((slug) => [slug, products[slug]])),
  "fresh-carrots": hero.carrots,
  "fresh-potatoes": hero.carrots,
  "colored-peppers": hero.pepper,
  "fresh-broccoli": hero.green,
  "citrus-fruits": hero.apples,
  "fresh-garlic": hero.yellow,
  "fresh-onions": hero.yellow,
  "fresh-green-beans": hero.green,
  "frozen-strawberries": hero.strawberries,
  "frozen-mango": hero.strawberries,
  "red-bell": hero.pepper,
  "green-bell": hero.green,
  "yellow-bell": hero.yellow,
  carrots: hero.carrots,
  apples: hero.apples,
  strawberries: hero.strawberries,
};

const productGrowing: Record<string, string> = {
  ...Object.fromEntries(Object.keys(products).map((slug) => [slug, growing.green])),
  "fresh-carrots": growing.carrots,
  "fresh-potatoes": growing.carrots,
  "colored-peppers": growing.pepper,
  "citrus-fruits": growing.apples,
  "fresh-garlic": growing.yellow,
  "fresh-onions": growing.yellow,
  "frozen-strawberries": growing.strawberries,
  "frozen-mango": growing.strawberries,
  "mixed-vegetables": growing.carrots,
  "frozen-carrot-cuts": growing.carrots,
  "frozen-baba-ghanoush": growing.yellow,
  "red-bell": growing.pepper,
  "green-bell": growing.green,
  "yellow-bell": growing.yellow,
  carrots: growing.carrots,
  apples: growing.apples,
  strawberries: growing.strawberries,
};

export const images = {
  logo: "/assets/logo-noback.png",
  texture: image("v1778013849/Texture-Overlay_pd7zx5.png"),
  trustTexture: image("v1778013844/Trust-Badge-Background-Texture_vc49d7.png"),
  heroBg: image("v1778013748/Hero-Background_c4na6t.png"),
  heroBgAlt: image("v1778013745/Hero-Background-2_emzqg2.png"),
  mobileHero: image("v1778013730/Mobile-Hero-Background_a36w6k.jpg"),
  heroCrate: image("v1778013634/AL_BARAKA_Branded_Wooden_Crate_with_Bell_Peppers_mgh324.png"),
  floatingLeaf: image("v1778013733/Hero-Floating-Accent-Element_n5vepl.png"),
  goldAccent: image("v1778013709/Gold-Accent-Element_ib3opc.png"),
  greenLeaf: "/assets/leaf.png",
  pepperPng1: "/assets/pngwing.com.png",
  pepperPng2: "/assets/pngwing.com (1).png",
  aboutHeroBg: image("v1778013631/About-Page-Hero-Background_hcyon1.png"),
  productsHeroBg: image("v1778013745/Hero-Background-2_emzqg2.png"),
  contactHeroBg: image("v1778013646/Contact-Hero-Background_zy9dgs.png"),
  aboutPreview: image("v1778013805/StoryHeritageImage_lphsxe.png"),
  ourStory: image("v1778013751/Our-Story-Narrative-Image_uzudz4.png"),
  polandOrchard: image("v1778013784/Poland-Partnership-Apple-Orchard_alq84q.png"),
  coldChain: image("v1778013794/Quality-Cold-Chain-Technology_xorsi6.png"),
  packaged: {
    peppers: image("v1778013772/pepper-Packaged_nexgxw.png"),
    apples: image("v1778013672/apple-Packaged_a2vdxa.png"),
    carrots: image("v1778013650/carrots-Packaged_dvuwne.png"),
  },
  products,
  productHeroes,
  growing: productGrowing,
};

export const videos = {
  hero: video("v1778013495/Homepage-Hero-Background-Loop_rkiksl.mp4"),
  heroAlt: video("v1778013483/Homepage-Hero-Background-Loop-alternative_xgpgqu.mp4"),
  aboutHeritage: video("v1778013486/AboutHeritage-Section-Video_zxzeoz.mp4"),
  productsReveal: video("v1778013473/Products-Section-Reveal-Transition_lykzfr.mp4"),
  qualityProcess: video("v1778013473/QualityProcess-Section-Video_j2siqx.mp4"),
  contactClosing: video("v1778013447/ContactClosing-CTA-Section_z6wyui.mp4"),
  productHeroes: {
    "fresh-carrots": video("v1778013457/Fresh-Carrots-Product-Hero-Video_dvwmua.mp4"),
    "colored-peppers": video("v1778013466/Red-Bell-Peppers-Product-Hero-Video_rqr0sv.mp4"),
    "frozen-strawberries": video("v1778013470/Frozen-Strawberries-Product-Hero-Video_wjp4ja.mp4"),
    "red-bell": video("v1778013466/Red-Bell-Peppers-Product-Hero-Video_rqr0sv.mp4"),
    carrots: video("v1778013457/Fresh-Carrots-Product-Hero-Video_dvwmua.mp4"),
    apples: video("v1778013483/Polish-Apples-Product-Hero-Video_p7z3qt.mp4"),
    strawberries: video("v1778013470/Frozen-Strawberries-Product-Hero-Video_wjp4ja.mp4"),
  } as Record<string, string>,
};

export function getProductImage(slug: string): string {
  return images.products[slug] || images.heroBg;
}

export function getProductHeroImage(slug: string): string {
  return images.productHeroes[slug] || getProductImage(slug) || images.heroBg;
}

export function getProductGallery(slug: string): string[] {
  return [images.productHeroes[slug], images.products[slug], images.growing[slug]].filter(Boolean);
}

export function getProductVideo(slug: string): string | undefined {
  return videos.productHeroes[slug];
}

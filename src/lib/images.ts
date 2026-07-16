const cloud = "https://res.cloudinary.com/dd8tccdv5";
const image = (id: string) => `${cloud}/image/upload/${id}`;
const video = (id: string) => `${cloud}/video/upload/${id}`;

const productGalleries: Record<string, string[]> = {
  "fresh-carrots": [
    image("v1778013690/Fresh-Carrots-Product-Card_zjaxar.png"),
    image("v1778013695/Fresh-Carrots-Hero_ghzhjw.png"),
    image("v1778013658/carrtos-growing_uofzst.png"),
    image("v1778013650/carrots-Packaged_dvuwne.png"),
  ],
  "fresh-potatoes": [
    image("v1784195075/fresh-potatoes-main-card_dewz1m.png"),
    image("v1784195079/fresh-potatoes-field-harvest_ewixwt.png"),
    image("v1784195082/fresh-potatoes-storage-crates_cco6ed.png"),
    image("v1784195081/fresh-potatoes-rustic-display_iskxzi.png"),
  ],
  "colored-peppers": [
    image("v1778013798/Red-Bell-Peppers-Product-Card_kct9na.png"),
    image("v1778013805/Red-Bell-Peppers-Hero_z6ehck.png"),
    image("v1778013804/red-peppers-growing_viymxf.png"),
    image("v1778013730/Green-Bell-Peppers-Product-Card_korxjg.png"),
    image("v1778013702/Green-Bell-Peppers-Hero_z090qj.png"),
    image("v1778013724/green-peppers-growing_qz0fuq.png"),
    image("v1778013843/Yellow-Bell-Peppers-Product-Card_qdtbrz.png"),
    image("v1778013836/Yellow-Bell-Peppers-Hero_pibkjs.png"),
    image("v1778013823/yellow-peppers-growing_ikt1sc.png"),
    image("v1778013772/pepper-Packaged_nexgxw.png"),
    image("v1778013634/AL_BARAKA_Branded_Wooden_Crate_with_Bell_Peppers_mgh324.png"),
  ],
  "fresh-broccoli": [
    image("v1784195075/fresh-broccoli-main-card_pemwt4.png"),
    image("v1784195071/fresh-broccoli-field-harvest_eto9se.png"),
    image("v1784195075/fresh-broccoli-storage-crates_zqe7cv.png"),
    image("v1784195079/fresh-broccoli-rustic-display_b0nume.png"),
  ],
  "citrus-fruits": [
    image("v1783504369/citrus-fruits-main-card_acinca.png"),
    image("v1783504375/citrus-fruits-orchard-grown_bafidh.png"),
    image("v1783504376/citrus-fruits-storage-crates_cqtwul.png"),
    image("v1783504370/citrus-fruits-rustic-display_njq1zh.png"),
  ],
  "fresh-garlic": [
    image("v1783505923/fresh-garlic-main-card_lgs9ka.png"),
    image("v1783505929/fresh-garlic-field-harvest_bqfnwh.png"),
    image("v1783505932/fresh-garlic-storage-crates_nyxwno.png"),
    image("v1783505930/fresh-garlic-rustic-display_hypfzq.png"),
  ],
  "fresh-onions": [
    image("v1783508686/fresh-onions-main-card_hfn2qk.png"),
    image("v1783508685/fresh-onions-field-harvest_rrqylq.png"),
    image("v1783508687/fresh-onions-storage-crates_pwfuvr.png"),
    image("v1783508686/fresh-onions-rustic-display_rnfo5i.png"),
  ],
  "fresh-green-beans": [
    image("v1783514937/fresh-green-beans-main-card_ubfs76.png"),
    image("v1783514935/fresh-green-beans-field-harvest_nokqqn.png"),
    image("v1783514940/fresh-green-beans-storage-crates_jmqodg.png"),
    image("v1783514937/fresh-green-beans-rustic-display_zrr9rn.png"),
  ],
  "frozen-strawberries": [
    image("v1778013683/Frozen-Strawberries-Product-Card_jmayti.png"),
    image("v1778013705/Frozen-Strawberries-Hero_hdxjo7.png"),
    image("v1778013838/strawbierries-growing_f9vu4s.png"),
  ],
  "frozen-mango": [
    image("v1783515301/frozen-mango-main-card_qirkye.png"),
    image("v1783515301/frozen-mango-orchard-harvest_ah1o5n.png"),
    image("v1783515303/frozen-mango-storage-crates_sxqmli.png"),
    image("v1783515297/frozen-mango-rustic-display_avndlh.png"),
  ],
  "frozen-green-peas": [
    image("v1783587653/frozen-green-peas-main-card_cmfhbi.png"),
    image("v1783587661/frozen-green-peas-field-harvest_hitojq.png"),
    image("v1783587656/frozen-green-peas-storage-crates_bmtxk3.png"),
    image("v1783587654/frozen-green-peas-rustic-display_gg7dy4.png"),
  ],
  "frozen-green-beans": [
    image("v1783591403/frozen-green-beans-main-card_rtk2mm.png"),
    image("v1783591400/frozen-green-beans-field-harvest_ddptqk.png"),
    image("v1783591406/frozen-green-beans-storage-crates_aktdzu.png"),
    image("v1783591406/frozen-green-beans-rustic-display_emmzre.png"),
  ],
  "frozen-molokhia": [
    image("v1783592951/frozen-molokhia-main-card_d7s7z9.png"),
    image("v1783592952/frozen-molokhia-field-harvest_proq5c.png"),
    image("v1783592947/frozen-molokhia-storage-crates_wkkyp2.png"),
    image("v1783592947/frozen-molokhia-rustic-display_z6jkgb.png"),
  ],
  "frozen-okra-zero": [
    image("v1783602050/frozen-okra-zero-main-card_cxoxn0.png"),
    image("v1783602051/frozen-okra-zero-field-harvest_zfgzpl.png"),
    image("v1783602051/frozen-okra-zero-storage-crates_utbwo9.png"),
    image("v1783602046/frozen-okra-zero-rustic-display_tg1b4s.png"),
  ],
  "frozen-okra-medium": [
    image("v1784107638/frozen-okra-medium-main-card_bzc6ku.png"),
    image("v1784107642/frozen-okra-medium-field-harvest_dpzfiv.png"),
    image("v1784107646/frozen-okra-medium-storage-crates_gqe3dh.png"),
    image("v1784107644/frozen-okra-medium-rustic-display_dhotsp.png"),
  ],
  "frozen-okra-whole": [
    image("v1784108390/frozen-okra-whole-main-card_whlddd.png"),
    image("v1784108397/frozen-okra-whole-field-harvest_e3pnhy.png"),
    image("v1784108397/frozen-okra-whole-storage-crates_a52vhq.png"),
    image("v1784108396/frozen-okra-whole-rustic-display_mhmngz.png"),
  ],
  "mixed-vegetables": [
    image("v1783587653/frozen-green-peas-main-card_cmfhbi.png"),
    image("v1778013658/carrtos-growing_uofzst.png"),
    image("v1783591406/frozen-green-beans-storage-crates_aktdzu.png"),
    image("v1783587654/frozen-green-peas-rustic-display_gg7dy4.png"),
  ],
  "frozen-carrot-cuts": [
    image("v1778013690/Fresh-Carrots-Product-Card_zjaxar.png"),
    image("v1778013695/Fresh-Carrots-Hero_ghzhjw.png"),
    image("v1778013658/carrtos-growing_uofzst.png"),
    image("v1778013650/carrots-Packaged_dvuwne.png"),
  ],
  "frozen-baba-ghanoush": [
    image("v1784193057/eggplant-main-card_lrxupz.png"),
    image("v1784193061/eggplant-field-harvest_lev9da.png"),
    image("v1784193062/eggplant-storage-crates_mfeb7l.png"),
    image("v1784193060/eggplant-rustic-display_bq5wku.png"),
  ],
  "frozen-spinach": [
    image("v1784194604/frozen-spinach-main-card_lgkbbj.png"),
    image("v1784194603/frozen-spinach-field-harvest_tdinmt.png"),
    image("v1784194604/frozen-spinach-storage-crates_y0op5a.png"),
    image("v1784194605/frozen-spinach-rustic-display_ymyn7x.png"),
  ],
  "frozen-broccoli": [
    image("v1784195075/fresh-broccoli-main-card_pemwt4.png"),
    image("v1784195071/fresh-broccoli-field-harvest_eto9se.png"),
    image("v1784195075/fresh-broccoli-storage-crates_zqe7cv.png"),
    image("v1784195079/fresh-broccoli-rustic-display_b0nume.png"),
  ],
};

const products = Object.fromEntries(
  Object.entries(productGalleries).map(([slug, gallery]) => [slug, gallery[0]]),
) as Record<string, string>;

const productHeroes = Object.fromEntries(
  Object.entries(productGalleries).map(([slug, gallery]) => [slug, gallery[1] || gallery[0]]),
) as Record<string, string>;

const productGrowing = Object.fromEntries(
  Object.entries(productGalleries).map(([slug, gallery]) => [slug, gallery[1] || gallery[0]]),
) as Record<string, string>;

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
  productGalleries,
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
  } as Record<string, string>,
};

export function getProductImage(slug: string): string {
  return images.products[slug] || images.heroBg;
}

export function getProductHeroImage(slug: string): string {
  return images.productHeroes[slug] || getProductImage(slug);
}

export function getProductGallery(slug: string): string[] {
  return [...new Set(images.productGalleries[slug] || [getProductImage(slug)])];
}

export function getProductVideo(slug: string): string | undefined {
  return videos.productHeroes[slug];
}

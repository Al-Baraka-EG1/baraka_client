const cloud = "https://res.cloudinary.com/dd8tccdv5";

export const images = {
  logo: "/assets/logo-noback.png",
  texture: `${cloud}/image/upload/v1778013849/Texture-Overlay_pd7zx5.png`,
  trustTexture: `${cloud}/image/upload/v1778013844/Trust-Badge-Background-Texture_vc49d7.png`,
  heroBg: `${cloud}/image/upload/v1778013748/Hero-Background_c4na6t.png`,
  heroBgAlt: `${cloud}/image/upload/v1778013745/Hero-Background-2_emzqg2.png`,
  mobileHero: `${cloud}/image/upload/v1778013730/Mobile-Hero-Background_a36w6k.jpg`,
  heroCrate: `${cloud}/image/upload/v1778013634/AL_BARAKA_Branded_Wooden_Crate_with_Bell_Peppers_mgh324.png`,
  floatingLeaf: `${cloud}/image/upload/v1778013733/Hero-Floating-Accent-Element_n5vepl.png`,
  goldAccent: `${cloud}/image/upload/v1778013709/Gold-Accent-Element_ib3opc.png`,
  greenLeaf:
    "/assets/green-leaf-isolated-transparent-white-background-png_888962-522.avif",
  pepperPng1: "/assets/pngwing.com.png",
  pepperPng2: "/assets/pngwing.com (1).png",
  aboutHeroBg: `${cloud}/image/upload/v1778013631/About-Page-Hero-Background_hcyon1.png`,
  productsHeroBg: `${cloud}/image/upload/v1778013745/Hero-Background-2_emzqg2.png`,
  contactHeroBg: `${cloud}/image/upload/v1778013646/Contact-Hero-Background_zy9dgs.png`,
  aboutPreview: `${cloud}/image/upload/v1778013805/StoryHeritageImage_lphsxe.png`,
  ourStory: `${cloud}/image/upload/v1778013751/Our-Story-Narrative-Image_uzudz4.png`,
  polandOrchard: `${cloud}/image/upload/v1778013784/Poland-Partnership-Apple-Orchard_alq84q.png`,
  coldChain: `${cloud}/image/upload/v1778013794/Quality-Cold-Chain-Technology_xorsi6.png`,
  packaged: {
    peppers: `${cloud}/image/upload/v1778013772/pepper-Packaged_nexgxw.png`,
    apples: `${cloud}/image/upload/v1778013672/apple-Packaged_a2vdxa.png`,
    carrots: `${cloud}/image/upload/v1778013650/carrots-Packaged_dvuwne.png`,
  },
  products: {
    "red-bell": `${cloud}/image/upload/v1778013798/Red-Bell-Peppers-Product-Card_kct9na.png`,
    "green-bell": `${cloud}/image/upload/v1778013730/Green-Bell-Peppers-Product-Card_korxjg.png`,
    "yellow-bell": `${cloud}/image/upload/v1778013843/Yellow-Bell-Peppers-Product-Card_qdtbrz.png`,
    carrots: `${cloud}/image/upload/v1778013690/Fresh-Carrots-Product-Card_zjaxar.png`,
    apples: `${cloud}/image/upload/v1778013772/Polish-Apples-Product-Card_t5orxi.png`,
    strawberries: `${cloud}/image/upload/v1778013683/Frozen-Strawberries-Product-Card_jmayti.png`,
  } as Record<string, string>,
  productHeroes: {
    "red-bell": `${cloud}/image/upload/v1778013805/Red-Bell-Peppers-Hero_z6ehck.png`,
    "green-bell": `${cloud}/image/upload/v1778013702/Green-Bell-Peppers-Hero_z090qj.png`,
    "yellow-bell": `${cloud}/image/upload/v1778013836/Yellow-Bell-Peppers-Hero_pibkjs.png`,
    carrots: `${cloud}/image/upload/v1778013695/Fresh-Carrots-Hero_ghzhjw.png`,
    apples: `${cloud}/image/upload/v1778013767/Polish-Apples-Hero_tlsmzj.png`,
    strawberries: `${cloud}/image/upload/v1778013705/Frozen-Strawberries-Hero_hdxjo7.png`,
  } as Record<string, string>,
  growing: {
    "red-bell": `${cloud}/image/upload/v1778013804/red-peppers-growing_viymxf.png`,
    "green-bell": `${cloud}/image/upload/v1778013724/green-peppers-growing_qz0fuq.png`,
    "yellow-bell": `${cloud}/image/upload/v1778013823/yellow-peppers-growing_ikt1sc.png`,
    carrots: `${cloud}/image/upload/v1778013658/carrtos-growing_uofzst.png`,
    apples: `${cloud}/image/upload/v1778013647/apple-growing_a3taki.png`,
    strawberries: `${cloud}/image/upload/v1778013838/strawbierries-growing_f9vu4s.png`,
  } as Record<string, string>,
};

export const videos = {
  hero: `${cloud}/video/upload/v1778013495/Homepage-Hero-Background-Loop_rkiksl.mp4`,
  heroAlt: `${cloud}/video/upload/v1778013483/Homepage-Hero-Background-Loop-alternative_xgpgqu.mp4`,
  aboutHeritage: `${cloud}/video/upload/v1778013486/AboutHeritage-Section-Video_zxzeoz.mp4`,
  productsReveal: `${cloud}/video/upload/v1778013473/Products-Section-Reveal-Transition_lykzfr.mp4`,
  qualityProcess: `${cloud}/video/upload/v1778013473/QualityProcess-Section-Video_j2siqx.mp4`,
  contactClosing: `${cloud}/video/upload/v1778013447/ContactClosing-CTA-Section_z6wyui.mp4`,
  productHeroes: {
    "red-bell": `${cloud}/video/upload/v1778013466/Red-Bell-Peppers-Product-Hero-Video_rqr0sv.mp4`,
    carrots: `${cloud}/video/upload/v1778013457/Fresh-Carrots-Product-Hero-Video_dvwmua.mp4`,
    apples: `${cloud}/video/upload/v1778013483/Polish-Apples-Product-Hero-Video_p7z3qt.mp4`,
    strawberries: `${cloud}/video/upload/v1778013470/Frozen-Strawberries-Product-Hero-Video_wjp4ja.mp4`,
  } as Record<string, string>,
};

export function getProductImage(slug: string): string {
  return images.products[slug] || images.heroBg;
}

export function getProductHeroImage(slug: string): string {
  return images.productHeroes[slug] || images.heroBg;
}

export function getProductGallery(slug: string): string[] {
  return [
    images.productHeroes[slug],
    images.products[slug],
    images.growing[slug],
  ].filter(Boolean);
}

export function getProductVideo(slug: string): string | undefined {
  return videos.productHeroes[slug];
}

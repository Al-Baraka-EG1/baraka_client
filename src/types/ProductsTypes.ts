export type ProductsType = {
  slug: string;
  name: string;
  category: "fresh" | "frozen";
  type: "fruit" | "vegetable";
  origin: string;
  tagline: string;
  description: string;
  shortDescription: string;
  uses: string[];
  storage: string;
  certifications: string[];
  highlights: string[];
  color: string;
  accentColor: string;
};

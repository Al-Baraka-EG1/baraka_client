export type ProductsType = {
  slug: string;
  name: string;
  category: "fresh" | "frozen";
  type: "fruit" | "vegetable";
  tagline: string;
  description: string;
  uses: string[];
  storage: string;
  certifications: string[];
  color: string;
  accentColor: string;
};

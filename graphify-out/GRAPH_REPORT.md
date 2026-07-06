# Graph Report - baraka_client  (2026-07-06)

## Corpus Check
- 55 files · ~22,232 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 245 nodes · 379 edges · 19 communities (15 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_animations.ts|animations.ts]]
- [[_COMMUNITY_devDependencies|devDependencies]]
- [[_COMMUNITY_ProductDetailPage.tsx|ProductDetailPage.tsx]]
- [[_COMMUNITY_components.json|components.json]]
- [[_COMMUNITY_HomePage.tsx|HomePage.tsx]]
- [[_COMMUNITY_compilerOptions|compilerOptions]]
- [[_COMMUNITY_dependencies|dependencies]]
- [[_COMMUNITY_ContactPage.tsx|ContactPage.tsx]]
- [[_COMMUNITY_products.ts|products.ts]]
- [[_COMMUNITY_layout.tsx|layout.tsx]]
- [[_COMMUNITY_cloudinary.ts|cloudinary.ts]]
- [[_COMMUNITY_graphify_code_only.py|graphify_code_only.py]]
- [[_COMMUNITY_button.tsx|button.tsx]]
- [[_COMMUNITY_eslint.config.mjs|eslint.config.mjs]]
- [[_COMMUNITY_next.config.ts|next.config.ts]]
- [[_COMMUNITY_next-env.d.ts|next-env.d.ts]]
- [[_COMMUNITY_postcss.config.mjs|postcss.config.mjs]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `scripts` - 9 edges
3. `useScrollFadeIn()` - 9 edges
4. `ProductsType` - 9 edges
5. `scaleRevealVariants` - 8 edges
6. `clipRevealVariants` - 8 edges
7. `FloatingLeaves()` - 7 edges
8. `tailwind` - 6 edges
9. `aliases` - 6 edges
10. `images` - 6 edges

## Surprising Connections (you probably didn't know these)
- `LenisScrollProvider()` --references--> `lenis`  [EXTRACTED]
  src/providers/LenisProvider.tsx → package.json
- `CloudinaryTestPage()` --calls--> `getCloudinaryAssets()`  [EXTRACTED]
  src/app/cloudinary-test/page.tsx → src/app/actions/cloudinary.ts
- `main()` --calls--> `getCloudinaryAssets()`  [EXTRACTED]
  src/utils/fetch_assets.ts → src/app/actions/cloudinary.ts
- `ProductCardProps` --references--> `ProductsType`  [EXTRACTED]
  src/components/custom/ProductCard.tsx → src/types/ProductsTypes.ts
- `ProductDetailPageProps` --references--> `ProductsType`  [EXTRACTED]
  src/components/pages/products/ProductDetailPage.tsx → src/types/ProductsTypes.ts

## Import Cycles
- None detected.

## Communities (19 total, 4 thin omitted)

### Community 0 - "animations.ts"
Cohesion: 0.09
Nodes (18): metadata, metadata, metadata, FloatingLeaves(), TermsPage(), milestones, values, useAboutAnimations() (+10 more)

### Community 1 - "devDependencies"
Cohesion: 0.08
Nodes (24): devDependencies, babel-plugin-react-compiler, dotenv, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, tsx (+16 more)

### Community 2 - "ProductDetailPage.tsx"
Cohesion: 0.18
Nodes (17): MotionLink, ProductCard(), ProductCardProps, ProductDetailPage(), ProductDetailPageProps, filterIcons, productBenefits, ProductsPage() (+9 more)

### Community 3 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 4 - "HomePage.tsx"
Cohesion: 0.13
Nodes (12): AnimatedCounter(), AnimatedCounterProps, defaultLeaves, FloatingLeavesProps, LeafConfig, TransparentImage(), TransparentImageProps, trustBadges (+4 more)

### Community 5 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 6 - "dependencies"
Cohesion: 0.11
Nodes (18): dependencies, class-variance-authority, clsx, gsap, @gsap/react, @hookform/resolvers, lucide-react, motion (+10 more)

### Community 7 - "ContactPage.tsx"
Cohesion: 0.21
Nodes (10): metadata, Field(), ContactPage(), contactCards, faqs, heroBenefits, partnershipBenefits, useContactForm() (+2 more)

### Community 8 - "products.ts"
Cohesion: 0.17
Nodes (8): metadata, generateMetadata(), Page(), Props, EASE_SMOOTH_ARR, navLinks, getProductBySlug(), products

### Community 9 - "layout.tsx"
Cohesion: 0.18
Nodes (9): lenis, cormorant, dmSans, metadata, playfair, spaceMono, BackToTop(), LenisScrollProvider() (+1 more)

### Community 10 - "cloudinary.ts"
Cohesion: 0.33
Nodes (6): cloudinary, CloudinaryAsset, CloudinaryAssetsResult, getCloudinaryAssets(), CloudinaryTestPage(), main()

### Community 11 - "graphify_code_only.py"
Cohesion: 0.67
Nodes (5): Path, code_files(), is_skipped(), main(), word_count()

### Community 12 - "button.tsx"
Cohesion: 0.70
Nodes (3): Button(), buttonVariants, cn()

## Knowledge Gaps
- **103 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+98 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `devDependencies`, `cloudinary.ts`, `layout.tsx`?**
  _High betweenness centrality (0.256) - this node is a cross-community bridge._
- **Why does `lenis` connect `layout.tsx` to `dependencies`?**
  _High betweenness centrality (0.225) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _104 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `animations.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09411764705882353 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `HomePage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12631578947368421 - nodes in this community are weakly interconnected._
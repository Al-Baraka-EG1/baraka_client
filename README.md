# Al Baraka for Import & Export — Corporate Website

**Public-facing corporate and B2B website for Al Baraka for Import & Export, presenting the company, its fresh and frozen agricultural products, export capabilities, and international partnership opportunities.**

Built with **Next.js 16.2.3, React 19.2.4, TypeScript, Tailwind CSS 4, GSAP, Motion, Lenis, Cloudinary, React Hook Form, Zod 4, Radix UI, and shadcn tooling**.

---

## Table of Contents

- [Project Role](#project-role)
- [Business Audience](#business-audience)
- [Website Goals](#website-goals)
- [Core Website Areas](#core-website-areas)
- [Product Discovery](#product-discovery)
- [B2B and Export Positioning](#b2b-and-export-positioning)
- [Technology Stack](#technology-stack)
- [Application Architecture](#application-architecture)
- [Routing and Page Model](#routing-and-page-model)
- [Content and Data Organization](#content-and-data-organization)
- [Forms and Validation](#forms-and-validation)
- [Media and Cloudinary](#media-and-cloudinary)
- [Motion and Interaction](#motion-and-interaction)
- [Responsive Design](#responsive-design)
- [Engineering Tooling](#engineering-tooling)
- [Local Development](#local-development)
- [Environment Configuration](#environment-configuration)
- [Build and Verification](#build-and-verification)
- [Engineering Conventions](#engineering-conventions)
- [Documentation Relationship](#documentation-relationship)
- [Scope Boundary](#scope-boundary)
- [Project Status](#project-status)
- [License](#license)

---

## Project Role

This repository contains the **public corporate website** for Al Baraka for Import & Export.

Its primary job is to represent the company professionally to international commercial partners and make the company's products, positioning, and contact pathways easy to understand.

The website is not the company's internal business-management system. Internal operational software is a separate initiative and should remain in separate repositories/documentation.

---

## Business Audience

The site is designed for B2B visitors such as:

- Importers
- Distributors
- Wholesalers
- Supermarkets
- Food-trading companies
- Foodservice buyers
- Food manufacturers
- International sourcing partners

The presentation therefore prioritizes trust, product clarity, company credibility, and partnership-oriented calls to action rather than consumer e-commerce behavior.

---

## Website Goals

The public website is intended to:

- Present Al Baraka as an established Egyptian import/export company
- Showcase fresh and frozen agricultural products
- Explain the company's export-support capabilities
- Give international buyers clear product-discovery paths
- Communicate sourcing, packaging, documentation, and shipment-support value
- Present selected partnership/company context
- Provide direct business contact opportunities
- Maintain a polished, modern, responsive visual identity

---

## Core Website Areas

Current public routes include:

```text
src/app/
├── about/
├── contact/
├── products/
├── privacy/
├── terms/
└── actions/
```

### Main content areas

- Homepage
- About
- Product catalog
- Product detail experiences
- Contact
- Privacy
- Terms

### Page responsibilities

#### Homepage
Introduces the brand, export positioning, product categories, and partnership value.

#### About
Explains company identity, sourcing/export context, values, and international-business narrative.

#### Products
Provides product discovery and product-led presentation for fresh/frozen agricultural items.

#### Contact
Creates a clear path for business inquiries and partnership communication.

#### Privacy / Terms
Provides supporting legal/informational pages required for a complete public company website.

---

## Product Discovery

The product experience is designed around B2B scanning and visual confidence rather than a consumer shopping cart.

### Product presentation goals

- Clear product names/categories
- High-quality product imagery
- Fresh/frozen positioning
- Product-specific detail content
- Easy transition from discovery to inquiry/contact

### Typical visitor flow

```text
Homepage / Products
        ↓
Browse product catalog
        ↓
Open product detail
        ↓
Review product presentation
        ↓
Contact / business inquiry
```

---

## B2B and Export Positioning

The website communicates company capabilities around areas such as:

- Egyptian agricultural sourcing
- Fresh and frozen product supply
- Packaging discussions
- Commercial documentation support
- Shipment coordination
- Buyer communication and follow-up
- International business relationships

The About experience also references the company's relationship with **Marianna in Poland** as part of the wider international-partnership story represented in the project content.

The site should remain careful not to promise commercial terms, certifications, or capabilities that are not actually approved by the business.

---

## Technology Stack

### Core

- **Next.js 16.2.3**
- **React 19.2.4**
- **React DOM 19.2.4**
- **TypeScript 5**
- **Next.js App Router**
- **React Compiler**

### Styling and UI

- **Tailwind CSS 4**
- **Radix UI**
- **shadcn tooling**
- **Lucide React**
- **class-variance-authority**
- `clsx`
- `tailwind-merge`
- `tw-animate-css`

### Motion and Interaction

- **GSAP 3.15**
- **@gsap/react**
- **Motion 12.38**
- **Lenis 1.3**

### Forms and Validation

- **React Hook Form 7.75**
- **Zod 4.4**
- **@hookform/resolvers**

### Media

- **Cloudinary 2.10**
- **next-cloudinary 6.17**
- Next.js image handling

### Tooling

- **ESLint 9**
- **eslint-config-next 16.2.3**
- **Graphify scripts** for project/code inspection support

The exact installed versions are defined in `package.json`.

---

## Application Architecture

```text
src/
├── app/                 # Next.js routes, layouts, actions
├── components/          # Shared and page-level UI
├── constants/           # Reusable content/configuration
├── hooks/               # Reusable React behavior
├── lib/                 # Shared libraries, media/animation helpers
├── providers/           # App-level providers
├── types/               # TypeScript contracts
└── utils/               # Reusable utilities
```

### Architecture responsibilities

#### `app/`
Owns route-level composition and server/client boundaries.

#### `components/`
Contains reusable visual components and page-specific composition pieces.

#### `constants/`
Keeps structured company/product content and configuration separate from low-level UI logic where appropriate.

#### `hooks/`
Hosts reusable interaction/state behavior.

#### `lib/`
Contains shared application libraries and helper infrastructure such as animation/media-related logic.

#### `types/`
Defines shared TypeScript contracts.

#### `utils/`
Contains reusable non-visual helpers.

---

## Routing and Page Model

The App Router keeps major public sections isolated as route domains.

```text
/
/about
/contact
/products
/products/...
/privacy
/terms
```

Product UI is split between listing/catalog presentation and product-detail composition.

### Routing principles

- Keep public routes stable for business sharing/searchability.
- Keep legal/support pages independent from marketing components.
- Keep route files focused on page composition rather than embedding all reusable UI logic directly.

---

## Content and Data Organization

The project separates structured company/product content from purely visual implementation where practical.

This helps with:

- Maintaining consistent copy across sections
- Reusing product/company information
- Keeping components smaller
- Updating business content without rewriting layout logic

### Content rule

Public company claims should be treated as business content, not guessed from code. When business information changes, update the relevant content source and verify all pages that consume it.

---

## Forms and Validation

React Hook Form and Zod are available for structured form behavior.

A recommended form flow is:

```text
Contact / inquiry UI
   ↓
React Hook Form
   ↓
Zod validation
   ↓
Server action / integration utility
   ↓
Result feedback
```

Client validation improves usability; any server-side submission or external integration should independently validate untrusted input.

---

## Media and Cloudinary

The website uses Cloudinary tooling for media workflows and centralized asset delivery.

### Media responsibilities

- Product photography
- Company/brand imagery
- Optimized remote delivery
- Reusable image references
- Server-side Cloudinary behavior where required

The project includes a dedicated server action related to Cloudinary behavior.

### Media rules

- Keep Cloudinary secrets server-side.
- Do not hard-code sensitive provider credentials into client components.
- Use optimized image sizing/responsive behavior.
- Keep product imagery consistent with actual product/company content.

---

## Motion and Interaction

The site uses GSAP, Motion, and Lenis to create a polished B2B presentation.

### Motion principles

- Motion should reinforce hierarchy, not compete with content.
- Product information must remain understandable without animation.
- Avoid blocking primary CTAs behind unnecessary transitions.
- Respect responsive/mobile performance.
- Keep reusable animation behavior centralized where possible.

### Technology roles

- **GSAP** — timeline/advanced motion where required
- **Motion** — component/page interaction animation
- **Lenis** — smooth scrolling behavior where used

---

## Responsive Design

The website is designed for modern responsive usage across desktop and mobile.

Important responsive areas include:

- Navigation
- Hero/editorial sections
- Product grids
- Product details
- Contact sections
- Legal/support pages
- Image-heavy content

### Verification priorities

- No horizontal overflow
- Readable typography at smaller widths
- Product images maintain useful cropping/aspect behavior
- CTAs remain reachable
- Motion does not create mobile performance issues

---

## Engineering Tooling

In addition to normal Next.js scripts, the repository includes Graphify-oriented helpers:

```bash
npm run graphify:install
npm run graphify:build
npm run graphify:update
npm run graphify:query
```

These commands support code-graph/project inspection workflows and are not part of the production runtime.

---

## Local Development

### Requirements

- Node.js compatible with Next.js 16
- npm or another compatible package manager
- Required Cloudinary/environment configuration for media features being tested

### Install

```bash
git clone https://github.com/Al-Baraka-EG1/baraka_client.git
cd baraka_client
npm install
```

### Development

```bash
npm run dev
```

---

## Environment Configuration

Environment requirements depend on the integrations currently enabled.

Cloudinary-related configuration may require values such as:

```env
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Exact variable names should be verified against the current source before setup.

### Environment rules

- Never commit real provider secrets.
- Keep server-only credentials out of client-visible variables.
- Use separate values for local/staging/production environments where applicable.

---

## Build and Verification

### Production build

```bash
npm run build
```

### Production start

```bash
npm run start
```

### Lint

```bash
npm run lint
```

### Recommended verification

```bash
npm run lint
npm run build
```

Before handoff/deployment verify:

- Homepage renders correctly.
- About content is accurate.
- Product listing/details work.
- Product imagery loads correctly.
- Contact form/inquiry flow behaves correctly.
- Privacy and Terms routes are reachable.
- Mobile layouts are stable.
- Motion remains performant.
- No Cloudinary/server secrets are exposed client-side.

---

## Engineering Conventions

1. Keep route files focused on page composition.
2. Keep reusable visual behavior in components/hooks/lib.
3. Keep business/product copy separated from low-level UI when practical.
4. Keep Cloudinary secrets server-side.
5. Use form schemas instead of ad-hoc validation chains.
6. Treat motion as progressive enhancement.
7. Verify responsive product imagery carefully.
8. Keep public business claims source-approved.
9. Keep the public corporate site separate from internal business systems.
10. Run lint/build checks before handoff.

---

## Documentation Relationship

The organization also contains:

`Al-Baraka-EG1/documentations`

That repository preserves:

- Legacy Al Baraka website reference material
- Partner/reference-site analysis
- Historical design/implementation specifications
- Migration/context documentation

The current `baraka_client` source is the technical source of truth when older planning documents differ from the implemented application.

---

## Scope Boundary

This repository covers only the **public corporate website**.

The broader Al Baraka internal business-management system is a separate product initiative and should keep separate:

- Repositories
- Architecture
- Authentication/roles
- Internal business workflows
- Documentation

Do not merge internal-system claims or unfinished functionality into this public website README.

---

## Project Status

The corporate website is an active company product and may continue to receive content, SEO, accessibility, performance, media, and business-facing improvements.

---

## License

This repository is proprietary to Al Baraka for Import & Export unless otherwise stated by the organization.

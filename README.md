# Al Baraka for Import & Export — Corporate Website

**The public-facing corporate and B2B product website for Al Baraka for Import & Export, an Egyptian company focused on fresh and frozen agricultural products and international trade support.**

This repository contains the company's modern web presence built with **Next.js 16, React 19, TypeScript, Tailwind CSS 4, Motion/GSAP, Cloudinary, React Hook Form and Zod**.

---

## Project Purpose

The website is designed to present Al Baraka professionally to international buyers and commercial partners such as:

- Importers
- Distributors
- Wholesalers
- Supermarkets
- Food trading companies
- Other B2B partners looking for Egyptian fresh and frozen produce

The product experience focuses on clear company positioning, product discovery, export-support messaging, trust, contact opportunities and international partnership context.

> **Scope note:** this repository contains the **public corporate website**. The broader internal Al Baraka business-management system is a separate initiative currently under development and should not be confused with this codebase.

## Core Website Areas

### Corporate Presentation

- Company overview and positioning
- Export-support value proposition
- Egyptian sourcing and international partnership messaging
- Commercial-partner presentation
- Structured company values and process content

### Product Discovery

- Product catalog
- Dedicated product detail pages
- Fresh and frozen product positioning
- Rich product imagery and media
- Calls to action focused on partnership and buyer inquiries

### Business & Support Pages

- About
- Products
- Contact
- Privacy
- Terms

## Product & Export Positioning

The website communicates Al Baraka's role as a supplier and export-support partner for fresh and frozen fruits and vegetables from Egypt.

Content in the application highlights areas such as:

- Product sourcing
- Fresh and frozen product supply
- Flexible packaging discussions
- Commercial documentation support
- Shipment coordination
- Buyer communication and follow-up
- International business relationships

The About experience also presents the company's commercial relationship with **Marianna in Poland** as part of its international partnership narrative.

## Technology Stack

### Core

- **Next.js 16**
- **React 19**
- **TypeScript**
- **App Router**

### Styling & UI

- **Tailwind CSS 4**
- **shadcn/ui / Radix UI**
- **Lucide React**
- **class-variance-authority**

### Motion & Interaction

- **GSAP**
- **Motion**
- **Lenis** for smooth-scrolling behavior where used

### Forms & Validation

- **React Hook Form**
- **Zod**

### Media

- **Cloudinary**
- **next-cloudinary**
- Next.js image optimization

## Application Structure

```text
src/
├── app/                 # Next.js routes and route-level application files
│   ├── about/
│   ├── contact/
│   ├── products/
│   ├── privacy/
│   ├── terms/
│   └── actions/
├── components/          # Shared and page-level UI components
├── constants/           # Content/configuration constants
├── hooks/               # Reusable React hooks
├── lib/                 # Shared libraries, images and animation helpers
├── providers/           # Application providers
├── types/               # TypeScript contracts
└── utils/               # Reusable utilities
```

Product UI is separated into dedicated page-level components, including the product listing and product-detail experiences.

## Design Direction

The interface uses an agricultural/export-oriented visual system built around:

- Warm cream and white surfaces
- Natural green tones
- Earth-inspired typography and accents
- Product-led imagery
- Editorial B2B storytelling
- Motion used to support hierarchy and polish rather than replace content

The goal is to make the company feel established, trustworthy and internationally ready while keeping product and partnership information easy to scan.

## Responsive & Interaction Considerations

The codebase is designed around modern responsive layouts and includes:

- Mobile and desktop page compositions
- Responsive product grids and content sections
- Optimized media presentation
- Reusable animation variants
- Interactive CTAs and navigation
- Progressive visual enhancement through Motion and GSAP

## Media Management

The project uses Cloudinary-related tooling for media workflows and centralizes reusable image/video references in the application rather than scattering asset URLs across page components.

A dedicated server action exists for Cloudinary-related behavior.

## Development

### Requirements

- Node.js compatible with the current Next.js toolchain
- npm, pnpm, yarn or Bun
- Required environment configuration for any Cloudinary-backed features

### Install

```bash
git clone https://github.com/Al-Baraka-EG1/baraka_client.git
cd baraka_client
npm install
```

### Start development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Start production build locally

```bash
npm run start
```

### Lint

```bash
npm run lint
```

## Engineering Approach

The project follows a component-oriented frontend structure with explicit separation between:

- Route-level pages
- Page-specific UI
- Reusable components
- Constants/content
- Hooks
- Shared libraries
- Utilities
- TypeScript contracts

Complex visual behavior is centralized through reusable animation helpers where possible, while product/company content remains separated from low-level UI implementation.

## Related Organization Work

The Al Baraka GitHub organization also contains a documentation repository used for company-site research, legacy-site analysis, partner reference material and implementation planning.

The organization is also being expanded to support the company's broader internal digital systems; those systems are intentionally treated as separate products from this public corporate website.

## Project Status

The corporate website is an active company product and may continue to receive content, SEO, performance, accessibility and business-facing improvements over time.

## License

This repository is proprietary to Al Baraka for Import & Export unless otherwise stated by the organization.

# 📁 Project Structure

## Overview

This project follows Next.js 16 best practices with a **`src/`** directory for better organization and separation of concerns.

```
arcin-it-web-portal-starter-frontend/
├── src/                        # Source code directory
│   ├── app/                    # Next.js App Router (pages & routing)
│   ├── components/             # React components
│   ├── data/                   # Static data & content
│   ├── hooks/                  # Custom React hooks
│   ├── types/                  # TypeScript type definitions
│   ├── utils/                  # Helper functions
│   ├── constants/              # Application constants
│   └── styles/                 # Global CSS styles
├── public/                     # Static assets (images, fonts, icons)
├── .next/                      # Next.js build output (auto-generated)
├── node_modules/               # Dependencies (auto-generated)
├── package.json                # Project dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
└── README.md                   # Project documentation
```

---

## 📂 Detailed Structure

### **`src/app/`** - Application Routes

```
app/
├── layout.tsx                  # Root layout with metadata
├── page.tsx                    # Root redirect page
├── not-found.tsx               # 404 page
├── favicon.ico                 # Site favicon
└── (arcinIT)/                  # Route group
    ├── layout.tsx              # Shared layout (Navbar + Footer)
    ├── page.tsx                # Redirect to /home
    ├── home/
    │   └── page.tsx            # Landing page
    ├── about-us/
    │   └── page.tsx            # About page
    ├── services/
    │   ├── page.tsx            # Services overview
    │   ├── banking-financial-services/
    │   ├── government-digital-services/
    │   ├── healthcare-education/
    │   ├── insurance-reinsurance/
    │   ├── logistics-transportation/
    │   ├── retail-e-commerce/
    │   └── startups-tech-innovators/
    ├── case-studies/
    │   ├── page.tsx            # Case studies list
    │   ├── claims-automation-platform/
    │   ├── drivemech/
    │   └── pets-care-training-app/
    ├── careers/
    │   └── page.tsx            # Careers page
    ├── contact-us/
    │   └── page.tsx            # Contact page
    └── support/
        └── page.tsx            # Support page
```

---

### **`src/components/`** - React Components

```
components/
├── Layout/                     # Layout components
│   ├── Navbar.tsx              # Main navigation
│   ├── Footer.tsx              # Site footer
│   └── Menu.tsx                # Mobile menu
│
├── ui/                         # Reusable UI components
│   ├── CustomButton.tsx              # CustomButton component
│   ├── Input.tsx               # Input component
│   ├── NavLink.tsx             # Navigation link
│   ├── Accordion.tsx           # Accordion component
│   ├── FilledTabs.tsx          # Tabs component
│   ├── Loader.tsx              # Loading spinner
│   └── ...
│
├── home/                       # Home page components
│   ├── HomeHeroNavbar.tsx      # Hero with navbar
│   ├── HomeStats.tsx           # Statistics section
│   ├── HomeAbout.tsx           # About section
│   ├── HomeServices.tsx        # Services section
│   ├── HomeProcess.tsx         # Process section
│   ├── HomeProjects.tsx        # Projects section
│   ├── HomeIndustries.tsx      # Industries section
│   └── HomeDigital.tsx         # CTA section
│
├── services/                   # Service page components
│   ├── EvenServiceCard.tsx     # Right-aligned card
│   ├── OddServiceCard.tsx      # Left-aligned card
│   ├── ServicesSection.tsx     # Services grid
│   ├── common/                 # Shared service components
│   │   ├── ServiceHero.tsx
│   │   ├── ServiceHeader.tsx
│   │   ├── ServiceDetails.tsx
│   │   ├── ServiceCard.tsx
│   │   └── IndustriesSection.tsx
│   ├── banking/                # Banking-specific
│   ├── government/             # Government-specific
│   ├── healthcare/             # Healthcare-specific
│   ├── insurance/              # Insurance-specific
│   ├── logistics/              # Logistics-specific
│   ├── retail/                 # Retail-specific
│   └── startups/               # Startups-specific
│
├── about-us/                   # About page components
│   ├── AboutMissionVision.tsx
│   ├── AboutSolutions.tsx
│   └── AboutValues.tsx
│
├── case-studies/               # Case study components
│   ├── CaseStudiesSection.tsx
│   └── CaseStudyCard.tsx
│
├── careers/                    # Career page components
│   ├── CareersBenefits.tsx
│   └── CareersPositions.tsx
│
├── contact/                    # Contact page components
│   ├── ContactForm.tsx
│   ├── ContactInfo.tsx
│   ├── ContactMap.tsx
│   └── ContactSection.tsx
│
├── support/                    # Support page components
│   ├── SupportHero.tsx
│   ├── SupportFAQ.tsx
│   └── HelpTopics.tsx
│
├── pages/                      # Generic page components
│   ├── PageHero.tsx
│   ├── PageSection.tsx
│   ├── SimplePage.tsx
│   ├── AnimatedCard.tsx
│   └── StatCard.tsx
│
└── animations/                 # Animation components
    └── SmoothLandingBox.tsx
```

---

### **`src/data/`** - Static Data

```
data/
└── services/                   # Service page data
    ├── index.ts                # Exports all services
    ├── banking-financial-services.ts
    ├── government-digital-services.ts
    ├── healthcare-education.ts
    ├── insurance-reinsurance.ts
    ├── logistics-transportation.ts
    ├── retail-e-commerce.ts
    └── startups-tech-innovators.ts
```

Each service data file exports:
- `overview` - Page introduction
- `services` - Array of service details
- `whyChoose` - Why choose section data
- `cta` - Call-to-action data
- `hero` - Hero section data

---

### **`src/hooks/`** - Custom React Hooks

```
hooks/
├── useEmbla.ts                 # Embla carousel hook
├── useLocalStorage.ts          # Local storage hook
├── useOutsideClick.ts          # Click outside detection
└── ToastManager.tsx            # Toast notifications
```

---

### **`src/types/`** - TypeScript Types

```
types/
├── services.ts                 # Service-related types
└── window.d.ts                 # Window object extensions
```

---

### **`src/utils/`** - Utility Functions

```
utils/
└── theme.ts                    # Theme configuration
```

---

### **`src/styles/`** - Global Styles

```
styles/
├── globals.css                 # Global styles & Tailwind
└── CustomButton.css                  # CustomButton-specific styles
```

---

### **`public/`** - Static Assets

```
public/
├── Arcin_logo_Name.png         # Main logo
├── Footer_Logo.png             # Footer logo
├── home-hero.png               # Hero background
├── home/                       # Home page images
├── services/                   # Service page images
│   ├── banking/
│   ├── government/
│   ├── healthcare/
│   ├── insurance/
│   ├── logistics/
│   ├── retail/
│   └── startups/
├── case-studies/               # Case study images
├── about-us/                   # About page images
├── stats/                      # Statistics icons
└── svgs/                       # SVG icons
```

---

## 🎯 Key Configuration Files

### **`tsconfig.json`**
- Path alias: `@/*` → `./src/*`
- Enables absolute imports from `src/`

### **`package.json`**
- Scripts: `dev`, `build`, `start`, `lint`
- Dependencies: Next.js, React, Tailwind, Framer Motion, etc.

### **`next.config.ts`**
- Next.js configuration
- Image optimization settings

---

## 🚀 Import Patterns

With the `@/*` alias configured, you can import from anywhere:

```typescript
// Components
import Navbar from '@/components/Layout/Navbar'
import { CustomButton } from '@/components/ui/CustomButton'

// Data
import bankingData from '@/data/services/banking-financial-services'

// Hooks
import { useLocalStorage } from '@/hooks/useLocalStorage'

// Types
import type { ServiceDetailsProps } from '@/types/services'

// Utils
import { theme } from '@/utils/theme'

// Styles
import '@/styles/globals.css'
```

---

## 📊 Component Organization Principles

1. **Feature-based folders** - Components grouped by feature/page
2. **Shared components** - Generic UI in `components/ui/`
3. **Layout components** - Navigation/footer in `components/Layout/`
4. **Index exports** - Each folder has `index.ts` for clean imports
5. **Colocation** - Related components stay together

---

## 🎨 Service Page Pattern

Each service page follows this structure:

```typescript
import { ServiceHero, ServiceDetails, ServiceHeader } from '@/components/services'
import serviceData from '@/data/services/[service-name]'

export default function ServicePage() {
  const { overview, services, whyChoose, cta, hero } = serviceData

  return (
    <div>
      <ServiceHero {...hero} />
      <ServiceHeader {...overview} />
      <ServiceDetails services={services} />
      <WhyChooseSection {...whyChoose} />
      <CTASection {...cta} />
    </div>
  )
}
```

---

## ✅ Benefits of `src/` Directory

1. **Clear separation** - Source code vs configuration files
2. **Better organization** - All code in one place
3. **Easier navigation** - Less clutter at root level
4. **Industry standard** - Follows Next.js best practices
5. **Scalability** - Easier to manage as project grows

---

## 🔄 Migration Notes

**What changed:**
- All source folders moved to `src/`
- `tsconfig.json` updated: `@/*` → `./src/*`
- `app/layout.tsx` imports updated to use `@/` alias
- Build verified and working ✅

**What stayed the same:**
- `public/` remains at root (Next.js requirement)
- Configuration files at root
- All imports using `@/` alias work unchanged

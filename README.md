# Arcin IT Web Portal

An official web portal for Arcin IT, trusted partner in technology and innovation. This application showcases Arcin IT's services, solutions, case studies, and company information.

## Tech Stack

-   **Framework:** [Next.js 16](https://nextjs.org/) (Turbopack)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
-   **UI Components:** [React 19](https://react.dev/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/) / [Phosphor React](https://phosphoricons.com/)

## Project Structure

This project follows the Next.js App Router structure:

-   `app/(arcinIT)`: Main route group containing the primary pages:
    -   `home`: Landing page
    -   `about-us`: Company information, mission, and vision
    -   `services`: Details about IT services offered
    -   `case-studies`: Success stories and project showcases
    -   `careers`: Job openings and culture
    -   `contact-us`: Contact forms and location info
    -   `support`: Customer support resources
-   `components`: Reusable UI components
    -   `components/ui`: Generic UI elements (Buttons, Cards, etc.)
    -   `components/Layout`: Layout components (Navbar, Footer, MobileMenu)
    -   `components/home`, `components/about-us`, etc.: Page-specific components
-   `utils`: Helper functions and theme configurations
-   `public`: Static assets (images, fonts, icons)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

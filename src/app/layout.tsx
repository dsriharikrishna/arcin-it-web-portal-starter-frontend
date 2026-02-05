import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/button.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: {
    default: "Arcin IT | Transforming Business with Intelligent Technology",
    template: "%s | Arcin IT",
  },
  description:
    "Arcin IT delivers end-to-end digital solutions, cloud infrastructure, and AI-driven insights to drive growth and efficiency for modern enterprises.",
  keywords: [
    "IT Services",
    "Digital Transformation",
    "Cloud Computing",
    "AI Solutions",
    "Software Development",
    "Enterprise IT",
    "Arcin IT",
  ],
  authors: [{ name: "Arcin IT" }],
  creator: "Arcin IT",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arcin-it.com",
    title: "Arcin IT | Transforming Business with Intelligent Technology",
    description:
      "Partner with Arcin IT for scalable digital solutions, mobile apps, and cloud infrastructure.",
    siteName: "Arcin IT",
    images: [
      {
        url: "/home-hero.png", // Fallback image, ideally an OG specific image
        width: 1200,
        height: 630,
        alt: "Arcin IT - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcin IT | Transforming Business with Intelligent Technology",
    description: "Enterprise IT, Cloud, and AI solutions for the future.",
    images: ["/home-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} font-sans antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}

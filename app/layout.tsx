import type { Metadata } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Altrubyte | AI-assisted coding workshops for mission-driven teams",
  description:
    "Altrubyte hosts free online workshops that help nonprofits, schools, clubs, and youth organizations turn manual workflows into useful AI-assisted tools.",
  metadataBase: new URL("https://altrubyte.org"),
  openGraph: {
    title: "Altrubyte",
    description:
      "Free AI-assisted coding workshops for nonprofit and student organization workflows.",
    type: "website",
    url: "https://altrubyte.org",
    images: [
      {
        url: "/images/workshop-hero.png",
        width: 1792,
        height: 1024,
        alt: "A small team learning AI-assisted coding around a laptop.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bebas_Neue, Inter, Manrope, Roboto } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

// Body and UI text (Inter Regular → Extra Bold in the file).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Footer, consent text and the "button" master (Light, Regular, Medium, Bold).
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

// Footer language switch only.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

// Stand-in for HOOKRIDE Regular until the licensed files are supplied (see PROGRESS.md, D2):
// caps-only and the closest width of the condensed Google faces (same line breaks on 3 of 4 headings).
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ness Pare-Brise | Réparation et remplacement de pare-brise partout en France",
  description:
    "Réparation et remplacement de pare-brise professionnels pour tous les véhicules, toutes les marques et tous les modèles. Service rapide. Installation experte. Où que vous ayez besoin de nous.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${roboto.variable} ${manrope.variable} ${bebasNeue.variable}`}>
      <body>
        <MotionProvider>
          <a
            href="#contenu"
            className="sr-only z-50 rounded-button bg-snow px-4 py-3 font-semibold text-brand focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
          >
            Aller au contenu
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}

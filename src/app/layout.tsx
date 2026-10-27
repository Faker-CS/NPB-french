import type { Metadata } from "next";
import { Anton, Inter, Manrope, Roboto } from "next/font/google";
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

// Stand-in for HOOKRIDE Regular until the licensed files are supplied (see PROGRESS.md).
const anton = Anton({
  variable: "--font-anton",
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
    <html lang="fr" className={`${inter.variable} ${roboto.variable} ${manrope.variable} ${anton.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

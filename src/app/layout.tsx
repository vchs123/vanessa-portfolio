import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import ScrollProgress from "@/components/ScrollProgress";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vanessa Chua — Portfolio",
  description: "Performance review and portfolio — Head of IT, Siddeley Group. Full-stack engineering and technical leadership across four subsidiaries.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <LanguageProvider>
          <ScrollProgress />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

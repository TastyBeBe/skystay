import type { Metadata } from "next";
import { Libre_Caslon_Display, Libre_Caslon_Text, Archivo } from "next/font/google";
import "./globals.css";

const caslonDisplay = Libre_Caslon_Display({
  variable: "--font-caslon-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const caslonText = Libre_Caslon_Text({
  variable: "--font-caslon-text",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tastybebe.github.io/skystay"),
  title: "Sky Stay Travel — one person decides the flight and the hotel",
  description:
    "A named travel concierge who reads the fare rules so you never open a booking site again. Paid by members only. No supplier commission.",
  openGraph: {
    title: "Sky Stay Travel",
    description:
      "A named travel concierge who reads the fare rules so you never open a booking site again. Paid by members only.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${caslonDisplay.variable} ${caslonText.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}

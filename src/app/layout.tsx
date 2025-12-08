import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Gamma",
  description: "Gamma — modern portfolio experience for creative marketing and photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bebas.variable} font-body bg-surface text-gray-100`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}


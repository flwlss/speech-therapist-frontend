import type { Metadata } from "next";
import { Onest, Literata } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Нестерчук София, медицинский логопед-афазиолог, Новосибирск",
  description: "Нестерчук София, медицинский логопед-афазиолог, Новосибирск",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${onest.variable} ${literata.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

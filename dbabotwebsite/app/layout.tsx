import type { Metadata } from "next";
import Image from "next/image"; // Importiere die Image-Komponente
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Discord Battle Arena",
  description: "Tritt in Battles an, sammle Punkte und steigere deinen Rang in einem dynamischen Ligasystem. Einfach über Discord!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex items-center p-4 border-b border-gray-700 bg-gray-900">
          {/* Hier das Logo hinzufügen */}
          <Image
            src="https://i.imgur.com/CClJjJa.png" // Dein Logo-Link
            alt="Discord Battle Arena Logo"
            width={80} 
            height={80} 
            className="rounded-full mr-4" // Abstand zum Text
          />
          <h1 className="text-3xl font-bold text-white">Discord Battle Arena</h1>
        </header>
        {children}
      </body>
    </html>
  );
}

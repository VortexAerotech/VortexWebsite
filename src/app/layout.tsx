import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vortex Aerotech",
  description: "Professionele dronespuitwerk en -strooiing vir plase in Limpopo, Noordwes en Gauteng.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="af"
      className={`${hankenGrotesk.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-surface">{children}</body>
    </html>
  );
}

import "./globals.css";
import { Inconsolata } from "next/font/google";
import type { Metadata } from "next";

import NavBar from "@/components/NavBar";

const inconsolata = Inconsolata({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Project",
  description: "A Next.js project with TypeScript and TailwindCSS.",
  keywords: "Next.js, Typescript, TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inconsolata.className}>
        <NavBar />

        <main className='max-w-3xl mx-auto py-10 px-5'>{children}</main>
      </body>
    </html>
  );
}

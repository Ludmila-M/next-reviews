import React, { ReactNode } from "react";
import type { Metadata } from 'next';
import Link from "next/link";
import NavBar from "@/app/components/NavBar";
import "./globals.css";
import { orbitron, robotoMono } from "./fonts";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: 'Indie Gamer',
    template: '%s | Indie Gamer',
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${orbitron.variable} ${robotoMono.variable}`}>
      <body className="bg-orange-50 flex flex-col min-h-screen px-4 py-2">
        <header>
          <NavBar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-center slate-500 text-xs text-orange-800 hover:underline">
          Game data and images courtesy of{" "}
          <a href="https://rawg.io" target="_blank">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}

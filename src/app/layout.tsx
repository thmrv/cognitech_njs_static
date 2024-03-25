import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./stylesheet.css"
import "./media.css"
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import React from "react";
import 'animate.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Когнитех - Системы и решения для продвинутой аналитики",
  description: "Системы и решения для продвинутой аналитики",
};

export default async function LocaleLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode;
  params: { lang: string | null };
}) {

  return (<Suspense fallback={<Loading />}>
    <html>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Unbounded:wght@200..900&display=swap" rel="stylesheet"></link>
      <body className="w-full h-full bg-white antialiased">
        {children}
      </body>
    </html>
  </Suspense>);
}
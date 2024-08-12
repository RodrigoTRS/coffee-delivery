import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";

import "./globals.css";


const font = Baloo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee Delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
          {children}
      </body>
    </html>
  );
}

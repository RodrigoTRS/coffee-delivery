"use client"

import { Header } from "@/components/header";
import { CartContextProvider } from "@/contexts/cart-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartContextProvider>
      <Header />
      <main className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full max-w-[1120px] px-12 py-16 gap-16">
          {children}
        </div>
      </main>
    </CartContextProvider>
  );
}

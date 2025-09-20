// import type { Metadata } from "next";

import { NavigationMenuDemo } from "@/components/navigation-menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full"
    >
      <header className="w-full flex items-center justify-center">
        <NavigationMenuDemo />
      </header>
      {children}
    </div>
  );
}

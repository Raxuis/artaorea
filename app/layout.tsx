import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artaorea",
  description: "Mon Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        {children}
      </body>
      <Toaster />
    </html>
  );
}

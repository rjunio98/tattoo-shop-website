import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tatto Shop",
  description: "Página Da Tatto Shop DO Sandro Luz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}

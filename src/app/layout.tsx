import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Assignment 6",
  description: "My Assignment 6 website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

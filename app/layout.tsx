import type { Metadata } from "next";
import "./globals.css";
import "./hero.css";

export const metadata: Metadata = {
  title: "Kamala Harris for Governor of Lincoln",
  description: "Justice. Opportunity. Leadership. Join Kamala Harris and help build a stronger Lincoln.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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

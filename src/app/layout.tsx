import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://unkey.dev"),
  title: "Open Source API Authentication",
  description: "Accelerate your API development",
  openGraph: {
    title: "Open Source API Authentication",
    description: "Accelerate your API development ",
    url: "https://unkey.dev",
    siteName: "unkey.dev",
    images: ["https://unkey.dev/images/landing/og.png"],
  },
  twitter: {
    title: "Unkey",
    card: "summary_large_image",
    images: ["https://unkey.dev/images/landing/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

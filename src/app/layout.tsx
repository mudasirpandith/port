import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://mudasirpandithlive.vercel.app/"),
  title: "Mudasir Pandith",
  description: "Full Stack Developer",
  openGraph: {
    title: "Mudasir Pandith",
    description: "Full Stack Developer",
    url: "https://mudasirpandithlive.vercel.app/",
    siteName: "unkey.dev",
    images: [
      "https://media.licdn.com/dms/image/D4D03AQHsaW5o5lzePg/profile-displayphoto-shrink_400_400/0/1687548042583?e=1713398400&v=beta&t=-ppZLAZWM6oUktsLsF9h7dQzubUP7yvPqS4EHoA-Mv8",
    ],
  },
  twitter: {
    title: "Unkey",
    card: "summary_large_image",
    images: [
      "https://media.licdn.com/dms/image/D4D03AQHsaW5o5lzePg/profile-displayphoto-shrink_400_400/0/1687548042583?e=1713398400&v=beta&t=-ppZLAZWM6oUktsLsF9h7dQzubUP7yvPqS4EHoA-Mv8",
    ],
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

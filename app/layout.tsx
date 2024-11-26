import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const bungeeSpice = localFont({
  src: [
    {
      path: "./fonts/BungeeSpice-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/BungeeSpice-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bungee-spice",
});

export const metadata: Metadata = {
  title: "$NBA",
  description: "Your hustle is your weapon against poverty. Let $NBA amplify your efforts and turn your dreams into reality.",
  icons: {
    icon: [
      {
        url: "./favicon.ico",
      },
    ],
    apple: [
      {
        url: "./apple-touch-icon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="./favicon.ico" />
      <link rel="apple-touch-icon" href="./favicon.ico" />
        <meta
          name="description"
          content="Never Broke again"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bungeeSpice.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}









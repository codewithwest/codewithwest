import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import ReduxProvider from "@/provider/reduxProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Codewithwest",
  description: "The only code you need for your next project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        {/* <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased `}
          > */}
        {children}
        {/* </body> */}
      </ReduxProvider>
    </html>
  );
}

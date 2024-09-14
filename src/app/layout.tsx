
"use client"
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "sonner";

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



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Create Next App</title>
      <meta name="title" content="animis" />
      <meta name="description" content="watch anime for free" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <Provider store={store}>
          <Toaster />
          {children}
        </Provider>
      </body>
    </html>
  )
}

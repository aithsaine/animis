
"use client"
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "sonner";
import NextTopLoader from 'nextjs-toploader';
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
      <link rel="icon" href={"./favicon.ico"} />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <Provider store={store}>
          <Toaster />
          <NextTopLoader color="rgb(134 25 143)" height={5} />

          {children}
        </Provider>
      </body>
    </html>
  )
}

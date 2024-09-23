
"use client"
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "sonner";
import NextTopLoader from 'nextjs-toploader';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href={"./favicon.ico"} />
      <title>Animis | watch animes & manga for free </title>

      <body
      >
        <Provider store={store}>
          <Toaster />
          <NextTopLoader color="orange" height={5} />

          {children}
        </Provider>
      </body>
    </html>
  )
}

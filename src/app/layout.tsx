import type { Metadata } from "next";
import { Roboto, Rubik, Shadows_Into_Light, Roboto_Slab, Pacifico } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic'
// const DynamicStoreWrapper = dynamic(() => import('./utils/context.tsx').then(mod => mod.StoreWrapper), {
//   ssr: false
// })
// const DynamicLocalStorageWorkerWrapper = dynamic(()=> import('./utils/localStorage.wrapper.tsx').then(mod => mod.LocalStorageWorkerWrapper), {
//   ssr: false
// })
import { StoreWrapper } from "./utils/context";
import { LocalStorageWorkerWrapper } from "./utils/localStorage.wrapper";
import ToTopButton from "./components/button/toTopButton";

const roboto = Roboto({ weight:["400", "500"],subsets:["cyrillic", 'cyrillic-ext'] });


export const metadata: Metadata = {
  title: "DarGusto",
  description: "Світ ідеальних смаків",
  icons: [
    { rel: "icon",type:"image/png",sizes:"48x48", url: "images/favicon/favicon.ico"},
    { rel: "icon",type:"image/png",sizes:"16x16", url: "images/favicon/favicon-16x16.png"},
    { rel: "icon",type:"image/png",sizes:"32x32", url: "images/favicon/favicon-32x32.png"},
    { rel: "icon",type:"image/png",sizes:"40x40", url: "images/favicon/favicon.png"},
    { rel: "icon",type:"image/png",sizes:"180x180", url: "images/favicon/apple-touch-icon.png"},
    { rel: "icon",type:"image/png",sizes:"192x192", url: "images/favicon/android-chrome-192x192.png"},
    { rel: "icon",type:"image/png",sizes:"512x512", url: "images/favicon/android-chrome-512x512.png"},
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
    >
      <body
      id="top" 
      className={
      roboto.className 
      }>
        <StoreWrapper>
        <LocalStorageWorkerWrapper>
        {children}
        </LocalStorageWorkerWrapper>
        </StoreWrapper> 
        <ToTopButton/>
      </body>
    </html>
  );
}

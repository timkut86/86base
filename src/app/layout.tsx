import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "86base - a timkut86's project",
  description: "",
};

import { Suspense } from "react";

import "./globals.css";
import "../css/body.css"
import "../css/fonts.css"
import "../css/404.css"
import "../css/banners.css"
import "../css/sections.css"
import "../css/buttons.css"
import "../css/footer.css"

import Nav from "@/functions/nav";
import Loading from "./loading";
import Footer from "@/functions/footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={``}
    >
      <body className="">
        <Nav/>
        <main>
          <Suspense fallback={<Loading/>}>
            {children}
          </Suspense>
        </main>
        <Footer/>
      </body>
    </html>
  );
}

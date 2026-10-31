import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "86base - a timkut86's project",
  description: "",
};

import "./globals.css";
import "../css/body.css"
import "../css/fonts.css"
import "../css/404.css"
import "../css/banners.css"
import "../css/sections.css"

import Nav from "@/functions/nav";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={``}
    >
      <body className="">
        <Nav/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

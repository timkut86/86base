import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Not found - 86base",
  description: "",
};

import Image from "next/image";

export default function Not_found() {
  return (<>
        <div className="e404">
            <h2 className="fw9">404</h2>
            <p className="fw5">Not found</p>
        </div>
  </>);
}

import { Card1 } from "@/functions/cards";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services - 86base",
  description: "",
};
export default function Services() {
    return (<>
        <main>
            <h2 className="fw5 title">Services</h2>
            <div className="section1 home_services">
                <div className="cards1">
                    <div className="card1 home_service">{<Card1 title="86BID" text="Create an unique ID and get the SET and Room's feauters." btn_text="More" img="/86BID_background.png"></Card1>}</div>
                    <div className="card1 home_service">{<Card1 title="The SET" text="Buy high-quality products by oficial manufacturers." btn_text="More" img="/SET_background.png"></Card1>}</div>
                    <div className="card1 home_service">{<Card1 title="Room" text="Share your moments. (coming soon)" btn_text="More" img="/Room_background.png"></Card1>}</div>
                </div>
            </div>
        </main>
    </>);
}
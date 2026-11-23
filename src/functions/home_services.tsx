import { Card1 } from "./cards"
import Link from "next/link"
export default function Home_services(){
    return(<>
        <div className="section1 home_services">
            <h2 className="fw5">Services</h2>
            <div className="cards1">
                <div className="card1 home_service">{<Card1 title="86BID" text="Create an unique ID and get the SET and Room's feauters." btn_text="More" img="/86BID_background.png" l="account"></Card1>}</div>
                <div className="card1 home_service">{<Card1 title="The SET" text="Buy high-quality products by oficial manufacturers." btn_text="More" img="/SET_background.png" l="SET"></Card1>}</div>
                <div className="card1 home_service">{<Card1 title="Room" text="Share your moments. (coming soon)" btn_text="More" img="/Room_background.png" l="Room"></Card1>}</div>
            </div>
            <Link className="btn fw5" href="services">More</Link>
        </div>
    </>)
}
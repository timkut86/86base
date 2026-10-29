import "../css/nav.css"
import Image from "next/image"
import Link from "next/link"

export default function Nav(){
    return(<>
        <div className="nav">
            <Link href="/" className="nav_logo"><img src="/logos/86base_logo1.svg"/></Link>
            <div className="nav_buttons">
                <Link href="/about" className="btn fw5">About</Link>
                <Link href="/services" className="btn fw5">Servises</Link>
                <Link href="/support" className="btn fw5">Support</Link>     
            </div>
            <Link href="/account" className="nav_ava ava"><img src="/icons/profile_default.png" alt="avatar"/></Link>
        </div>
    </>)
}
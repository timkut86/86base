import "../css/nav.css"
import Image from "next/image"
import Link from "next/link"

export default function Nav(){
    return(<>
        <nav>
            <div className="nav">
                <Link href="/" className="nav_logo"><img src="/logos/86base_logo1.svg"/></Link>
                <div className="nav_buttons">
                    <Link href="/news" className="nav-btn fw5">News</Link>
                    <Link href="/services" className="nav-btn fw5">Servises</Link>
                    <Link href="/about" className="nav-btn fw5">About</Link>     
                </div>
                <Link href="/account" className="nav_ava ava"><img src="/icons/profile_default.png" alt="avatar"/></Link>
            </div>
        </nav>
    </>)
}
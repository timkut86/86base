import Link from "next/link"
export default function Footer(){
    return(<>
        <div className="line"></div>
        <footer>
            <div className="footer_part_1">
                <img src="/logos/logo2.png"/>
                <p>@2027 timkut86<br></br>All rights reserved</p>
            </div>
            <div className="footer_part_2">
                <Link className="btn "href="about">About</Link>
                <Link className="btn "href="terms">Terms</Link>
                <Link className="btn "href="privacy">Privacy</Link>
                <Link className="btn "href="news">News</Link>
                <Link className="btn "href="services">Services</Link>
                <Link className="btn "href="account">Your ID</Link>
                <Link className="btn "href="settings">Settings</Link>
                <Link className="btn "href="support">Support</Link>
            </div>
        </footer>
    </>)
}
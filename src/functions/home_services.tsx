import Link from "next/link"
export default function Home_services(){
    return(<>
        <div className="section1 home_services">
            <h2 className="fw5">Services</h2>
            <div className="cards1">
                <div className="card1 home_service"></div>
                <div className="card1 home_service"></div>
                <div className="card1 home_service"></div>
            </div>
            <Link className="btn fw5" href="services">More</Link>
        </div>
    </>)
}
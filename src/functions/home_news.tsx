import Link from "next/link"
export default function Home_news(){
    return(<>
        <div className="section1 home_news">
            <h2 className="fw5">News</h2>
            <div className="cards1">
                <div className="card1 home_news"></div>
                <div className="card1 home_news"></div>
                <div className="card1 home_news"></div>
            </div>
            <Link className="btn fw5" href="news">More</Link>
        </div>
    </>)
}
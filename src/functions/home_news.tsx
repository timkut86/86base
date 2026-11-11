import Link from "next/link"
import { Card1 } from "./cards"
export default function Home_news(){
    return(<>
        <div className="section1 home_news">
            <h2 className="fw5">News</h2>
            <div className="cards1">
                <div className="card1 home_news">{<Card1 title="Welcome to 86base!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat tristique feugiat. Nunc ultrices... " btn_text="More" img="/default_background.png"></Card1>}</div>
                <div className="card1 home_news">{<Card1 title="Welcome to 86base!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat tristique feugiat. Nunc ultrices... " btn_text="More" img="/default_background.png"></Card1>}</div>
                <div className="card1 home_news">{<Card1 title="Welcome to 86base!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat tristique feugiat. Nunc ultrices... " btn_text="More" img="/default_background.png"></Card1>}</div>
            </div>
            <Link className="btn fw5" href="news">More</Link>
        </div>
    </>)
}
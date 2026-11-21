import { pool } from "../../lib/db";
import NewsIF from "@/entities/news";
import Link from "next/link"
import { Card1 } from "./cards"
export default async function Home_news(){
    /*'use cache'
    const result = await pool.query<NewsIF>(
        'SELECT * FROM _86base_news ORDER BY id'
    );
    const news = result.rows;
    return(<>
        <div className="section1 home_news">
            <h2 className="fw5">News</h2>
            <div className="cards1">
                {news.slice(0, 3).map((nn) => (
                    <div className="card1 home_news" key={nn.id}>{<Card1 title={nn.title} text={nn.text} btn_text="More" img="/"></Card1>}</div>
                ))}
            </div>
            <Link className="btn fw5" href="news">More</Link>
        </div>
    </>)*/
}
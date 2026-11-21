import { pool } from "../../../lib/db";
import NewsIF from "@/entities/news";
import { Card1 } from "@/functions/cards";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "News - 86base",
  description: "",
};
export default async function News() {
    /*'use cache'
    const result = await pool.query<NewsIF>(
        'SELECT * FROM _86base_news ORDER BY id'
    );
    const news = result.rows;
    return (<>
        <main>
            <h2 className="fw5 title">News</h2>
            <div className="section1 home_news">
                <div className="cards1">
                    {news.map((nn) => (
                        <div className="card1 home_news" key={nn.id}>{<Card1 title={nn.title} text={nn.text} btn_text="More" img="/"></Card1>}</div>
                    ))}
                </div>
            </div>
        </main>
    </>);*/
}
import { Card1 } from "@/functions/cards";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "News - 86base",
  description: "",
};
export default function News() {
    return (<>
        <main>
            <h2 className="fw5 title">News</h2>
            <div className="section1 home_news">
                <div className="cards1">
                    <div className="card1 home_news">{<Card1 title="Welcome to 86base!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat tristique feugiat. Nunc ultrices nisl et sapien elementum, in iaculis. " btn_text="more" img="/default_background.png"></Card1>}</div>
                    <div className="card1 home_news">{<Card1 title="Welcome to 86base!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat tristique feugiat. Nunc ultrices nisl et sapien elementum, in iaculis. " btn_text="more" img="/default_background.png"></Card1>}</div>
                    <div className="card1 home_news">{<Card1 title="Welcome to 86base!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat tristique feugiat. Nunc ultrices nisl et sapien elementum, in iaculis. " btn_text="more" img="/default_background.png"></Card1>}</div>
                    <div className="card1 home_news">{<Card1 title="Welcome to 86base!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat tristique feugiat. Nunc ultrices nisl et sapien elementum, in iaculis. " btn_text="more" img="/default_background.png"></Card1>}</div>
                    <div className="card1 home_news">{<Card1 title="Welcome to 86base!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat tristique feugiat. Nunc ultrices nisl et sapien elementum, in iaculis. " btn_text="more" img="/default_background.png"></Card1>}</div>
                    <div className="card1 home_news">{<Card1 title="Welcome to 86base!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat tristique feugiat. Nunc ultrices nisl et sapien elementum, in iaculis. " btn_text="more" img="/default_background.png"></Card1>}</div>
                    <div className="card1 home_news">{<Card1 title="Welcome to 86base!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat tristique feugiat. Nunc ultrices nisl et sapien elementum, in iaculis. " btn_text="more" img="/default_background.png"></Card1>}</div>
                    <div className="card1 home_news">{<Card1 title="Welcome to 86base!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat tristique feugiat. Nunc ultrices nisl et sapien elementum, in iaculis. " btn_text="more" img="/default_background.png"></Card1>}</div>
                    <div className="card1 home_news">{<Card1 title="Welcome to 86base!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat tristique feugiat. Nunc ultrices nisl et sapien elementum, in iaculis. " btn_text="more" img="/default_background.png"></Card1>}</div>
                </div>
            </div>
        </main>
    </>);
}
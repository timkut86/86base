import Image from "next/image";
import Banners from "@/functions/banners";
import Home_services from "@/functions/home_services";
import Home_news from "@/functions/home_news";

export default function Home() {
  return (<>
    <Banners/>
    <Home_services/>
    <Home_news/>
  </>);
}

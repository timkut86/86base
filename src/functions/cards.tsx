interface CardProps {
    title: string,
    text: string,
    btn_text: string
    img: string
    l: string
}
import Link from "next/link"

export function Card1({title, text, btn_text, img, l = ""}: CardProps){
    return(<>
        <img src={img}/>
        <h3 className="fw5">{title}</h3>
        <p className="fw4">{text}</p>
        <Link className="fw5 btn" href={l}>{btn_text}</Link>
    </>)
}
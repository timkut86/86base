interface CardProps {
    title: string,
    text: string,
    btn_text: string
    img: string
}

export function Card1({title, text, btn_text, img}: CardProps){
    return(<>
        <img src={img}/>
        <h3 className="fw5">{title}</h3>
        <p className="fw4">{text}</p>
        <button className="fw5">{btn_text}</button>
    </>)
}
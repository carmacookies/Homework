import react from "react"

interface cardProps{
    title:string
    subtitle:string
    img:string
}
const Card = (props:cardProps) => {
    const cardTitle = props.title
    const cardSubTitle = props.subtitle
    const img = props.img
    return (
        <div className="newCard">
            <h2>{cardTitle}</h2>
            <h4>{cardSubTitle}</h4>
            <img src={img} alt="" />
        </div>
    )
}

export default Card
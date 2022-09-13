import react from "react"

interface cardProps{
    title:string
    subtitle:string
    img:string
    
}



const Card = ({title, subtitle, img}:cardProps) => {
    return (
        <div className="newCard">
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <img src={img} alt="" />
        </div>
    )
}

export default Card
import React from "react"
import "./Card.css"

function Card(props) {
  return (
    <div className="Card" onClick={() => window.open(props.url, "_blank")}>
      <h3>{props.title}</h3>
      <img src={props.Image} />
    </div>
  )
}

export default Card

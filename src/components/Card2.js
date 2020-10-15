import React from "react"
import handz1 from "../images/hand1.png"
import classNames from "classnames"

import "./Card2.css"
import arrowIcon from "../images/arrow.svg"

function Card2(props) {
  const cardClass = classNames("uiux-pack", "card-dev")
  return (
    <div className={cardClass}>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>

      <img className="finger" src={props.image} />
    </div>
  )
}

export default Card2

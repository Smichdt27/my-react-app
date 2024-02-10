import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='cards'>
        <div className='cardsbody'>
            {/* <h3>{props.title}</h3><br />
            <h4>{props.text}</h4><br /><br /><br /><br /><br />
            <button type="button">Purchase</button> */}
            <img src="" alt="Alt" className="cardimage" />
            <h3>{props.cardtitle}</h3>
            <p className="cardpara">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="cardbutton">{props.buttoncontent}</button>
        </div>
    </div>
  )
}

export default Card
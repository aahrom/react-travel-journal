import React from "react"
import {PositionIcon} from "../Icons"

export default function Card(props){
    console.log(props);
    return(
    <div className="card-container">        
        <div className="card">
            <img className="card--image" src={props.item.imageUrl}></img>
            <div className="card--content">
                <div className="card--location">
                <span>
                    <PositionIcon /><p>{props.item.location}</p>
                </span>
                <a className="card--location--link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.item.title}</h1>
                <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>

    </div>

    
    )
}
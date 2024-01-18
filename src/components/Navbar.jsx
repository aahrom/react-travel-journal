import React from "react"
import icon from "../assets/icon.png"

export default function Navbar(){
    return(
        <nav className="navbar">
            <img className="icon--image" src={icon} alt="website icon"></img>
            <h1 className="icon--title">my travel journal.</h1>
        </nav>
    )
}
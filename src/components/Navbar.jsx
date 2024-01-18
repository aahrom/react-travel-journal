import React from "react"
import {GlobeIcon} from "../Icons"

export default function Navbar(){
    return(
        <nav className="navbar">
            <GlobeIcon />
            <h1 className="icon--title">my travel journal.</h1>
        </nav>
    )
}
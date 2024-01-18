import React from "react"
import './App.css'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./Data"

function App() {
  
  const cards = data.map(item => {
    return (
      <>
      <Card 
          key={item.id}
          item={item}
      />
      </>
    )
  })

  return (
    <div>
      <Navbar />
      <div className="card-list">
      {cards}
      </div>
    </div>
  )
}

export default App

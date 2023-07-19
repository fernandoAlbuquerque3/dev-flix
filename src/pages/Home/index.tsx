import { useState } from "react"
import Header from "../../components/Header"
import "./home.css"
import Input from "../../components/Input"
function Home() {
   return (
      <div className="container">
         <Header />
         <p className="search-film">Pesquisar Filme:</p>
         <Input />
         <div className="lighbar-container">
            <div className="lighbar-1"></div>
            <h2 className="tedencias">Tedencias</h2>
            <div className="lighbar-2"></div>
         </div>
      </div>
   )
}

export default Home

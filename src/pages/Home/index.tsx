import { useState, useEffect } from "react"
import apiServices from "../../services/apiService"
import "./home.css"

import Header from "../../components/Header"
import Input from "../../components/Input"
import ComponentCard from "../../components/ComponentCard"

interface ApiProps {
   id: number
   title: string
   poster_path: any
   release_date: Date
}

function Home() {
   const [filmes, setFilmes] = useState<ApiProps[]>([])

   useEffect(() => {
      async function loadFilms() {
         const response = await apiServices.get("movie/now_playing", {
            params: {
               api_key: "207e66fa0b6dfc13b6afd0807bfb6ccc",
               language: "pt-BR",
               page: 1,
            },
         })
         setFilmes(response.data.results.slice(0, 10))
      }
      loadFilms()
   }, [])

   return (
      <div className="container">
         <Header />
         <p className="search-film">Pesquisar Filme:</p>
         <Input />
         <div className="lighbar-container">
            <div className="lighbar-1" />
            <h3 className="tedencias">Tendências Hoje</h3>
            <div className="lighbar-2" />
         </div>

         <div className="list-films-container">
            {filmes.map((filme) => (
               <ComponentCard filme={filme} />
            ))}
         </div>
      </div>
   )
}

export default Home

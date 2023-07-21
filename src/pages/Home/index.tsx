import { useState, useEffect } from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import apiServices from "../../services/apiService"
import "./home.css"

import Header from "../../components/Header"
import Input from "../../components/Input"

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
            <h2 className="tedencias">Tedencias</h2>
            <div className="lighbar-2" />
         </div>

         <div className="list-films">
            {filmes.map((filme) => (
               <article key={filme.id}>
                  <img
                     src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                     alt={filme.title}
                  />
                  <p>{filme.title}</p>
                  <div className="date-heart">
                     <span className="date-poster">
                        {format(
                           new Date(filme.release_date),
                           "d 'de' MMMM 'de' yyyy",
                           {
                              locale: ptBR,
                           }
                        )}
                     </span>
                  </div>
               </article>
            ))}
         </div>
      </div>
   )
}

export default Home

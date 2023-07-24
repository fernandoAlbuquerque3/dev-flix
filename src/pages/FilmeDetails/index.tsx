import { useEffect, useState } from "react"
import apiServices from "../../services/apiService"
import { useParams } from "react-router-dom"
import "./filmDetails.css"
interface ApiProps {
   id: number
   title: string
   poster_path: any
   backdrop_path: any
   release_date: Date
   overview: string
   vote_average: number
}

function FilmDetails() {
   const [filme, setFilme] = useState<ApiProps | null>(null)

   const { id } = useParams()

   useEffect(() => {
      async function loadFilme() {
         await apiServices
            .get(`/movie/${id}`, {
               params: {
                  api_key: "207e66fa0b6dfc13b6afd0807bfb6ccc",
                  language: "pt-BR",
               },
            })
            .then((response) => {
               setFilme(response.data)
               console.log(response.data)
            })
            .catch(() => {
               console.log("filme não encontrado")
               return
            })
      }
      loadFilme()
   }, [])

   return (
      <div className="film-details-container">
         <h1 className="film-details-title">{filme?.title}</h1>
         <img
            className="backdrop-path"
            src={`https://image.tmdb.org/t/p/original/${filme?.backdrop_path}`}
            alt={filme?.title}
         />
         <h2 className="sinopse-film">Sinopse:</h2>
         <span className="film-overview">{filme?.overview}</span>
         <strong className="vote_average">
            Avaliação: {filme?.vote_average.toFixed(1)} / 10
         </strong>
         <div className="buttons-container">
            <button>Ver trailer</button>
            <button>Salvar</button>
         </div>
      </div>
   )
}

export default FilmDetails

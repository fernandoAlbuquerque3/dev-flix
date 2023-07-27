import { useEffect, useState } from "react"
import apiServices from "../../services/apiService"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
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

   function salvarFilme() {
      const minhaLista: any = localStorage.getItem("@devflix")
      let filmesSalvos = JSON.parse(minhaLista) || []

      const hasFilme = filmesSalvos.some(
         (filmesSalvo: any) => filmesSalvo.id === filme?.id
      )

      if (hasFilme) {
         toast.error("Esse filme já existe na sua lista", {
            position: "bottom-center",
         })
         return
      }

      filmesSalvos.push(filme)
      localStorage.setItem("@devflix", JSON.stringify(filmesSalvos))
      toast.success("Filme adicionado com sucesso.", {
         position: "bottom-center",
      })
   }
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
            <button>
               <a
                  target="blank"
                  rel="external"
                  href={`https://youtube.com/results?search_query=${filme?.title} Trailer`}
               >
                  Ver trailer
               </a>
            </button>
            <button onClick={salvarFilme}>Salvar</button>
         </div>
      </div>
   )
}

export default FilmDetails

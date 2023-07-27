import { useEffect, useState } from "react"
import { ApiProps } from "../Home"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import "./saved-films.css"

import MovieSavedCard from "../../components/MovieSavedCard"

function SavedFilms() {
   const [filmes, setFilmes] = useState<ApiProps[]>([])

   function filmeRemove(id: any) {
      const filterRemove = filmes.filter((item) => {
         return item.id !== id
      })
      setFilmes(filterRemove)
      localStorage.setItem("@devflix", JSON.stringify(filterRemove))
      toast.success("Filme removido com sucesso!", {
         position: "bottom-center",
      })
   }

   useEffect(() => {
      const minhaLista: any = localStorage.getItem("@devflix")
      setFilmes(JSON.parse(minhaLista) || [])
   }, [])

   return (
      <div className="saved-container">
         <h1 className="my-films-text">Meus Filmes</h1>

         {filmes.length === 0 && (
            <div className="no-have-films-container">
               <span className="no-have-films-text">
                  Você não possui nenhum filme salvo 😥
               </span>
               <Link className="add-film" to={"/"}>
                  Adicionar Filme
               </Link>
            </div>
         )}
         <ul>
            {filmes.map((filme) => {
               return <MovieSavedCard filme={filme} filmeRemove={filmeRemove} />
            })}
         </ul>
      </div>
   )
}

export default SavedFilms

import { useEffect, useState } from "react"
import { ApiProps } from "../Home"
import { Link } from "react-router-dom"
import "./saved-films.css"
import { toast } from "react-toastify"
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
         <h1>Meus Filmes</h1>

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
               return (
                  <div className="filme-saved-container">
                     <img
                        className="my-films-image"
                        src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                        alt={filme.title}
                     />
                     <span className="filme-title">{filme.title}</span>
                     <div className="buttons-saved-container">
                        <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                        <button
                           onClick={() => filmeRemove(filme.id)}
                           className="remove-film"
                        >
                           Excluir
                        </button>
                     </div>
                  </div>
               )
            })}
         </ul>
      </div>
   )
}

export default SavedFilms

import { Link } from "react-router-dom"
import "./movieSavedCard.css"

function MovieSavedCard({ filme, filmeRemove }: any) {
   return (
      <div className="filme-saved-container">
         <img
            className="my-films-image"
            src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
            alt={filme.title}
         />
         <span className="filme-title">{filme.title}</span>
         <div className="buttons-saved-container">
            <Link className="see-film-details" to={`/filme/${filme.id}`}>
               Ver detalhes
            </Link>
            <button
               onClick={() => filmeRemove(filme.id)}
               className="remove-film"
            >
               Excluir
            </button>
         </div>
      </div>
   )
}

export default MovieSavedCard

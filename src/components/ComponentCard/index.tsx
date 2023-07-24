import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import "./componentCard.css"
import { Link } from "react-router-dom"

function ComponentCard({ filme }: any) {
   return (
      <div className="list-films">
         <article>
            <Link className="custom-link" to={`/filme/${filme.id}`}>
            <img
               src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
               alt={filme.title}
            />
            </Link>
            <p className="filme-title">{filme.title}</p>

            <span className="date-poster">
               {format(new Date(filme.release_date), "d 'de' MMMM 'de' yyyy", {
                  locale: ptBR,
               })}
            </span>
         </article>
      </div>
   )
}

export default ComponentCard

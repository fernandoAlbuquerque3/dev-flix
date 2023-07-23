import { Heart } from "@phosphor-icons/react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import "./componentCard.css"

function ComponentCard({ filme }: any) {
   return (
      <div className="list-films">
         <article>
            <img
               src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
               alt={filme.title}
            />
            <p className="filme-title">{filme.title}</p>
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
               <Heart size={25} color="#717171" />
            </div>
         </article>
      </div>
   )
}

export default ComponentCard

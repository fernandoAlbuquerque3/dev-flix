import { Link } from "react-router-dom"
import "./header.css"

function Header() {
   return (
      <header>
         <Link to={"/"}>
            <h1 className="title-cine-dev">CineDev</h1>
         </Link>

         <Link to={"/favoritos"}>
            <p className="login-button">Meus filmes</p>
         </Link>
      </header>
   )
}

export default Header

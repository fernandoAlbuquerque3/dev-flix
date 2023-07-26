import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import FilmDetails from "./pages/FilmeDetails"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SavedFilms from "./pages/SavedFilms"

const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filme/:id" element={<FilmDetails />} />
            <Route path="/favoritos" element={<SavedFilms />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   )
}

export default AppRoutes

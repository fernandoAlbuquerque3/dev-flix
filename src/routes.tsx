import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import FilmDetails from "./pages/FilmeDetails"
import Footer from "./components/Footer"

const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filme/:id" element={<FilmDetails />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   )
}

export default AppRoutes

import axios from "axios"
//BASE DA URL : https://api.themoviedb.org/3

//URL DA API : /movie/now_playing?api_key=207e66fa0b6dfc13b6afd0807bfb6ccc&language=pt-BR

const apiServices = axios.create({
   baseURL: "https://api.themoviedb.org/3/",
})

export default apiServices

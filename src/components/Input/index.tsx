import "./input.css"

function Input() {
   return (
      <div className="container-input">
         <input
            className="input-search"
            type="text"
            placeholder="Ex: Homem-Aranha"
         />
         <button className="search-button">
            Pesquisar
         </button>
      </div>
   )
}

export default Input

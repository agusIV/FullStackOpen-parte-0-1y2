const Filtro = ({buscar}) => {
   return(
      <>
         <h2>agenda</h2>
         buscar: <input
            onChange = {buscar}
         />
      </>
   )
}

export default Filtro
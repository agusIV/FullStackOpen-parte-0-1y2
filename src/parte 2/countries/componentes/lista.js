const Lista = ({lista, boton}) => {
   return (
      <div>
         <ul>
            {lista.map(pais =>
               <Listar key={pais.name.common} pais={pais} boton={boton}/>
            )}
         </ul>
      </div>
   )
}

const Listar = ({pais, boton}) => {
   const confir = () =>{
      boton(pais)
   }
   return (
      <li>
         {pais.name.common} 
         <button onClick={confir}>mostrar</button>
      </li>
   )
}

export default Lista
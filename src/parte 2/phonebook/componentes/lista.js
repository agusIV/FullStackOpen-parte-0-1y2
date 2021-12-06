import Filtro from "./filtro"
import Listar from "./listar"

const Lista = ({lista, buscar, borrar}) => {
   return (
      <>
         <Filtro buscar={buscar}/>
         <ul>
            <li>
               {lista.map(pers => (
                  <Listar key={pers.id} info={pers} borrar={borrar}/>
               ))}
            </li>
         </ul>
      </>
   )
} 

export default Lista
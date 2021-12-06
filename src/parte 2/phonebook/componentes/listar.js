const Listar = ({info, borrar}) => {
   const confirmar = () => {
      if (window.confirm("desea eliminar esta persona"))
         borrar(info.id)
   }
   return(
      <> 
         <p>{info.nombre} {info.numero} <button onClick={confirmar}>borrar</button></p>
      </>
   )
}

export default Listar
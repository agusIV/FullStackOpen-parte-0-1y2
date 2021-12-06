const Notificacion = ({texto, color}) => {
   if (!texto) return null
   const estilo = {
      color: color,
      fontSize: 20,
      background: "grey",
      borderStyle: "solid",
      borderRadius: 5,
      padding: 10
   }
   return (
      <div style={estilo}>
         {texto}
      </div>
   )
}

export default Notificacion
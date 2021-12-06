// 2.8
const Formulario = ({agregarPersona, cambiarNombre, cambiarNumero, nuevoNombre, nuevoNumero}) => {
    return (
       <>
          <form onSubmit={agregarPersona}> 
          <div>
             name: <input 
             value = {nuevoNombre}
             onChange = {cambiarNombre}
             />
          </div>
          <div>
             numero: <input
             value = {nuevoNumero}
             onChange = {cambiarNumero}
             />
          </div>
          <div>
             <button type="submit">agregar</button>
          </div>
          </form>
       </>
    )
 }

 export default Formulario
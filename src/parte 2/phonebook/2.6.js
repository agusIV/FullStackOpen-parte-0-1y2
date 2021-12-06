// 2.6
import React, { useEffect, useState } from 'react'
// 2.10
import Formulario from "./componentes/formulario"
import Lista from "./componentes/lista"
import Notificacion from "./componentes/notificacion"
//----------
// 2.16
import servicios from "./servicios/solicitudes"
//---------
const App = () => {
   const [personas, setPersonas] = useState() 
   const [lista, setLista] = useState([])
   const [nuevoNombre, setNuevoNombre] = useState('')
   const [nuevoNumero, setNuevoNumero] = useState("")
   const [texto, setTexto] = useState("")
   const [color, setColor] = useState("")

   const notificacion = (tex, col) => {
      setTexto(tex)
      setColor(col)
      setTimeout(() => {
         setTexto("")
      }, 5000)
   }

   // 2.11
   useEffect(() => {
      // eslint-disable-next-line
      servicios
         // eslint-disable-next-line
         .getTodo()
         // eslint-disable-next-line
         .then(respuesta => {
            // eslint-disable-next-line
            setPersonas(respuesta)
            // eslint-disable-next-line
            setLista(respuesta)
            // eslint-disable-next-line
         // eslint-disable-next-line
         }) 
      // eslint-disable-next-line
   }, [])
   //------------
   // 2.9
   const buscar = (valor) => {
      const lista = personas.filter(persona => 
         persona.nombre.toLowerCase().indexOf(valor.target.value.toLowerCase()) !== -1
      );
      setLista(lista)
   }
   //----------
   const agregarPersona = (event) => {
      event.preventDefault()
      const nueva = {
         nombre : nuevoNombre,
         // 2.8
         numero: nuevoNumero
         //------------
      }
      // 2.7
      const verif = personas.find(per => per.nombre.toLowerCase().indexOf(nueva.nombre.toLocaleLowerCase()) !== -1)
      if(verif){
         // 2.18
         if(window.confirm(`${nueva.nombre} ya se ha registrado, ¿desea actualizar sus datos?`))
            actualizar(verif.id, nueva)
         //--------
      //--------
      }else{
         // 2.15
         servicios
            .agregar(nueva)
            .then(respuesta => {
               setPersonas(personas.concat(respuesta))
               setLista(lista.concat(respuesta))
               setNuevoNombre("")
               setNuevoNumero("")
               notificacion(`el personaje ${respuesta.nombre} fue agregado con exito`, "green")
            })
            .catch(error => {
               notificacion(`ocurrio un error al agregar el personaje ${nueva.nombre}`, "red")
            })
         //-------
      }
   }

   const actualizar = (id, nueva) => {
      servicios
         .actualizar(id, nueva)
         .then(respuesta => {
            setPersonas(personas.map(persona => persona.id === id ? respuesta : persona)) 
            setLista(lista.map(persona => persona.id === id ? respuesta : persona))          
            setNuevoNombre("")
            setNuevoNumero("")
            notificacion(`el personaje ${respuesta.nombre} fue actualizado con exito`, "green")
         })
         .catch(error => {
            setPersonas(personas.filter(n => n.id !== id))
            setLista(lista.filter(n => n.id !== id))
            notificacion(`ocurrio un error al actualizar el personaje ${nueva.nombre}`, "red")
         })
   }
   // 2.17
   const borrar = (id) => {
      servicios
         .borrar(id)
         .then(respuesta => {
            setPersonas(personas.filter(p => p.id !== id))
            setLista(lista.filter(p => p.id !== id))
            notificacion(`el personaje fue borrado con exito`, "green")
         })
         .catch(error => {
            notificacion(`no se pudo borrar el personaje`, "red")
         })
   } 
   //----------
   const cambiarNombre = (event) => {
      console.log(event.target.value);
      setNuevoNombre(event.target.value)
   }

   const cambiarNumero = (event) => {
      console.log(event.target.value);
      setNuevoNumero(event.target.value)
   }

   return (
      <div>
         <Formulario agregarPersona={agregarPersona} cambiarNombre={cambiarNombre} cambiarNumero={cambiarNumero}
                     nuevoNombre={nuevoNombre} nuevoNumero={nuevoNumero}/>
         <Notificacion texto={texto} color={color}/>
         <Lista lista={lista} buscar={buscar} borrar={borrar}/>
      </div>
   )
}

export default App
//ReactDOM.render(<App/>, document.getElementById('root'))
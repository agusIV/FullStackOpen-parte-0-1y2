import React, {useEffect, useState} from "react" 
import axios from "axios"

import Informacion from "./componentes/informacion"
import Lista from "./componentes/lista"

const App = () => {
   const [paises, setPaises] = useState()
   const [pais, setPais] = useState()
   const [lista, setLista] = useState([])
   const [texto, setTexto] = useState("")
   const [mostrar, setMostrar] = useState(false)

   const estados = (text, pai, list, mostra) => {
      setTexto(text)
      setPais(pai)
      setLista(list)
      setMostrar(mostra)
   }

   useEffect(() => {
      axios
         .get("https://restcountries.com/v3.1/all")
         .then(respuesta => {
            setPaises(respuesta.data)
         })
      }, [])

   const buscar = (valor) => {
      setMostrar(false)
      const lista = paises.filter(pais => 
         pais.name.common.toLowerCase().indexOf(valor.target.value.toLowerCase()) !== -1
      );
      if (lista.length > 10){
         estados("demaciados resultados", "", [], false)
      }else if (lista.length === 1){
         estados("", lista[0], [], true)
      }else{
         estados("", "", lista, false)
      }
   }
   // 2.13
   const boton = (datos) => {
      estados("", datos, [], true)
   }

   return (
      <div>
         <input
            onChange = {buscar}
         />
         <p>{texto}</p>
         <Lista lista={lista} boton={boton}/>
         {mostrar ? <Informacion info={pais}/> : ""}
      </div>
   )
}

export default App
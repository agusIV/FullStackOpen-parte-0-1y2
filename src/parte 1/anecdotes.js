// 1.12
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Boton = ({manejador, texto}) => {
   return (
      <>
         <button onClick={manejador}>{texto}</button>                
      </>
   )
}

const App = (props) => {
   const [seleccionado, setSeleccionado] = useState(0)
   const [votos, setVotos] = useState(Array(props.anecdotes.length).fill(0))
   const [masVotada,setMasVotada] = useState(0)
   const [frase,setFrase] = useState("")

   function numeroAleatorioDecimales(min, max) {
      var num = Math.floor(Math.random() * (max - min))
      return num
   }

   const set = () => {
      console.log("vfz<<")
      setSeleccionado(numeroAleatorioDecimales(0,props.anecdotes.length))
   }
   // 1.13
   const votar = () => {
      const copia = [...votos]
      copia[seleccionado] += 1
      setVotos(copia)
      masVotos()
   }
   // 1.14
   const masVotos = () => {
      if (masVotada < votos[seleccionado]){
         setMasVotada(votos[seleccionado])
         setFrase(props.anecdotes[seleccionado])
      }
   }

   return (
      <div>
         {props.anecdotes[seleccionado]}
         <p>esta frase tiene {votos[seleccionado]} votos</p>
         <Boton manejador={set} texto="siguiente frase"/>
         <Boton manejador={votar} texto="votar"/>
         <h1>anecdota con mas votos</h1>
         {frase}
      </div>
   )
}

//ReactDOM.render(<App anecdotes={anecdotes} />,document.getElementById('root'))
export default App
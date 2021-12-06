// 1.6
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// 1.10
const Boton = ({manejador, texto}) => {
   return (
      <>
         <button onClick={manejador}>{texto}</button>
      </>
   )
}

const Estadistica = ({texto, valor}) => {
   return(
      <tr>
         <td>{texto}</td> <td>{valor}</td>
      </tr>
   )
}
//-----------
// 1.7, 1.8, 1.11
const Estadisticas = ({bueno, neutral, malo}) => {
   console.log(bueno)
   const total = bueno + neutral + malo
   const promedio = (bueno - malo) / total
   const positivos = bueno / total * 100
   // 1.9
   if (total === 0) return  (
      <p>no hay estadisticas</p>
   )
   //--------
   return(
      <table>
         <tbody>
         <Estadistica texto="bueno" valor={bueno}/>
         <Estadistica texto="neutral" valor={neutral}/>
         <Estadistica texto="malo" valor={malo}/>
         <Estadistica texto="total" valor={total}/>
         <Estadistica texto="promedio" valor={promedio}/>
         <Estadistica texto="positivos" valor={positivos}/>
         </tbody>
      </table>
   )
}
//---------------------
const App = () => {
   const [bueno, setBueno] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [malo, setMalo] = useState(0)
   console.log(bueno)
   return (
      <>
         <h1>dar opinion</h1>
         <Boton manejador={() => setBueno(bueno + 1)} texto="bueno"/>
         <Boton manejador={() => setNeutral(neutral + 1)} texto="neutral"/>
         <Boton manejador={() => setMalo(malo + 1)} texto="malo"/>
         <h1>estadisticas</h1>
         <Estadisticas bueno={bueno} neutral={neutral} malo={malo}/>

         
      </>
   )
}

//ReactDOM.render(<App />, document.getElementById('root'))
export default App
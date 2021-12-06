// 1.1
import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
   return(
      <>
         <h1>{props.curso}</h1>
      </>
   )
}

const Content = (props) => {
   return(
      <>
         <Parte partes={props.curso[0]}/>
         <Parte partes={props.curso[1]}/>
         <Parte partes={props.curso[2]}/>
      </>
   )
}
// 1.2
const Parte = (props) => {
   return(
      <>
         <p>{props.partes.nombre} {props.partes.ejercicios}</p>
      </>
   )
}
//------
const Total = (props) => {
   const resultado = props.curso[0].ejercicios + props.curso[1].ejercicios + props.curso[2].ejercicios
   return(
      <>
         <p>numero de ejercicios {resultado}</p>
      </>
   )
}

const App = () => {
   // 1.3, 1.4, 1.5
   const curso = {
      nombre : "desarrollo de aplicaciones half stack",
      partes : [
         {
            nombre: "Fundamentos de react",
            ejercicios: 10
         },
         {
            nombre: "usando propiedades para pasar datos",
            ejercicios: 7
         },
         {
            nombre: "estado del componente",
            ejercicios: 14
         }
      ]
   }
   //------------
   return (
      <div>
         <Header curso={curso.nombre} />
         <Content curso={curso.partes}/>
         <Total curso={curso.partes}/>
      </div>
   )
}

//ReactDOM.render(<App />, document.getElementById('root'))
export default App
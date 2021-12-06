// 2.1
import ReactDOM from 'react-dom'
// 2.5
import Curso from "./2.1-curso"
//----------
const App = () => {
   const cursos = [
      {
         id: 1,
         nombre : "desarrollo de aplicaciones half stack",
         partes : [
         {
            nombre: "Fundamentos de react",
            ejercicios: 10,
            id: 1
         },
         {
            nombre: "usando propiedades para pasar datos",
            ejercicios: 7,
            id: 2
         },
         {
            nombre: "estado del componente",
            ejercicios: 14,
            id: 3
         },
         {
            nombre: 'Redux',
            ejercicios: 11,
            id: 4
         }
         ]
      },
      {
         nombre: 'Node.js',
         id: 2,
         partes: [
         {
            nombre: 'Routing',
            ejercicios: 3,
            id: 1
         },
         {
            nombre: 'Middlewares',
            ejercicios: 7,
            id: 2
         }
         ]
      }
   ]
   // 2.4
   return (
      <>
         <ul>
            {cursos.map(curso => (
               <Curso key={curso.id} nombre={curso.nombre} partes={curso.partes}/>
            ))}
         </ul>
      </>
   )
   //------
}

//ReactDOM.render(<App/>, document.getElementById("root"))
export default App
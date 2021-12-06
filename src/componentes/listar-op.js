import React from "react"

const Listar = ({datos, borrarPerson}) => {
  const confirmacion = () => {
    if (window.confirm(`esta seguro que quiere borrar al personaje ${datos.nom}?`))
      borrarPerson(datos.id)
  }
  return (
    <div className = "personaje">
      <li >{datos.nom}</li>
      <ul>    
        <p>ataque: {datos.ata}</p>
        <p>defensa: {datos.def}</p>
        <p>velocidad: {datos.vel}</p>
        <p>tipos de haki:</p>
        <ul>
          {datos.hak.map(haki => (
            <li key={haki}>{haki}</li>
          ))}
        </ul>
      </ul>
      <button onClick={confirmacion}>borrar</button>
    </div>
  )
}

export default Listar
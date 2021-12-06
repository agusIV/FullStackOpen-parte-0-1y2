import React from "react"
import Listar from "./listar-op";

const Lista = ({lista, buscar, borrar}) => {
    return (
        <>
            buscar:<input onChange={buscar}/>
            <ol>
                {lista.map(persona =>(
                    <Listar key={persona.nom} datos={persona} borrarPerson={borrar}/>
                ))}
            </ol>
        </>
    )
}

export default Lista
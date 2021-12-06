import React from "react"

const Parte = ({nombre, ejercicios}) => {
    return (
        <>
            <h3>{nombre}</h3>
            <p>ejercicios {ejercicios}</p>
        </>
    )
}

const Curso = ({nombre, partes}) => {
    // 2.2, 2.3
    const total = partes.reduce((previo, actual) => ({ejercicios: previo.ejercicios + actual.ejercicios}))
    //-----------
    return (
        <>
            <li>
                <h1>{nombre}</h1>
                <ul>
                    {partes.map(parte => (
                        <Parte key={parte.id} nombre={parte.nombre} ejercicios={parte.ejercicios}/>
                    ))}
                    <p>cantidad de ejercicios de parte: {total.ejercicios}</p>
                </ul>
            </li>
        </>
    )
}

export default Curso
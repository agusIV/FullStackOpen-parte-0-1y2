import React from "react";

const Notificacion = ({msj, color}) => {
    if(msj === null) return null
    const estilo = {
        background: "white",
        color: color,
        borderStyle: "solid",
        borderColor: color,
        borderRadius: 6,
        padding: 10
    }
    return(
        <div className = "mensaje" style={estilo}>
            {msj}
        </div>
    )
}

export default Notificacion
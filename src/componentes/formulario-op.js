import React from "react"

const Formulario = ({agregarPersonaje, 
    cambiarNombre, cambiarAtaque, cambiarDefensa, cambiarVelocidad, cambiarEstado, 
    nuevoNombre, nuevoAtaque, nuevaDefensa, nuevaVelocidad}) => {
    return (
        <>
            <form onSubmit={agregarPersonaje}> 
            <div>
                nombre: <input 
                    value = {nuevoNombre}
                    onChange = {cambiarNombre}
                />
            </div>
            <div>
                ataque: <input
                    value = {nuevoAtaque}
                    onChange = {cambiarAtaque}
                />
            </div>
            <div>
                defensa: <input
                    value = {nuevaDefensa}
                    onChange = {cambiarDefensa}
                />
            </div>
            <div>
                velocidad: <input
                    value = {nuevaVelocidad}
                    onChange = {cambiarVelocidad}
                />
            </div>
            tipos de haki:
            <div>
                <label>
                    <input type="checkbox" name="haki" value="rey" onChange={cambiarEstado}/>
                    rey
                </label>
                <label>
                    <input type="checkbox" name="haki" value="arm" onChange={cambiarEstado}/>
                    armadura
                </label>
                <label>
                    <input type="checkbox" name="haki" value="obs" onChange={cambiarEstado}/>
                    observacion
                </label>
            </div>
            <div>
                <button type="submit">agregar</button>
            </div>
            </form>
        </>
    )  
}

export default Formulario
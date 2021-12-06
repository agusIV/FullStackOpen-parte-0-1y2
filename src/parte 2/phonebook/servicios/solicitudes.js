import axios from "axios"
const url = "http://localhost:3001/persons"

const getTodo = () => {
   const solicitud = axios.get(url)
   return solicitud.then(respuesta => respuesta.data)
}

const agregar = info => {
   const solicitud = axios.post(url, info)
   return solicitud.then(respuesta => respuesta.data)
}

const actualizar = (id, info) => {
   const solicitud = axios.put(`${url}/${id}`, info)
   return solicitud.then(respuesta => respuesta.data)
}

const borrar = id => {
   const solicitud = axios.delete(`${url}/${id}`)
   return solicitud.then(respuesta => respuesta.data)
}

export default {getTodo, agregar, borrar, actualizar}
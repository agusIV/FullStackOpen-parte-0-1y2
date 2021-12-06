import axios from "axios"
import {useState, useEffect} from "react/cjs/react.development";

const Informacion = ({info}) => {
   const [clima, setClima] = useState()
   const [OK, setOK] = useState(false)
   
   useEffect(() => {
      const clave_api = process.env.REACT_APP_CLAVE_API
      axios
         .get(`http://api.weatherstack.com/current?access_key=${clave_api}&query=${info.capital[0]}`)
         .then(respuesta => {
            setClima(respuesta.data.current)
            setOK(true)
         })
         // eslint-disable-next-line
   }, [])
   if (!OK) {
      return (<h1>cargando...</h1>)
   }else{
      console.log(clima);
      return (
         <div>
            <h1>{info.name.common}</h1>
            <img src={info.flags.png} alt="bandera"/>
            <p>idiomas</p>
            <ul>
               {Object.values(info.languages).map(idioma => <li key={idioma}>{idioma}</li>)}
            </ul>
            <p>poblacion: {info.population}</p>
            <p>capital: {info.capital}</p>
            <p>temperatura: {clima.temperature}</p>
            <img src={clima.weather_icons[0]} alt="icono del clima"/>
            <p>{clima.weather_descriptions[0]}</p>
            <p>viento: {clima.wind_speed} mph con direccion hacia {clima.wind_dir}</p>
         </div>
      )
   }
}

export default Informacion
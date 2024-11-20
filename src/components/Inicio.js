import React from 'react'
import { Link } from 'react-router-dom'
import ListadoTrabajo from './ListadoTrabajo'

const Inicio = () => {
  return (
    <div className='home'>
      <h1>Inicio</h1>
      <h2 className='title'>Desarrollo Web. <Link to="/contacto">Contacto</Link></h2>
      <section className='lasts-works'>
        <h2 className='heading'>Proyectos</h2>
      </section>
      {/* Prop: para mostrar un numero de elementos de un archivo en direfentes rutas(paginas) */}
      <ListadoTrabajo limite='2' />
    </div>
  )
}

export default Inicio

import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'
import ListadoTrabajo from './ListadoTrabajo'

const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
      <ListadoTrabajo/>
    </div>
  )
}

export default Portafolio

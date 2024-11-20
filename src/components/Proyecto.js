import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

const Proyecto = () => {

    //Estado para pasar la informacion a la plantilla
    const [proyecto, setProyecto] = useState({})

    // Recibir parametros por la URL
    const params = useParams()

    //configuracion de estados
    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id)
        setProyecto(proyecto[0])
    }, [])

    return (
        <div className='page page-work'>
            <div className='mask'>
                <img src={`/images/image.jpg`} alt="Logo de React" />
            </div>
            <h1 className='heading'>Proyecto: {params.id} </h1>
            <p>{proyecto.tecnologias}</p>
            <p>{proyecto.descripcion}</p>
            <a href={'http://'+proyecto.url} target="_blank" rel="noopener noreferrer">Ir al Proyecto</a>
        </div>
    )
}

export default Proyecto

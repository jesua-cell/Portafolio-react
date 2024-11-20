import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'

const ListadoTrabajo = ({limite}) => {
    return (
        <section className='works'>
            { 
                trabajos.slice(0,limite).map(trabajos => { 
                    return (
                        <article key={trabajos.id} className='work-item'>
                            <div className='mask'>
                                <img src={`/images/image.jpg`} alt="Logo de React" />
                            </div>
                            <span>{trabajos.categorias}</span>
                            <h2>
                                <Link to={"proyecto/" + trabajos.id}>{trabajos.nombre}</Link>
                            </h2>
                            <h3>{trabajos.tecnologias}</h3>
                        </article>
                    )
                })
            }
        </section>
    )
}

export default ListadoTrabajo

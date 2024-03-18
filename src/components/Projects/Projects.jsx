import React from 'react'
import ecommercePhoto from "../../images/ecommerce.png"
import ProjectCard from './ProjectCard'
import LargeProjectCard from './LargeProjectCard'

function Proyectos() {
  return (
    <article className="mb-10 md:mb-20 px-3 md:px-0">
      <h2 className="text-yellow-500 font-bold text-2xl md:text-3xl mb-10">Proyectos <i className="fa-solid fa-code"></i></h2>
      <div className="flex flex-col gap-20 mb-20">

        <LargeProjectCard
          live="https://ecommerceteam.netlify.app/"
          srcImg={ecommercePhoto}
          h3="Ecommerce"
          paragraph="Obtiene los productos de una API, posee distintas secciones y su carrito de compras."
          repo="https://github.com/javier-it/proyecto-CODO"
        />

      </div>
      <div className="grid md:grid-cols-2 gap-4">
        
        <ProjectCard
          live="https://weather-app-javi.netlify.app/"
          h3="Weather app"
          text="Consulta una API y muestra el clima en tiempo real."
        />
        <ProjectCard
          live="https://tasks-app-javi.netlify.app/"
          h3="Tasks app"
          text="Permite cargar, tachar y eliminar tareas."
        />
        
      </div>

    </article>
  )
}

export default Proyectos
import { images } from '../../images/images'
import { icons } from './icons'
import ProjectCard from './ProjectCard'
import LargeProjectCard from './LargeProjectCard'

export default function Proyectos() {

  return (
    <article className="mb-10 md:mb-20 px-3 md:px-0">
      <h2 className="text-yellow-500 font-bold text-2xl md:text-3xl mb-10">Proyectos <i className="fa-solid fa-code"></i></h2>
      <div className="flex flex-col gap-20 mb-20">
    
        <LargeProjectCard
          live="https://ecommerce-with-ts-javi.netlify.app/"
          repo="https://github.com/codebyjavi/ecommerce-with-ts"
          srcImg={images.ecommerce}
          icon1={icons.typeScript}
          icon2={icons.tailwind}
          icon3={icons.react}
          h3="Ecommerce"
          paragraph="Consulta una API de 20 productos los cuales son listados en pantalla con una interfaz amigable, 
            diseño responsive y accesible. Posee carrito de compras con los productos seleccionados, el precio de cada 
            uno y el total, posee local storage y mucho más."
        />
        
        <LargeProjectCard
          live="https://local-de-comidas-ts.netlify.app/"
          repo="https://github.com/codebyjavi/local-de-comidas"
          srcImg={images.localDeComidas}
          icon1={icons.typeScript}
          icon2={icons.tailwind}
          icon3={icons.react}
          h3="Local de comidas"
          paragraph=" Consulta una BD local y se hace una muestra de sus productos a través de un menú de compras. 
            El usuario debe seleccionar su pedido el cual será mostrado con su respectivo precio. Cuenta con propinas, 
            subtotal y total. Interfaz amigable, diseño responsive y accesible."
          />

        <LargeProjectCard
          live="https://guitar-react-javi.netlify.app/"
          repo="https://github.com/codebyjavi/guitar-react"
          srcImg={images.guitarla}
          icon1={icons.typeScript}
          icon2={icons.tailwind}
          icon3={icons.react}
          h3="GuitarLA"
          paragraph="Cada guitarra posee imagen, precio, nombre y descripción.
            Cuenta con carrito de compras, interfaz amigable, diseño responsive y accesible."
        />
        
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        
        <ProjectCard
          live="https://weather-app-javi.netlify.app/"
          h3="Weather app"
          text="Consulta una API y muestra el clima en tiempo real.
            Interfaz amigable, diseño responsive y accesible."
        />  
        <ProjectCard
          live="https://tasks-app-javi.netlify.app/"
          h3="Tasks app"
          text="Permite cargar, tachar y eliminar tareas.
            Interfaz amigable, diseño responsive y accesible. "
        />
        
      </div>

    </article>
  )
}

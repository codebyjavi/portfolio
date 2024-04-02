import { images } from '../../images/images'
import ProjectCard from './ProjectCard'
import LargeProjectCard from './LargeProjectCard'

function Proyectos() {

  return (
    <article className="mb-10 md:mb-20 px-3 md:px-0">
      <h2 className="text-yellow-500 font-bold text-2xl md:text-3xl mb-10">Proyectos <i className="fa-solid fa-code"></i></h2>
      <div className="flex flex-col gap-20 mb-20">
    
        <LargeProjectCard
          live="https://ecommerce-with-ts-javi.netlify.app/"
          repo="https://github.com/javxdev/ecommerce-with-ts"
          srcImg={images.ecommerce}
          icon1="bx bxl-typescript text-[#3178C6] text-lg md:text-xl"
          icon2="bx bxl-tailwind-css text-[#19B5B9] text-lg md:text-xl"
          icon3="fa-brands fa-react text-[#64C7FF] text-lg md:text-xl"
          h3="Ecommerce"
          paragraph="Obtiene los productos de una API, posee distintas secciones, local storage, custom hooks, carrito de compras y más!"
        />

        <LargeProjectCard
          live="https://guitar-react-javi.netlify.app/"
          repo="https://github.com/javxdev/guitar-react"
          srcImg={images.guitarla}
          icon1="bx bxl-typescript text-[#3178C6] text-lg md:text-xl"
          icon2="bx bxl-tailwind-css text-[#19B5B9] text-lg md:text-xl"
          icon3="fa-brands fa-react text-[#64C7FF] text-lg md:text-xl"
          h3="GuitarLA"
          paragraph="Obtiene los productos de un array local, posee local storage, carrito de compras y más!"
        />
        
        <LargeProjectCard
          live="https://local-de-comidas-ts.netlify.app/"
          repo="https://github.com/javxdev/local-de-comidas"
          srcImg={images.localDeComidas}
          icon1="bx bxl-typescript text-[#3178C6] text-lg md:text-xl"
          icon2="bx bxl-tailwind-css text-[#19B5B9] text-lg md:text-xl"
          icon3="fa-brands fa-react text-[#64C7FF] text-lg md:text-xl"
          h3="Local de comidas"
          paragraph="Obtiene los productos de un array local, posee propinas y más!"
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
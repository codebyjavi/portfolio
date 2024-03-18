import React from 'react'

function ProjectCard({live, h3, text}) {
  return (
    <a href={live} target="_blank" className="flex flex-col relative gap-1 py-2 px-6 border-neutral-300 border-2 rounded-lg hover:border-neutral-400 hover:scale-[1.02] dark:border-neutral-600 dark:hover:border-neutral-500">
          <h3 className="text-black dark:text-neutral-200  text-xl font-bold">{h3}</h3>
          <i className="fa-solid fa-up-right-from-square text-black dark:text-neutral-200  absolute right-0 me-2"></i>
          <small className="text-black dark:text-neutral-200 ">{text}</small>
          
          <div className="flex gap-2">
              <i className="fa-brands fa-html5 text-[#FF8A00] text-md md:text-lg"></i>
              <i className="fa-brands fa-css3-alt text-[#0094FF] text-md md:text-lg"></i>
              <i className="fa-brands fa-js text-[#FFD747] text-md md:text-lg"></i>
          </div>
        </a>
  )
}

export default ProjectCard
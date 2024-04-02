function ProjectCard({live, h3, text}) {

  const ICONS = [
    {
      style: "fa-brands fa-html5 text-[#FF8A00]"
    },

    {
      style: "fa-brands fa-css3-alt text-[#0094FF]"
    },

    {
      style: "fa-brands fa-js text-[#FFD747]"
    }
  ]

  return (
    <a href={live} target="_blank" className="flex flex-col relative gap-1 py-2 px-6 border-neutral-300 border-2 rounded-lg hover:border-neutral-400 hover:scale-[1.02] dark:border-neutral-600 dark:hover:border-neutral-500">
          <h3 className="text-black dark:text-neutral-200  text-xl font-bold">{h3}</h3>
          <i className="fa-solid fa-up-right-from-square text-black dark:text-neutral-200  absolute right-0 me-2"></i>
          <p className="text-black dark:text-neutral-200 text-md">{text}</p>
          
          <div className="flex gap-2">
              {ICONS.map(icon => (
                <i key={icon.style} className={`text-xl ${icon.style}`}></i>
              ))}
          </div>
        </a>
  )
}

export default ProjectCard
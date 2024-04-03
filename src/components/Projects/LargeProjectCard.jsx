function LargeProjectCard({live, repo, srcImg, icon1, icon2, icon3, h3, paragraph}){

  return (
    <div className="grid md:grid-cols-2 gap-4 text-white">
        <a href={live} target="_blank">
            <img className="rounded-lg shadow-lg" src={srcImg} alt="imagen del ecommerce" loading="lazy"/>
        </a>
        <div className="flex flex-col justify-between gap-3 md:gap-0 md:py-1">
            <h3 className="text-black dark:text-neutral-200 text-xl md:text-3xl font-bold">{h3}</h3>
            <p className="text-black dark:text-neutral-200">{paragraph}</p>
            <div className="flex gap-2">
                <i className={icon1}></i>
                <i className={icon2}></i>
                <i className={icon3}></i>
            </div>
            <div className="flex gap-x-3">
                
                <a className="text-black font-bold py-2 px-4 my-auto bg-neutral-300 hover:bg-neutral-200 rounded-lg "
                    href={repo}
                    target="_blank"
                >
                    <span className="pr-1 text-md">Github</span>
                    <i className="fa-brands fa-github text-md"></i>
                </a>
            
                <a className="text-black font-bold py-2 px-4 my-auto bg-neutral-300 hover:bg-neutral-200 rounded-lg flex items-center group/live gap-2 hover:gap-4 transition-[gap]"
                    href={live}
                    target="_blank"
                >
                    <span className="text-md">Live</span>
                    <i className="bx bx-rocket text-md group-hover/live:rotate-45 transition-transform"></i>
                </a>

            </div>
        </div>
    </div>
  )
}

export default LargeProjectCard
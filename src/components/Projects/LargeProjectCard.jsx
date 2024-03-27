import React from 'react'

function LargeProjectCard({live, repo, srcImg, iClassName1, iClassName2, iClassName3, h3, paragraph}){

  return (
    <div className="grid md:grid-cols-2 gap-4 text-white">
        <a href={live} target="_blank">
            <img className="rounded-lg" src={srcImg} alt="imagen del ecommerce" loading="lazy"/>
        </a>
        <div className="flex flex-col justify-between gap-3 md:gap-0 md:py-1">
            <h3 className="text-black dark:text-neutral-200 text-xl md:text-3xl font-bold">{h3}</h3>
            <p className="text-black dark:text-neutral-200">{paragraph}</p>
            <div className="flex gap-2">
                <i className={iClassName1}></i>
                <i className={iClassName2}></i>
                <i className={iClassName3}></i>
            </div>
            <div className="flex gap-2">
                <a className="text-black hover:scale-[1.02] font-bold py-1 px-3 my-auto bg-[#dadada] rounded-lg" href={repo} target="_blank">
                    <span className="pr-1 text-sm md:text-md">Github</span>  
                    <i className="fa-brands fa-github text-sm md:text-md"></i>
                </a>
                <a className="text-black hover:scale-[1.02] font-bold py-1 px-3 my-auto bg-[#dadada] rounded-lg" href={live} target="_blank">
                    <span className="pr-1 text-sm md:text-md">Live</span>  
                    <i className='bx bx-rocket text-sm md:text-md'></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default LargeProjectCard
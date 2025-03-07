import React from 'react'

/*const Card = () => {
  return (
    <article className='w-full max-w-(--max-width-card) overflow-hidden rounded-2xl bg-gray-300 shadow-2xl'>
    <img src="./tailwindimg.webp" alt="tailwind" />
    <div className='p-4 space-y-5'>
      <h2 className='text-2xl font-bold text-(--title-card-color)'>Titulo de la card</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae explicabo obcaecati porro minima excepturi ad accusantium magnam voluptates deleniti.</p>
      <a className='w-max block mx-auto p-2 rounded-md bg-blue-950 text-white' href="#">Leer mas</a>
    </div>
  </article>  
  )
}*/

const Card = ( {img,title,description}) => {
    return (
      <article className='w-full max-w-(--max-width-card) overflow-hidden rounded-2xl bg-gray-300 shadow-2xl'>
      <img src={img} alt={title} />
      <div className='p-4 space-y-5'>
        <h2 className='text-2xl font-bold text-(--title-card-color)'>{title}</h2>
        <p className='text-gray-700'>{description}</p>
        <a className='w-max block mx-auto p-2 rounded-md bg-blue-950 text-white' href="#">Leer mas</a>
      </div>
    </article>  
    )
  }

export default Card
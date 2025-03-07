import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from './Components/Card.jsx'

function App() {
  const cardData= [
    {id:1, title:"React",description:"Biblioteca para crear interfaces de usuario", img: "./tailwindimg.webp"},
    {id:2, title:"Tailwind",description:"Framework para diseño", img: "./tailwindimg.webp"},
    {id:3, title:"Js",description:"Lenguaje de programacion", img: "./tailwindimg.webp"},
    {id:4, title:"Vite",description:"Herramienta de construcion rapida para react", img: "./tailwindimg.webp"},
    {id:5, title:"Node.js",description:"Entorno de ejecucion de JavaScript", img: "./tailwindimg.webp"},

  ];

  return (
    <>
      <main>
        <h1 className='text-7xl font-bold text-blue-950 font-kanit text-center'>Bienvenido a mi pagina</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 justify-items-center'>
          {cardData.map((card) => (
            <Card key={card.id} title={card.title} description={card.description} img={card.img} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header >

      <div className='flex justify-between mb-2'>
        <h1> 
        <span className="text-red-500">PH</span>
         <span className="text-black">Tube</span>
       </h1>
          {/* <h1 className="text-3xl font-bold text-gray-800"><span className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4">PH </span>Tube</h1> */}
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Sort by view</button>
           <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4">Blog</button>
      </div>

    <div classname= 'mt[50px]'><hr />   </div>


      {/* <div >
        <ul className='flex justify-between items-center'>
        <li><a href=''><button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4">ALL</button></a></li>
        <li><a href=''><button className='btn btn-outline btn-accent'>Music</button></a></li>
        <li><a href=''><button className='btn btn-outline btn-accent'>Comedy</button></a></li>
        <li><a href=''><button className='btn btn-outline btn-accent'>Drawing</button></a></li>
        </ul>
      </div> */}
      <div className="flex space-x-4 mb-4 justify-center mt-2">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">All</button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Music</button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Comedy</button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Drawing</button>
      </div>


      </header>


     
   </>  
  )
}

export default App

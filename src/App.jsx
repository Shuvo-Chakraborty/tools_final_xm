import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='max-w-[1321px] mx-auto mt-[100px]'>

      <div className='flex justify-between'>
      {/* <h1><span>PH</span>Tube</h1> */}


          <h1 className="text-3xl font-bold text-gray-800"><span className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4">PH </span>Tube</h1>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Sort by view</button>
           <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4">Blog</button>
        
      </div>
      
    

      </header>

      {/* <header>
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-8">
        <div className="flex items-center">
          <div className="mr-4">
            <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 12a6 6 0 1 0 -12 0 6 6 0 0 0 12 0z" />
              <path d="M12 2v20" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">PH Tube</h1>
        </div>
      </div>
      <div className="mb-8">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Sort by view</button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4">Blog</button>
      </div>
      </header> */}
   </>  
  )
}

export default App

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
      <h1><span>PH</span>Tube</h1>
      <button>sort by view</button>
      <button>Blog</button>
      </div>

      </header>
    </>
  )
}

export default App

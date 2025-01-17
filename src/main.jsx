import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

   [Children
    {path: "/All",
    element: <h1>all </h1>,},

    {path: "/Music",
      element: <h1>all music</h1>,},


      {path: "/Comedy",
        element: <h1>all comedy</h1>,},


        {path: "/Drawing",

          element: <h1>all drawing</h1>,},




   ]


  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)

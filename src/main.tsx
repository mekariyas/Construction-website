import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Project from './pages/Project.tsx'
import Contact from './pages/Contact.tsx'
import Error from './pages/Error.tsx'
import App from './App.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index: true,
        element : <Home/>
      },
      {
        path: "/About-us",
        element: <About/>
      },
      {
        path: "/Projects",
        element: <Project/>
      },
      {
        path: "/Contact",
        element: <Contact/>
      }
    ]
  },
  {
    path: "*",
    element: <Error/>
  }
  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import Contato from './components/Layout/Contato.Component.tsx'
import About from './components/Layout/About.Component.tsx'
import Auth from './components/Auth.Component.tsx'

const router = createBrowserRouter([
{
  path: "/",
  element: <App/>
},
{
  path: "/contato",
  element: <Contato/>
},
{
  path: "/about",
  element: <About/>
},
{
  path: "/auth",
  element: <Auth/>
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/Contact",
      element: <><Navbar /><Contact /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    } 
    ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App
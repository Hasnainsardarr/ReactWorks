import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <div>
        <Link href='/'><li>Home</li></Link>

        < Link  href='/About'><li>About</li></Link>

        <Link href='/Contact'><li>Contact</li></Link>
      
    </div>
  )
}

export default Navbar

import React, {useEffect} from 'react'





const Navbar = ({color}) => {
    useEffect(() => {
        alert("color was changed")
       
          
       }, [color])
  return (
    <div>
      i am navbar of {color}
    </div>
  )
}

export default Navbar

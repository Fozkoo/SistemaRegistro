import React from 'react'
// Supports weights 100-900
import '@fontsource-variable/onest';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="container-header h-20 shadow-sm flex justify-between items-center font-semibold">
        <nav className=' flex justify-center items-center gap-5 text-xl w-full'>
              <Link to="/" className=''>ALUMNOS</Link>
              <Link to="/men">HOMBRES</Link>
              <Link to="/women">MUJERES</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
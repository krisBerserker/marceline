import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <header>
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark d-flex">
    <div className="container-fluid">
      <NavLink className="navbar-brand" aria-current="page" to='/'> Marceline </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" style={({isActive}) => ({fontWeight : isActive ? 'bold' : 'normal'})} to='/'> Accueil </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" style={({isActive}) => ({fontWeight : isActive ? 'bold' : 'normal'})} to='/about'> A Propos </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" style={({isActive}) => ({fontWeight : isActive ? 'bold' : 'normal'})} to='/preinscription'> Preinscription </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" style={({isActive}) => ({fontWeight : isActive ? 'bold' : 'normal'})} to='/signIn'> Gestion </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

    // <section>
    //     <nav className='navbar'>
    //       <NavLink className='libar' style={({isActive}) => ({fontWeight : isActive ? 'bold' : 'normal'})} to='/'> Accueil </NavLink>
    //       <NavLink className='libar' style={({isActive}) => ({fontWeight : isActive ? 'bold' : 'normal'})} to='/about'> A Propos </NavLink>
    //       <NavLink className='libar' style={({isActive}) => ({fontWeight : isActive ? 'bold' : 'normal'})} to='/preinscription'> Preinscription </NavLink>
    //       <NavLink className='libar' style={({isActive}) => ({fontWeight : isActive ? 'bold' : 'normal'})} to='/contact'> Contact </NavLink>
    //     </nav>
    // </section>
  )
}

export default NavBar
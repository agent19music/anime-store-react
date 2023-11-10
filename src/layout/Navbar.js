import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({mycart, toggleDarkMode, toggle, toggle2}) {
  
  return (
    <div>
 <nav className={`navbar navbar-expand-lg navbar-${toggle2} ${toggle}`}>
  <div className="container-fluid">
       <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <Link className="navbar-brand mt-2 mt-lg-0" to="#">
        <img
          src="/logo.png"
          height="70"
          alt="Logo"
          
        />
      </Link>
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/animelist">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
      </ul>
      
    </div>
    

    
    <div className="d-flex align-items-center">
     
      <NavLink className="text-reset me-3 " to="/cart">
        <i className="fas fa-shopping-cart"></i>
       { mycart.length>0 && <span class="badge rounded-pill badge-notification bg-danger">{mycart.length}</span>}
      </NavLink>

      
      <div className="dropdown">
        <Link
          className="text-reset me-3 dropdown-toggle hidden-arrow "
          to="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
           <i class="fas fa-chevron-circle-down fa-lg"></i>
           
        </Link>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <Link className="dropdown-item" to="/addanimeform">Add new anime</Link>
          </li>
          <li>
            <Link className="dropdown-item" onClick={()=> toggleDarkMode()} to="#">Toggle dark mode</Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/feedback">User reviews</Link>
          </li>
        </ul>
      </div>
     
     
    </div>
   
  </div>

</nav>

    </div>
  )
}
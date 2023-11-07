import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
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
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </Link>
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Top Merch</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Contact Us</Link>
        </li>
      </ul>
      
    </div>
    

    
    <div className="d-flex align-items-center">
     
      <Link className="text-reset me-3" to="#">
        <i className="fas fa-shopping-cart"></i>
      </Link>

      
      <div className="dropdown">
        <Link
          className="text-reset me-3 dropdown-toggle hidden-arrow"
          to="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-bell"></i>
          <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </Link>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <Link className="dropdown-item" to="#">Some news</Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">Another news</Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">Something else here</Link>
          </li>
        </ul>
      </div>
     
      <div className="dropdown">
        <Link
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          to="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </Link>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" to="#">My profile</a>
          </li>
          <li>
            <a className="dropdown-item" to="#">Settings</a>
          </li>
          <li>
            <a className="dropdown-item" to="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
   
  </div>

</nav>

    </div>
  )
}

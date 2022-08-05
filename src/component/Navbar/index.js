import React from 'react'
import {Link} from 'react-router-dom'
import "./style.css"



const Navbar = () => {
  return (

    <div>
      <nav class=" navbar navbar-expand-md bg text-black">
      <a href='' class="navbar-brand logo-navbar"></a>
      
      <button class="navbar-toggler" type='button' data-bs-toggle="collapse"
      data-bs-target="#btn">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="btn"></div>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item mx-3">
          <a href='#' class="nav-link text-black">Our Services</a>
        </li>
        <li class="nav-item mx-3">
          <a href='#' class="nav-link">Why Us</a>
        </li>
        <li class="nav-item mx-3">
          <a href='#' class="nav-link">Testimonial</a>
        </li>
        <li class="nav-item mx-3">
          <a href='#' class="nav-link">FAQ</a>
        </li>

      </ul>
      </nav>
    </div>
    

    
//     <nav class="navbar navbar-expand-lg navbar-light  bg-[#F1F3FF]" >
//   <div className="container-fluid">
//   <button className='logo-navbar'></button>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="d-flex flex-row-reverse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
//       <li class="nav-item active">
//       <Link to="/" class="nav-link">Our Services </Link>
       
//       </li>
//       <li class="nav-item active">
//         <a class="nav-link" href="/">Why Us <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item active">
//         <a class="nav-link" href="/">Testimonial <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item active">
//         <a class="nav-link" href="/">FAQ <span class="sr-only">(current)</span></a>
//       </li>
     
     
      
//     </ul>
    
//   </div>
//   </div>
// </nav>
  )
}

export default Navbar
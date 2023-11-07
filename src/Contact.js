import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
         
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      
      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      
      <div>
        <Link href="" class="me-4 link-secondary">
          <i class="fab fa-facebook-f"></i>
        </Link>
        <Link href="" class="me-4 link-secondary">
          <i class="fab fa-twitter"></i>
        </Link>
        <Link href="" class="me-4 link-secondary">
          <i class="fab fa-google"></i>
        </Link>
        <Link href="" class="me-4 link-secondary">
          <i class="fab fa-instagram"></i>
        </Link>
        <Link href="" class="me-4 link-secondary">
          <i class="fab fa-linkedin"></i>
        </Link>
        <Link href="" class="me-4 link-secondary">
          <i class="fab fa-github"></i>
        </Link>
      </div>
       </section>
    
  
      <section class="">
      <div class="container text-center text-md-start mt-5">
        
        <div class="row mt-3">
          
                  <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3 text-secondary"></i>LifeOnaRock
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
         
          
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold mb-4">
              Navigate
            </h6>
            <p>
              <Link to="/!" class="text-reset">Home</Link>
            </p>
            <p>
              <Link to="/!" class="text-reset">About</Link>
            </p>
            <p>
              <Link to="/!" class="text-reset">Contact</Link>
            </p>
            
          </div>
          
          
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 class="text-uppercase fw-bold mb-4">
              More
            </h6>
            <p>
              <Link to="/!" class="text-reset">Donate</Link>
            </p>
            <p>
              <Link to="/!" class="text-reset">Terms of service</Link>
            </p>
            
          </div>
                 
  
          
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
            <p>
              <i class="fas fa-envelope me-3 text-secondary"></i>
              info@example.com
            </p>
            <p><i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
          </div>
        </div>
      </div>
    </section>
    <div class="text-center p-4" >
      © 2023 Copyright:
      <Link class="text-reset fw-bold" to="/">LifeOnaRock All rights reserved</Link>
    </div>
    
  
  
          
      </div>
  )
}

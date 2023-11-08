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
        <Link to="" class="me-4 link-secondary" target='blank'>
          <i class="fab fa-facebook-f"></i>
        </Link>
        <Link to="https://twitter.com/ufwsean" target='blank'class="me-4 link-secondary">
          <i class="fab fa-twitter"></i>
        </Link>
        <Link to="mailto:seanmotanya@gmail.com"target='blank' class="me-4 link-secondary">
          <i class="fab fa-google"></i>
        </Link>
        <Link to="" target='blank'class="me-4 link-secondary">
          <i class="fab fa-instagram"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/sean-motanya-532619282/" target='blank' class="me-4 link-secondary">
          <i class="fab fa-linkedin"></i>
        </Link>
        <Link to="https://github.com/agent19music" target='blank' class="me-4 link-secondary">
          <i class="fab fa-github"></i>
        </Link>
      </div>
       </section>
    
  
      <section class="">
      <div class="container text-center text-md-start mt-5">
        
        <div class="row mt-3">
          
                  <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3 text-secondary"></i>ANIME-STORE
            </h6>
            <p>
              The home of your favourite animes' merchandise and more !!
            </p>
          </div>
         
          
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold mb-4">
              Navigate
            </h6>
            <p>
              <Link to="/animelist" class="text-reset">Home</Link>
            </p>
            <p>
              <Link to="/topmerch" class="text-reset">Top Merch</Link>
            </p>
            <p>
              <Link to="/contact" class="text-reset">Contact</Link>
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
            <p><i class="fas fa-home me-3 text-secondary"></i> Nairobi Bankai Towers</p>
            <p>
              <i class="fas fa-envelope me-3 text-secondary"></i>
              seanmotanya@gamail.com
            </p>
            <p><i class="fas fa-phone me-3 text-secondary"></i> + 254 745 071 299</p>
            <p><i class="fas fa-print me-3 text-secondary"></i> + 971 582 301 251</p>
          </div>
        </div>
      </div>
    </section>
    <div class="text-center p-4" >
      © 2023 Copyright:
      <Link class="text-reset fw-bold" to="/">animestore All rights reserved</Link>
    </div>
    
  
  
          
      </div>
  )
}

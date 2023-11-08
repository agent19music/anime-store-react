import React,{useState, useEffect} from 'react'

export default function Feedback() {
const [feedback, setFeedback]= useState([])    

useEffect(()=>{
    fetch('http://localhost:8555/reviews')
    .then((res) => res.json())
    .then(res=> setFeedback(res))
},[])    
  return (
    <div>
        <section>
  <div class="row d-flex justify-content-center">
    <div class="col-md-10 col-xl-8 text-center">
      <h3 class="mb-4">Testimonials</h3>
      <p class="mb-4 pb-2 mb-md-5 pb-md-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
        numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
        quisquam eum porro a pariatur veniam.
      </p>
    </div>
  </div>

  <div class="row text-center">
    <div class="col-md-4 mb-5 mb-md-0">
      <div class="d-flex justify-content-center mb-4">
        
      </div>
      <h5 class="mb-3">Jack Sibire</h5>
      <h6 class="text-primary mb-3">Community manager</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>Since using SexEd3D, I have gained valuable knowledge and confidence.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star-half-alt fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-md-4 mb-5 mb-md-0">
      <div class="d-flex justify-content-center mb-4">
        
      </div>
      <h5 class="mb-3">Adele Mouse</h5>
      <h6 class="text-primary mb-3">Product Manager, LifeOnaRock</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>I recommend SexEd3D to anyone interested in promoting sexual health.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-md-4 mb-0">
      <div class="d-flex justify-content-center mb-4">
              </div>
      <h5 class="mb-3">Ben Clock</h5>
      <h6 class="text-primary mb-3">CTO, LifeOnaRock</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>I can't imagine navigating sexual health without it.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="far fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
  </div>
</section>
    </div>
  )
}

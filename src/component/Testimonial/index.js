import React from 'react';
import "./style.css";
import Rate from "../../asset/Rate.png";





const Testimonial = () => {
  return (
    <div>
      

      <div class="container-testimonial ">    
    <div>
      <h1>Testimonial</h1>
      <p>
      Berbagai review positif dari para pelanggan kami
      </p>
    </div>
    <div class="d-flex ">
    <div class="container-holder card-testi ">
      <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
    </div>
    <div class="container-holder card-testi">
     
        <img src={Rate} className/>
      <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
      
    </div>
    <div class="container-holder card-testi">
      <img src={Rate}/>
      <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
    </div>

    </div>

    <div>
      <button>NEXT</button>
      <button>BACK</button>
    </div>



   <div  class="position-absolute bottom-0 start-100 translate-middle-x">
   <button className='btn-testimoni'>test</button>
    <button className='btn-testimoni'>test</button>
   </div>
    

    <div className="container-sewa">

        <div class="d-grid  col-6 mx-auto">
 
  <button class="btn btn-primary" type="button">
    <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <button type="button" class="btn btn-success">Mulai Sewa Mobil</button>
  </button>
</div>
      </div>
    </div>
    </div>


    
  
  

  )
}

export default Testimonial
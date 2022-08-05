import React from 'react'
import img_service from "../../asset/img_service.png";
import "./style.css";


const Services = () => {
  return (
    <div id='Services'>
      
        <div class="container-fluid container-services">
    <div class="row">
    <div class="col-lg">
      <img src={img_service} />
      </div>
      <div class="col-lg">
        <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
        <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
        <div>
        <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
        <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
        <p>Sewa Mobil Jangka Panjang Bulanan</p>
        <p>Gratis Antar - Jemput Mobil di Bandara</p>
        <p>Layanan Airport Transfer / Drop In Out</p>
      </div>
      </div>
    </div>
  </div>

    </div>
    
  )
}

export default Services
import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIco,
  ServerIcon,
} from "@heroicons/react/solid";

import img_car from "../../asset/img_car.png";

import { AltRoute } from "@mui/icons-material";
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';






const Benner = () => {
  return (

    <div class="container-fluid bg-[#F1F3FF] container-benner">
    <div className="container-text">
    <div class="row">
      <div class="col-lg">
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        <Link to={"/carimobil"}>
          <Button variant="contained">Mulai Cari Mobil</Button>
          </Link>
        
      </div>
      <div class="col-lg">
      <img src={img_car} />
      </div>
    
    </div>
    </div>
  </div>
    
   
  );
};



export default Benner;

{/* <div>
<div className="w-full h-screen bg-[#f1f3ff] flex flex-col justify-between  " >
  <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
    <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
      <h1 className="text-3xl text-bold">
        Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
      </h1>
      <p>
        Selamat datang di Binar Car Rental. Kami menyediakan mobil
        kualitas terbaik dengan harga terjangkau. Selalu siap melayani
        kebutuhanmu untuk sewa mobil selama 24 jam.
      </p>
      <Link to={"/carimobil"}>
          <Button variant="contained">Mulai Cari Mobil</Button>
          </Link>

    </div>
    <div>
      <img src={img_car} />
    </div>
  </div>
</div>

</div> */}



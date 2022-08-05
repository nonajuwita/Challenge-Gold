import { Card, Row, Col } from "react-bootstrap";
import Benner from "../../component/Benner";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Pencarian from "../../component/Pencarian";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const DetailCar = () => {
const[car,setCar]=useState({});
const {id}= useParams();

useEffect(() => {
  axios
  .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
  .then((res)=> setCar(res.data))
  .catch((err) => console.log(err))
},[] ) ;

console.log(car)
    return (
       <div>
        
         <Navbar/>
         <Pencarian/>
         <Benner/>
         

         
       <div class="container-detail">
       <Row>
            <Col>
            <Card style={{ width: '50rem' }}>
            <Card.Body>
              <h5>Tentang Paket</h5>
              <h6>Include</h6>
              <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>

              <h6>Exclude</h6>
              <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>

              <h6>Refund, Reschedule, Overtime</h6>
              <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
             <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
             
            </Card.Body>
          </Card>

            </Col>

            <Col>
            <Card>
            <Card.Body>
              
              <img src={car.image}/>
              <h1>{car.name}</h1>
              <p>{car.category}</p>
              <h2>{car.price}</h2>
            </Card.Body>
          </Card>
            </Col>
          </Row>
       </div>
         
         
         
          
          
       
        <Footer/>
       </div> 
    )
}

export default DetailCar;
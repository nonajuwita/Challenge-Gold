import React from "react";
import "./style.css"
import { Button } from "@mui/material";
import imgservice from "../../asset/img_service.png"
import Vectora from "../../asset/Vector (4).png"
import Vectorb from "../../asset/Vector (5).png"
import Vectorc from "../../asset/Vector (6).png"
import Vectord from "../../asset/Vector (7).png"
import Vectorf from "../../asset/Vector (8).png"

const Footer = () => {

    return (
        <div class="d-flex justify-content-evenly container-footer">
            <div>
                <h6>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h6>
                <h6>binarcarrental@gmail.com</h6>
                <h6>081-233-334-808</h6>
            </div>
            <div>
                <p>Our services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
                
            </div>

            <div>
                <h6>Connect With Us</h6>
                
                   
                  <div className="d-flex justify-between">
                  <img src={Vectora} class="img-detail"/>
                   <img src={Vectorb} class="img-detail"/>
                   <img src={Vectorc} class="img-detail"/>
                   <img src={Vectord} class="img-detail"/>
                  </div>
                    
                   

                

            </div>
            <div>
                <h6>Copyright Binar 2022</h6>
                <button class="shapeblue"></button>
            </div>
        </div>
   
  

    )
}

export default Footer;
import axios from "axios";
import { useEffect, useState, item } from "react";

import DetailCar from "../DetailCar";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Col, Row, Button, Form} from "react-bootstrap";
import "./style.css";



const Cars = (props) => {

    
    
const {data}= props;


    return (
       <div className="container container-cars">
        <Row>
        {
            !!data.length && (data.map((item)=> (
          


<Col md={3} className="col-cars" >
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                    
                        <div>
                            <img src={item.image}/>
                        </div>
                        <Card.Text>
                        <div>
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                        </div>
                        </Card.Text>
                        <Link to={`/detailmobil/${item.id}`}>
                        <Button variant="primary">Pilih Mobil</Button>
                        </Link>
                        </Card.Body>
                     
                     </Card>  
                     </Col> 
                     
                     
                ))
            )
        }
        </Row>
       
      </div>
        
    )
    
}

export default Cars;
import React from "react";
import { Form, Row, Col, Container, Card, Button } from "react-bootstrap";
import "./style.css"

const Pencarian = (props) => {

const { handleChangeName, handleSearch } = props;


  return (
    <>
    <Container className="container-pencarian" >
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Nama Mobil</Form.Label>
            <Form.Control placeholder="Ketik nama / tipe mobil" onChange={(e)=>handleChangeName(e)}  />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Kategori</Form.Label>
            <Form.Select disabled>
              <option>Masukkan Kapasitas Mobil</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Harga</Form.Label>
            <Form.Select disabled>
              <option>Masukkan Harga Sewa perhari</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select disabled>
              <option>Disewa</option>
              
            </Form.Select>
          </Form.Group>
        </Col>
        
        <Col>
        <Form.Group>
        <Form.Label></Form.Label>
        <Button className="btn-cari" onClick={handleSearch}>Submit</Button>
        </Form.Group>
        </Col>
        
      </Row>
    </Container>
    </>
  );
};

export default Pencarian;

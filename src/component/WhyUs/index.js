import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import "./style.css"

const WhyUs = () => {
  return (

    <div >
      <div class="container-WhyUs">
        <h1>Why Us</h1>
        <p>Mengapa harus pilih Binar Car Rental?</p>

      </div>
      <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Mobil Lengkap</h5>
        <p class="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawats</p>
       
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Harga Murah</h5>
        <p class="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Layanan 24 Jam</h5>
        <p class="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
       
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Sopir Profesional</h5>
        <p class="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
        
      </div>
    </div>
  </div>
</div>
    </div>
    
  )
}

export default WhyUs


{/* <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <h1 className="text-3xl text-bold">
            Why Us
            </h1>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
    </div> */}

    // <div className="max-w-[1240px] m-auto"> 
    //     <Row xs={4} md={4} gap={2} className="g-4 ">   
    //     <Col>
    //         <Card>
    //         <Card.Body>
    //             <Card.Title>Mobil Lengkap</Card.Title>
    //             <Card.Text>
    //             Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
    //             </Card.Text>
    //         </Card.Body>
    //         </Card>
    //     </Col>
    //     <Col>
    //         <Card>
    //         <Card.Body>
    //             <Card.Title>Card title</Card.Title>
    //             <Card.Text>
    //             This is a longer card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //             </Card.Text>
    //         </Card.Body>
    //         </Card>  
    //     </Col>
    //     <Col>
    //         <Card>
    //         <Card.Body>
    //             <Card.Title>Card title</Card.Title>
    //             <Card.Text>
    //             This is a longer card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //             </Card.Text>
    //         </Card.Body>
    //         </Card>  
    //     </Col>
    //     <Col>
    //         <Card>
    //         <Card.Body>
    //             <Card.Title>Card title</Card.Title>
    //             <Card.Text>
    //             This is a longer card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //             </Card.Text>
    //         </Card.Body>
    //         </Card> 
    //     </Col>
    //     </Row>
    // </div>
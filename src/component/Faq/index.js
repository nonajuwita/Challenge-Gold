import React from "react";
import "./style.css"

const Faq = () => {
  return (
    <div class="container-faq">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg">
            <h1>Frequently Asked Question</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div class="col-lg">
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example">
            
              <option selected>Apa saja syarat yang dibutuhkan?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example">
            
              <option selected>Berapa hari minimal sewa mobil lepas kunci?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example">
            
              <option selected>Berapa hari sebelumnya sabaiknya booking sewa mobil?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example">
            
              <option selected>Apakah Ada biaya antar-jemput?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example">
            
              <option selected>Bagaimana jika terjadi kecelakaan</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

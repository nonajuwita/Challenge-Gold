import React from 'react'
import Benner from '../../component/Benner'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import Pencarian from '../../component/Pencarian'
import Cars from '../Cars'
import axios from "axios";
import { useEffect, useState, item } from "react";
import './style.css'

const CariMobil = () => {

    const [data,setdata]=useState([]);
    const [fdata,setFdata]=useState([]);
    const [name,setName]=useState("");
    const [notFound, setNotFound ] = useState(false)


    // console.log('data ini adalah',data);

    useEffect(() => {
        axios
          .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
          .then((res) => setdata(res.data))

          .catch((err) => console.log(err));
      }, []);
    //   console.log("data ini namee", name)

    const handleChangeName = (e) =>{
        setName(e.target.value);
        if (!e.target.value.length) {
          setFdata([])
          setNotFound(false)
        }
      }
      const handleSearch = () => {
        const newArr = data.filter((e) => e.name === name)
        if (!newArr.length) {
          setNotFound(true)
        }
          setFdata(newArr)  
      }
      

      const props = {
        handleChangeName,
        handleSearch,
      }


  return (
    <div>
        <Navbar/>
        <Pencarian {...props}/>
        <Benner/>
        {!!notFound && <p className='data-tidak-ditemukan'> Data tidak ditemukan!</p>}
        <Cars data = {!fdata.length ? data : fdata} {...props} /> 

        <Footer/>
    </div>
  )
}

export default CariMobil
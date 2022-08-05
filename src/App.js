import Cars from "./pages/Cars";
import DetailCar from "./pages/DetailCar";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Benner from "./component/Benner";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Pencarian from "./component/Pencarian"
import CariMobil from "./pages/CariMobil";


function App (){

  return(

    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carimobil" element={<CariMobil />} />
        <Route path="/detailmobil/:id" element={<DetailCar />}/>
      </Routes>

    </div>
  )
}

export default App;
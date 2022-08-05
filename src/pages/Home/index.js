import Benner from "../../component/Benner";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Services from "../../component/Services";
import WhyUs  from "../../component/WhyUs";
import Testimonial from "../../component/Testimonial";
import Faq from "../../component/Faq";
const Home = () => {

    return (
       <div>
    
        <Navbar/>
        <Benner/>
        <Services/>
        <WhyUs/>
        <Testimonial/>
        <Faq/>
        
        <Footer/>
       </div> 
    )
}

export default Home;


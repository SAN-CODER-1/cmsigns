// import {motion} from "framer-motion"
import "./footers.css"; 
import { Link} from "react-router-dom";
function Footer() {

  return (
    <>
 <footer>
 <footer className="footer">
      {/* Quick Links */}
      <div className="footer-links"  >
        <a href="/">Home</a>
        <a href="/service">Services</a>
        <a href="/contact">Contact</a>
        <div className="socialmedias">
        <h3>|| Follow us:</h3>
      
      <Link to="/"><img style={{height:"35px"}} src="./imgs/insta.webp" alt="" /></Link> 
      <Link to="/"> <img style={{height:"35px"}} src="./imgs/whatsappicon.webp" alt="" /></Link> 
      <Link to="/"> <img style={{height:"35px"}} src="./imgs/Facebookicon.png" alt="" /></Link>        
          </div> 
      
      </div>

      {/* Copyright & Developer Info */}
      <p>
        © {new Date().getFullYear()} All Rights Reserved | Designed & Developed by <strong>San</strong>
      </p>
    </footer>
 </footer>

    </>

  );
}
export default Footer;
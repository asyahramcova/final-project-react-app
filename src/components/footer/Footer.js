import {Link} from "react-router-dom";
import React  from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

import "./footer.css";

const Footer = () => {

return (
 <> 
<footer>
    <div className="footer-wrapper">
    <div  className="footer-container">
        <div className="footer-links">
        <h4>Клиентам</h4>
          <Link to="/services" >Программы</Link> 
          <Link to="/steps" >Этапы работы</Link> 
          <Link to="/services" >Помощь в переезде</Link> 
    
        </div>

        <div className="footer-links"  >
          <h4>Наша компания</h4>
          <Link to="/about" >О нас</Link>
          <Link to="/sliders" >Отзывы о нас</Link>
          <Link to="" >Наши достижения</Link>  

      </div>
      <div className="footer-links"  >
        <h4>Следите за нами</h4>
        <div className="media" >
          <a href="/" >
            <AiFillLinkedin className="media-icon"   />
          </a>
          <a href="/" >
            <AiFillInstagram   className="media-icon"  />
          </a>
          <a href="/" >
            <AiFillFacebook   className="media-icon"  />
          </a>
          <a href="/" >
            <AiFillTwitterCircle  className="media-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
</>  
)

};
export default Footer;
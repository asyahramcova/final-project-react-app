import {Link} from "react-router-dom";
import { useState , useRef } from "react";
import UseClickOut from "../hooks/useClickOut";
import "./Navbar.css";



const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);
const menuRef = useRef(null);
UseClickOut(menuRef, () =>{
  setMenuOpen(false);
 });

  return ( 
    <>
        <nav>
        <Link to="/" className="title"> <span style={{color:"var(--yellow"}} >Move</span> With </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)} ref = {menuRef}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""} ref = {menuRef}>
          <Link to="/about" className="nav-link" >О нас</Link>
          <Link to="/services" className="nav-link" >Услуги</Link> 
          <Link to="/contacts" className="nav-link" >Контакты</Link> 
      
        </ul>
      </nav>
    </>
  )
  }

export default Navbar ;
import logo_rhmo3d from "../../../public/images/rhmo3d-logo.svg"
import mail from "../../../public/images/mail-icon.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navbarh = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("SCROLL", scroll)
  return (
    <div>
      <div className="header_top">
        <div className="container">
          <div className="d-flex justify-content-between items-center align-items-center ">
            
            <div>
              <div className="logo">
                <a href="index.html">
                  <img alt="logo" className='logo-rcmo3d' src={logo_rhmo3d}/></a></div>
            </div>
                
            <div className="call_text">
              <a href="#">
                <img alt="mail" src={mail}/>
                <span className="call_text_left">
                  <a  href="mailto: business@fioresglobal.com">business@fioresglobal.com</a>
                </span>
              </a>
            </div>
          
          </div>
        </div>
      </div>
      <Navbar bg="light" expand="lg" variant="light" className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100 navstyle" fixed="top" id={scroll ? "scroll": "none"}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-item nav-link active" to="/">HOME <span className="sr-only">(current)</span></NavLink>
            <NavLink className="nav-item nav-link" to="/team">TEAM</NavLink>
            <NavLink className="nav-item nav-link" to="/services">SERVICES</NavLink>
            <NavLink className="nav-item nav-link" to="/about">ABOUT</NavLink>
            <NavLink className="nav-item nav-link" to="/pricing">PRICING</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navbarh

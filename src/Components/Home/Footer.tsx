import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div>
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="social_icon">
            <ul className="d-flex footer-wraper">
              <li className="footer-links"><a  href="https://www.linkedin.com/company/fioresglobal/mycompany/?viewAsMember=true" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
              <li className="footer-links"><a href="https://instagram.com/fioresglobal?igshid=NTc4MTIwNjQ2YQ==" target="_blank"><FontAwesomeIcon icon={faInstagram} /> </a></li>
              <li className="footer-links"><a href="https://fioresglobal.com/" target="_blank"><FontAwesomeIcon icon={faGlobe} /></a></li>
            </ul>
          </div>
          <p className="lorem_ipsum_text">RHIMO3D is dedicated to introducing advancements in healthcare through laser scanning and 3D modeling. Our focus is on developing innovative imaging systems and providing affordable services, along with software support to hospitals and clinics. Our team includes a group of skilled full stack developers.</p>
        </div>
      </div>
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">Copyright 2019 All Right Reserved By.<a href="https://fioresglobal.com/"> RHMO3D</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
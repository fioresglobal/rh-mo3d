import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../public/images/Asset 14.svg"
import Contactus from "./Contactus";

const Footer = () => {
  return (
    <div>
      <div className="d-flex ">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center footer-co-wraper ">
            <div className="col-md-4 col-sm-12">
              <div className="footer_logo">
                <a href="https://fioresglobal.com/"><img src={logo} alt="logo" />
                </a>
                </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <Contactus/>
                  </div>
                </div>
                </div>

      </div>
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="social_icon">
            <ul className="d-flex footer-wraper justify-content-center">
              <li className="footer-links"><a rel="noopener" title="linkedin" href="https://www.linkedin.com/company/fioresglobal/mycompany/?viewAsMember=true" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
              <li className="footer-links"><a rel="noopener" title="instagram" href="https://instagram.com/fioresglobal?igshid=NTc4MTIwNjQ2YQ==" target="_blank"><FontAwesomeIcon icon={faInstagram} /> </a></li>
              <li className="footer-links"><a rel="noopener" title="web" href="https://fioresglobal.com/" target="_blank"><FontAwesomeIcon icon={faGlobe} /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">Copyright 2023 All Right Reserved By.
            <a href="https://fioresglobal.com/"> RHMO3D</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer

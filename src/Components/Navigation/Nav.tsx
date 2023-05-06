import logo_rhmo3d from "../../../public/images/rhmo3d-logo.svg"
import mail from "../../../public/images/mail-icon.png";
import call from "../../../public/images/call-icon.png";
import map from "../../../public/images/map-icon.png"

const Nav = () => {
  return (
    <div>
        <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <div className="contact_main">
                <div className="contact_left">
                  <div className="call_text"><a href="#">
                    <img alt="call" src={call}/>
                    <span className="call_text_left">+01 1234567890</span></a></div>
                </div>
                <div className="contact_right">
                  <div className="call_text">Make an appointment</div>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="logo">
                <a href="index.html">
                  <img alt="logo" className='logo-rcmo3d' src={logo_rhmo3d}/></a></div>
            </div>
            <div className="col-sm-5">
              <div className="contact_main">
                <div className="contact_left">
                  <div className="call_text"><a href="#">
                    <img alt="mail" src={mail}/>
                    <span className="call_text_left">business@fioresglobal.com</span></a></div>
                </div>
                <div className="contact_right">
                  <div className="call_text"><a href="#">
                    <img alt="map" src={map}/><span className="call_text_left">+01 9876543210</span></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="index.html">HOME</a>
            <a className="nav-item nav-link" href="services.html">SERVICES</a>
            <a className="nav-item nav-link" href="about.html">ABOUT</a>
            <a className="nav-item nav-link" href="pricing.html">PRICING</a>
            <a className="nav-item nav-link" href="contact.html">CONTACT US</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
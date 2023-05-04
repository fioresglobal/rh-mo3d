import React from 'react'

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
                    <img src="images/call-icon.png"/>
                    <span className="call_text_left">+01 1234567890</span></a></div>
                </div>
                <div className="contact_right">
                  <div className="call_text">Make an appointment</div>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="logo"><a href="index.html"><img src="images/logo.png"/></a></div>
            </div>
            <div className="col-sm-5">
              <div className="contact_main">
                <div className="contact_left">
                  <div className="call_text"><a href="#">
                    <img src="images/mail-icon.png"/><span className="call_text_left">Demo@gmail.com</span></a></div>
                </div>
                <div className="contact_right">
                  <div className="call_text"><a href="#">
                    <img src="images/map-icon.png"/><span className="call_text_left">+01 9876543210</span></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="index.html">HOME</a>
            <a class="nav-item nav-link" href="services.html">SERVICES</a>
            <a class="nav-item nav-link" href="about.html">ABOUT</a>
            <a class="nav-item nav-link" href="pricing.html">PRICING</a>
            <a class="nav-item nav-link" href="contact.html">CONTACT US</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
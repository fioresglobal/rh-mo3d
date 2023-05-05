import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="join_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="member_text">Want To Be A Member? Join With Us</h1>
            </div>
            <div className="col-md-6">
              <div className="join_bt"><a href="#">SEND</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="social_icon">
            <ul>
              <li><a href="#"><img src="images/fb-icon.png"/></a></li>
              <li><a href="#"><img src="images/twitter-icon.png"/></a></li>
              <li><a href="#"><img src="images/linkdin-icon.png"/></a></li>
              <li><a href="#"><img src="images/instagram-icon.png"/></a></li>
            </ul>
          </div>
          <p className="lorem_ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
        </div>
      </div>
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">Copyright 2019 All Right Reserved By.<a href="https://html.design"> RHMO3D</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
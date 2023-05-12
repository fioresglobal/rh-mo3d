import Light from "../../../public/images/light1.jpg"

const Services = () => {
  return (
    <div className="position-relative">
         {/* <div className="position-absolute cover"></div> */}
        <div style={{
        backgroundImage: `url(${Light})`}}   className="service_section layout_padding dark">
        <div className="container position-relative container-wrap ">
          <h1 className="services_text">Our Services</h1>
          <p className="dolor_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
          <div className="service_section_2">
            <div className="row">
              <div className="col-sm-4">
                <div className="image_3"><img alt="image" src="images/img-3.png"/></div>
                <h1 className="classNameic_text">classNameIC HAIR CUT</h1>
                <p className="consectetur_text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <div className="read_bt_main">
                  <div className="read_bt"><a href="#">Read More</a></div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="image_3"><img alt="img" src="images/img-4.png"/></div>
                <h1 className="classNameic_text">classNameIC HAIR CUT</h1>
                <p className="consectetur_text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <div className="read_bt_main">
                  <div className="read_bt"><a href="#">Read More</a></div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="image_3"><img alt="img" src="images/img-5.png"/></div>
                <h1 className="classNameic_text">classNameIC HAIR CUT</h1>
                <p className="consectetur_text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <div className="read_bt_main">
                  <div className="read_bt"><a href="#">Read More</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
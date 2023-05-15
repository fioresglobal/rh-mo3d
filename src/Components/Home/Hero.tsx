import slider1 from "../../../public/images/hero2.png"

const Hero = () => {
  return (
    <div className="hero-bg">
      <br />
      <div className="d-flex flex-column flex-md-row align-items-center hero-wraper justify-content-md-center">
        <div className="d-flex flex-column align-items-center align-items-md-start hero-desc-wraper">
          <h1 className="hero-title">Enhance Your Rhinoplasty Experience with 3D Simulation - No Extra Scanners Needed!</h1>
        </div>
        <img className="hero-img mt-3 mt-md-0 ml-md-5" src={slider1} alt="rhimo3d" />

      </div>
    </div>
  );
}

export default Hero;

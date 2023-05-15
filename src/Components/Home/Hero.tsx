import slider1 from "../../../public/images/slider-new.svg"
const Hero = ()=> {  
        return (
            <div className="hero-bg">
                <br/>
            <div className="d-flex flex-column flex-md-row align-items-center hero-wraper justify-content-md-center">
                <div className="d-flex flex-column align-items-center align-items-md-start hero-desc-wraper">
                <h1 className="hero-title">RHIMO3D</h1>
                <h3 className="hero-description">RHIMO3D is dedicated to introducing advancements in healthcare through laser scanning and 3D modeling. Our focus is on developing innovative imaging systems and providing affordable services, along with software support to hospitals and clinics. Our team includes a group of skilled full-stack developers.</h3>
                </div>
                <img className="hero-img mt-3 mt-md-0 ml-md-5" src={slider1} alt="rhimo3d"/>
            </div>
            </div>
        );
    }
export default Hero;

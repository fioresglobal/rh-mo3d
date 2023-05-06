import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import comp from "../../../public/images/comp.jpg"
const Hero = ()=> {  
        return (
            <div>
            <Carousel  dynamicHeight={false}  emulateTouch={true} showThumbs={false} axis="vertical" >
                <div>
                    <img className='slider-image' src={comp} />
                    <p className="legend">Rhmo3d</p>
                    
                </div>
                <div>
                    <img src={comp} />
                    <p className="legend">Face simulation</p>
                </div>
                <div>
                    <img src={comp} />
                    <p className="legend">Rhmo3d</p>
                </div>
            </Carousel>
            </div>
        );
    }
export default Hero;

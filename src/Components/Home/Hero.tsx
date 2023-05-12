import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import comp from "../../../public/images/comp.jpg"
import slider1 from "../../../public/images/Desktop2.svg"
const Hero = ()=> {  
        return (
            <div>
            <Carousel   dynamicHeight={false}  emulateTouch={true} showThumbs={false} axis="vertical" >
                <div className='slider-mar'>
                    <img alt='slider' className='slider-image' src={slider1} />
                    <p className="legend">Rhmo3d</p>
                </div>
                <div>
                    <img alt='slider' src={comp} />
                    <p className="legend">Face simulation</p>
                </div>
                <div>
                    <img alt='comp' src={comp} />
                    <p className="legend">Rhmo3d</p>
                </div>
            </Carousel>
            </div>
        );
    }
export default Hero;

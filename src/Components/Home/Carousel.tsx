import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import comp from "../../assets/images/comp.jpg"
const Slider = ()=> {  
        return (
            <Carousel emulateTouch={true} showThumbs={false}>
                <div>
                    <img className='slider-image' src={comp} />
                    
                </div>
                <div>
                    <img src={comp} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={comp} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
export default Slider;

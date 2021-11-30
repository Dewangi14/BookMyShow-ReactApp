import Carousel  from "react-bootstrap/Carousel";
import "./SliderImages.css";

function SliderImages() {
  return (
    <div style={{margin:"10px"}}>

        <Carousel fade style={{height:"400px", width:"100%"}} interval="3000"> 
                <Carousel.Item>
                    <img style={{height:"400px"}}
                    className="d-block w-100"
                    src="./assets/sunset.jpeg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>MALDIVES</h3>
                    <p>Take away the best memories to cherish!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:"400px"}}
                    className="d-block w-100"
                    src="./assets/bg2.jpeg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>BALI</h3>
                    <p>Explore, Discover, Relish.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:"400px"}}
                    className="d-block w-100"
                    src="./assets/lakeC.jpeg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>PONDYCHERRY</h3>
                    <p>Live the choicest moments of your life here!</p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
      
     
    </div>
  );
}

export default SliderImages;


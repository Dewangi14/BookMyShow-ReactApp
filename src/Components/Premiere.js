import Carousel  from "react-bootstrap/Carousel";
import Card  from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";


function Premiere() {
  return (
    <div style={{marginBottom:"5%", background:"rgb(70, 130, 180)", padding:"5%"}}>

        <div style={{display:"flex" , marginBottom:"5%"}}>
            <div>
                <img src="./assets/playBtn2.jpeg" style={{height:"70px", width:"70px"}}/>
            </div>
            <div style={{paddingLeft:"1%"}}>
                <h2>PREMIERE</h2>
               <p>Watch new movies at home, every Friday</p>
            </div>
        </div>
        <h4>Premiere</h4>
        <h6>Brand new releases every Friday</h6>
        <Carousel> 
                <Carousel.Item>
                    <CardGroup style={{display:"flex", gap:"20px", justifyContent:"space-around"}}>
                        <Card bg="dark" text="white"> 
                            <Card.Img variant="top" src="./assets/eye.jpeg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    Write content here.
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card bg="dark" text="white">
                            <Card.Img variant="top" src="./assets/eye.jpeg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                Write content here.
                                </Card.Text>
                                </Card.Body>
                            
                        </Card>
                        <Card bg="dark" text="white">
                            <Card.Img variant="top" src="./assets/eye.jpeg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                 Write content here.
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                    </CardGroup>
                </Carousel.Item>

            
        </Carousel>
      
     
    </div>
  );
}

export default Premiere;


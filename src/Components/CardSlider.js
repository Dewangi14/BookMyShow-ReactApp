import Carousel  from "react-bootstrap/Carousel";
import Card  from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";


function CardSlider() {
  return (
    <div style={{margin:"10%", background:"rgb(70, 130, 180)",padding:"5%"}}>

        <Carousel interval="2000" indicators = {false} variant="dark"> 
                <Carousel.Item>
                    <CardGroup style={{display:"flex", gap:"20px", justifyContent:"space-around"}}>
                        <Card className="bg-white text-white">
                            <Card.Img src="./assets/heart.jpeg" alt="Card image"/>
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    Content can be written here.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>

                        <Card className="bg-white text-white" >
                            <Card.Img src="./assets/water.jpeg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                Content can be written here.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>

                        <Card className="bg-white text-white" >
                            <Card.Img src="./assets/whiteF.jpeg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                Content can be written here.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </CardGroup>
                </Carousel.Item>

                <Carousel.Item >
                        <CardGroup style={{display:"flex", gap:"20px", justifyContent:"space-around"}}> 
                                <Card className="bg-white text-white" >
                                    <Card.Img src="./assets/water.jpeg" alt="Card image" />
                                    <Card.ImgOverlay>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        Content can be written here.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>

                                <Card className="bg-white text-white" >
                                    <Card.Img src="./assets/heart.jpeg" alt="Card image"/>
                                    <Card.ImgOverlay>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        Content can be written here.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>

                                <Card className="bg-white text-white" >
                                    <Card.Img src="./assets/whiteF.jpeg" alt="Card image"/>
                                    <Card.ImgOverlay>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        Content can be written here.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                        </CardGroup>
                </Carousel.Item>

                <Carousel.Item>
                    <CardGroup style={{display:"flex", gap:"20px", justifyContent:"space-around"}}>
                            <Card className="bg-white text-white" >
                                <Card.Img src="./assets/water.jpeg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                    Content can be written here.
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                            </Card>

                            <Card className="bg-white text-white" >
                                <Card.Img src="./assets/whiteF.jpeg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                    Content can be written here.
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                            </Card>

                            <Card className="bg-white text-white" >
                                <Card.Img src="./assets/heart.jpeg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                    Content can be written here.
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                    </CardGroup>
                </Carousel.Item>
        </Carousel>
      
     
    </div>
  );
}

export default CardSlider;


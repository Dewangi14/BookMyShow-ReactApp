import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card  from "react-bootstrap/Card";
// import data from "./movies.json";
import { useState, useEffect} from "react";
import axios from "axios";


function AllMoviesFetch() {

    //to get data from express application
    const [data, setData] = useState([]);

    useEffect(async () => {
        try 
        {
          const response = await axios.get('https://book-my-show-backend-dewangi.herokuapp.com/movies');  //express mongoDB URL
          console.log(response);
          setData(response.data);  //to fetch ONLY data section of response.
        } 
        catch (error) 

        {
           console.error(error);
        }
         
    }, [])


    return (
      
        <div>
             <Container style={{padding:"8%"}}>
                <Row style={{textAlign: "center"}}>
                    {data.map((mov) =>

                        <Col id={mov._id} key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                                <Card style={{cursor:"pointer"}} onClick={() => window.location.href="/movies/"+mov._id} bg="dark" text="white"> 
                                    <Card.Img variant="top" src={mov.imageurl} />
                                    <Card.Body>
                                        <Card.Title>{mov.title}</Card.Title>
                                        <Card.Text>
                                            {mov.actor}
                                        </Card.Text>
                                    </Card.Body>
                                    
                                </Card>
                        </Col>
                    )}
                </Row>     
            </Container>
                   
        </div>
     
      
    );
  }
  
export default AllMoviesFetch;
  
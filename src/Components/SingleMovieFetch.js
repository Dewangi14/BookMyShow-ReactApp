import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card  from "react-bootstrap/Card";
// import data from "./movies.json";
import { useParams } from "react-router";
import axios from "axios";
import {useState, useEffect} from "react";


function SingleMovieFetch() {
    const {movid} = useParams();

    const [data, setData] = useState([]);
    useEffect(async() =>{
        try 
        {
          const response = await axios.get(`https://book-my-show-backend-dewangi.herokuapp.com/movies/${movid}`);  //express mongoDB URL|| using templates to fetch movid value as params
          console.log(response);
          setData([response.data]); //data:backend-data //to fetch ONLY data section of response. respose.data returns an object , hence need to convert to array for map function
        } 
        catch (error) 

        {
           console.error(error);
        }

    },[])

    return (
    
        <div>
             <Container style={{padding:"8%"}}>
                <Row style={{textAlign: "center"}}>
                    {data.map((mov) => {

                        return (

                            <Col id={mov._id} key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                                <Card bg="dark" text="white"> 
                                    <Card.Img variant="top" src={mov.imageurl} />
                                    <Card.Body>
                                        <Card.Title>{mov.title}</Card.Title>
                                        <Card.Text>
                                            {mov.actor}
                                        </Card.Text>
                                    </Card.Body>
                                    
                                </Card>
                        </Col>

                        )

                    })}
                </Row>     
            </Container>
                   
        </div>
     
      
    );
  }
  
export default SingleMovieFetch;
  
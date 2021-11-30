import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


function Footer() {
    return (
      <div style={{background:"rgb(54, 69, 79)"}}>
          <Container>
              <Row style={{padding:"3%"}}>
                  <Col xs={2}>
                    col 1
                  </Col>

                  <Col xs={4}>
                   col 2
                  </Col>

                  <Col xs={6} style={{display:"flex", flexDirection:"row-reverse"}}>
                     <button style={{background:"rgb(238, 75, 43)", padding:"2%", borderRadius:"10px"}}>Contact Today</button>
                  </Col>

              </Row>
              <Row style={{textAlign:"center", padding:"3%"}}>
                  <Col>
                   col 1
                  </Col>

                  <Col>
                   col 2
                  </Col>

                  <Col> 
                   col 3
                  </Col>
              </Row>
          </Container>
      </div>
    );
  }
  
  export default Footer;
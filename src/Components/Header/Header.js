import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#">BookMyShow</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/movies"> All Movies</Nav.Link>
                    <Nav.Link href="/register"> User Registration</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>

        <Container fluid style={{background:"black", color:"white", height:"30px", paddingLeft:"5%"}}>

               <div> 
                    <a style={{cursor:"pointer"}} onClick={()=> window.location.href="./movies"}>Movies &nbsp;&nbsp;&nbsp; </a>
                    <a> Streams &nbsp;&nbsp;&nbsp;</a>
                    <a> Plays &nbsp;&nbsp;&nbsp;</a>
                    <a> Sports &nbsp;&nbsp;&nbsp;</a>
                    <a> Activities &nbsp;&nbsp;&nbsp;</a>
                    <a> Buzz &nbsp;&nbsp;&nbsp;</a>
               </div> 

        </Container>
    </div>
  );
}

export default Header;

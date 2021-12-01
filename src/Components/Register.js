import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Register() {
  const [UserName, setUserName] = useState(""); //successfully storing frontend values in variables
  const [EmailAddress, setEmailAddress] = useState(""); //successfully storing frontend values in variables
  const [passwordd, setPasswordd] = useState("");
  // console.log(EmailAddress, passwordd);

  //self-made function

  function ClearInput() {
    setUserName("");
    setEmailAddress("");
    setPasswordd("");
  }

  async function UserPost() {
    console.log(UserName, EmailAddress, passwordd);

    const userDetails = {
      username: UserName,
      email: EmailAddress, //same variable names to store data as given in schema, postman
      password: passwordd,
    };

    console.log(userDetails);
    const response = await axios
      .post(`http://localhost:5003/user-register`, userDetails)
      .then((data) => {
        Swal.fire({
          title: `<strong>${data.data.message}</strong>`,
          icon: "success",

          showCloseButton: true,
        });
        ClearInput();
      })
      .catch((err) => {
        Swal.fire({
          title: `<strong>${err.message}</strong>`,
          icon: "error",

          showCloseButton: true,
        });
      }); 
    // console.log(response);
  }

  return (
    <div>
      <Container
        style={{
          paddingLeft: "20%",
          paddingRight: "20%",
          paddingTop: "10%",
          paddingBottom: "10%",
        }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={EmailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={passwordd}
              onChange={(e) => setPasswordd(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={UserPost}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Register;

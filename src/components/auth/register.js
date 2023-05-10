import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

function Register(props) {
    const [name, setname] = useState();
    const [Lname, setLname] = useState();
    const [email, setemail] = useState();
    const [pwd, setpwd] = useState();
    const [cpwd, setcpwd] = useState();
    const [error, seterror] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pwd === cpwd) {
            const addUser = async () => {
                const formData = new FormData();
                formData.append('firstname', name);
                formData.append('lastname', Lname);
                formData.append('email', email);
                formData.append('password', pwd);
                formData.append('isdamin', "0");

                await axios.post(`http://localhost:8000/api/store/user`, formData).then(({ data }) => {
                    //success
                    seterror(<Alert variant="success">{data.msg}</Alert>)
                }).catch(({ response }) => {
                    seterror(<Alert variant="danger">{response}</Alert>)
                })
            }
            addUser();
        } else {
            return seterror(<Alert variant="danger">Password doesn't match!</Alert>);
        }
    }
    return (
        <>
            <Offcanvas {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Register</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" onChange={(e) => { setname(e.target.value) }} />
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" onChange={(e) => { setLname(e.target.value) }} />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => { setpwd(e.target.value) }} />
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm  password" onChange={(e) => { setcpwd(e.target.value) }} />
                        </Form.Group>
                        {error}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
export default Register;

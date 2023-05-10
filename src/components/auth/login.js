import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Login(props) {
    const [email, setemail] = useState();
    const [pwd, setpwd] = useState();
    const [error, seterror] = useState();
    const navto = useNavigate();
    const[RememberMe,setRememberMe]=useState();



    const handleSubmit = (e) => {
        e.preventDefault();
            const addUser = async () => {
                const formData = new FormData();
                formData.append('email', email);
                formData.append('password', pwd);

                await axios.post(`http://localhost:8000/api/auth/user`, formData).then(({ data }) => {
                    //success
                    
                    if(data.status === 400){
                        seterror(<Alert variant="danger">{data.msg}</Alert>)
                    }else{
                        console.log(data)
                        if(data.isadmin === "1"){
                            navto("/dashboard");
                            if (typeof window.localStorage !== 'undefined') {
                                sessionStorage.setItem('ss', false);
                                localStorage.setItem('ls', false);
                                if(RememberMe){
                                    localStorage.setItem('ls', true);
                                    data.map((item)=>{
                                        console.log("localstorage");
                                        localStorage.setItem('name', item.firstname);
                                        localStorage.setItem('last', item.lastname);
                                        localStorage.setItem('email', item.email);
                                        localStorage.setItem('id', item.id);
                                        localStorage.setItem('isadmin', item.isadmin);
                                        localStorage.setItem('isconnected', 1);
                                    })
                                }else{
                                    if(sessionStorage){
                                        data.map((item)=>{
                                            sessionStorage.setItem('ss', true);
                                            console.log("sessionstorage");
                                            sessionStorage.setItem('name', item.firstname);
                                            sessionStorage.setItem('last', item.lastname);
                                            sessionStorage.setItem('email', item.email);
                                            sessionStorage.setItem('id', item.id);
                                            sessionStorage.setItem('isadmin', item.isadmin);
                                            sessionStorage.setItem('isconnected', 1);
                                        })
                                    }else{
                                        alert("Sorry, your browser does not support session storage.");
                                    }
                                }
                            } else {
                                alert("Sorry, your browser does not support session storage.");
                            }
                        }else{
                            if (typeof window.localStorage !== 'undefined') {
                                sessionStorage.setItem('ss', false);
                                localStorage.setItem('ls', false);
                                if(RememberMe){
                                    localStorage.setItem('ls', true);
                                    data.map((item)=>{
                                        console.log("localstorage");
                                        localStorage.setItem('name', item.firstname);
                                        localStorage.setItem('last', item.lastname);
                                        localStorage.setItem('email', item.email);
                                        localStorage.setItem('id', item.id);
                                        localStorage.setItem('isadmin', item.isadmin);
                                        localStorage.setItem('isconnected', 1);
                                    })
                                }else{
                                    if(sessionStorage){
                                        data.map((item)=>{
                                            sessionStorage.setItem('ss', true);
                                            console.log("sessionstorage");
                                            sessionStorage.setItem('name', item.firstname);
                                            sessionStorage.setItem('last', item.lastname);
                                            sessionStorage.setItem('email', item.email);
                                            sessionStorage.setItem('id', item.id);
                                            sessionStorage.setItem('isadmin', item.isadmin);
                                            sessionStorage.setItem('isconnected', 1);
                                        })
                                    }else{
                                        alert("Sorry, your browser does not support session storage.");
                                    }
                                }
                            } else {
                                alert("Sorry, your browser does not support session storage.");
                            }

                            seterror(<Alert variant="info">you are not a admin</Alert>)
                        }
                    }
                }).catch(({ response }) => {
                    seterror(<Alert variant="danger">{response}</Alert>)
                })
            }
            addUser();
    }
    return (
        <>
            <Offcanvas {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Login</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => { setpwd(e.target.value) }}/>
                            <span>I forget my password?</span>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Remember me" onChange={(e)=>{setRememberMe(e.target.checked)}} />
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
export default Login;
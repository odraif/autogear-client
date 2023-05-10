
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Login from '../auth/login';
import Register from '../auth/register';
// import Button from 'react-bootstrap/Button';
import Brnads from '../brands/Brands';
import './navbar-style.css';

function NavbarScroll() {
    const [modalShow, setModalShow] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const[logged,setlogged]=useState(false);
 const name = window.localStorage.getItem('name');

    

    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand><img src='/logo/logo_gear_white.png' className='logo-brand' alt='logo' /></Navbar.Brand>
                    <Link></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link variant="outline-secondary">
                                <Link to="/" className='text-decoration-none gray-font-color'>Home</Link>
                            </Nav.Link>

                            <Nav.Link onClick={() => setModalShow(true)}>Brands</Nav.Link>
                            {/* <Button variant="outline-secondary" className="me-3" >Home</Button>
                            <Button variant="outline-secondary" className="me-3" onClick={() => setModalShow(true)}>Brands</Button> */}
                            <NavDropdown title={name} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    {name}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {
                                logged
                                    ? <Nav.Link onClick={() => setShowLogin(true)}>{localStorage.getItem("name")} {localStorage.getItem("last")}</Nav.Link>
                                    : (<>
                                        <Nav.Link onClick={() => setShowLogin(true)}>Login</Nav.Link>
                                        <Nav.Link onClick={() => setShowRegister(true)}>Register</Nav.Link>
                                    </>)
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* show brand modal */}
            <Brnads
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            {/* show login */}
            <Login show={showLogin}
                onHide={() => setShowLogin(false)}
                placement="end" />
            {/* show Register */}
            <Register
                show={showRegister}
                onHide={() => setShowRegister(false)}
                placement="end" />
        </>
    );
}

export default NavbarScroll;

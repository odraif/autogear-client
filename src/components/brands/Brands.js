import axios from 'axios';
import { useEffect, useState } from 'react';
// import { Stack } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import "./brand-style.css";


function Brands(props) {

    const [data, setdata] = useState();


    useEffect(() => {
        function get_brand() {
            axios.get("http://127.0.0.1:8000/api/index/brand").then(({ data }) => {
                setTimeout(() => setdata(data), 300)
                console.log(data);

            })
        }
        get_brand();

    }, [])

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Brands
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="d-flex flex-wrap justify-content-center me-auto align-items-center">

                        {
                            data &&
                            data.map((item) => (
                                <div key={item.id} >
                                    <Link to={"/brand/"+item.name+"/"}>
                                        <div className='d-flex justify-content-center brand-logo'>
                                            <img src={'http://127.0.0.1:8000/cars-logos/' + item.logo} className='w-50' alt={item.name} />
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Brands;
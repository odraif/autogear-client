import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './carcategory.css';
function CarCategory() {
    const [data, setdata] = useState();
    useEffect(() => {
        function get_category() {
            axios.get("http://127.0.0.1:8000/api/index/category").then(({ data }) => {
                setTimeout(() => setdata(data), 300)
                console.log(data);
            })
        }
        get_category();

    }, [])
    return (
        <>
            {/* <div className="d-flex flex-warp w-75 m-auto "> */}
            <Row xs={1} md={2} lg={4} className="g-4 w-75 m-auto">
                {
                    data &&
                    data.map((item) => (
                        <Col>
                            <div key={item.id}>
                                <Link to={"/category/"+item.category+"/"} className='text-decoration-none'>
                                    <Card className="m-card">
                                        <Card.Img variant="top" src={'http://127.0.0.1:8000/cars-catrgories/' + item.image} alt={item.category} />
                                        <Card.Body>
                                            <Card.Title className="titre-center">{item.category}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                    ))
                }
            </Row>
            {/* </div> */}
            {/* {
                data &&
                data.map((item) => (
                    <Card className="bg-dark text-black w-50 d-flex flex-wrap" key={item.id}>
                        <div  >
                            <Card.Img src={'http://127.0.0.1:8000/cars-catrgories/' + item.image} alt={item.category} />
                            <Card.ImgOverlay>
                                <Card.Title>{item.category}</Card.Title>

                            </Card.ImgOverlay>
                        </div>
                    </Card>
                ))
            } */}

        </>
    );
}

export default CarCategory;
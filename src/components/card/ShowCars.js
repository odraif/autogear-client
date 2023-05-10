import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function ShowCars() {
    const [data, setdata] = useState();


    useEffect(() => {
        function get_cars() {
            axios.get("http://127.0.0.1:8000/api/index/cars").then(({ data }) => {
                setTimeout(() => setdata(data), 300)
                console.log(data);
            })
        }
        get_cars();

    }, [])
    return (<>
        <Row xs={2} md={4} className="g-4 w-75 m-auto">
            {
                data &&
                data.map((item) => (
                    <Col>
                        <div key={item.id}>
                            <Link to={"/car/"+item.id} className='text-decoration-none'>
                                <Card className="m-card">
                                    <Card.Img variant="top" src={'http://127.0.0.1:8000/cars/' + item.images} alt={item.category} />
                                    <Card.Body>
                                        <Card.Title className="titre-center">{item.name} {item.Model} {item.Year}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                ))
            }
        </Row>
    </>);
}
export default ShowCars;
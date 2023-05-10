import React from 'react';
import NavbarScroll from '../navbar/NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Footer } from '../navbar/footer';
export default function CarByCategory() {
  const [data, setdata] = useState();
  const { Ncategory } = useParams();

  useEffect(() => {
    function get_cars() {
      axios.get("http://127.0.0.1:8000/api/index/cars").then(({ data }) => {
        setTimeout(() => setdata(data), 300)
        console.log(data);
      })
    }
    get_cars();

  }, [])
  return (
    <>
      <NavbarScroll></NavbarScroll>
      <Row xs={1} md={4} className="g-4 w-75 m-auto mt-5">
        {
          data &&
          data.filter((val) => val.category === Ncategory).map((item) => (
            <div key={item.id}>
              <Link to={"/car/"+item.id} className='text-decoration-none'>
              <Col>
                <Card className="m-card text-decoration-none">
                  <Card.Img variant="top" src={'http://127.0.0.1:8000/cars/' + item.images} alt={item.category} />
                  <Card.Body>
                    <Card.Title className="titre-center">{item.name} {item.Model} {item.Year}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              </Link>
            </div>
          ))
        }
      </Row>
      <Footer></Footer>
    </>
  )
}

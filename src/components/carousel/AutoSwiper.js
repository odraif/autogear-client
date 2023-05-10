import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import './carrousel-style.css';
function AutoSwiper() {
  const [data, setdata] = useState();


  useEffect(() => {
    function get_brand() {
      axios.get("http://127.0.0.1:8000/api/index/category").then(({ data }) => {
        setTimeout(() => setdata(data), 300)
        console.log(data);
      })
    }
    get_brand();

  }, [])
  return (
    <Carousel variant="dark" fade interval={1000}>
      {
        data &&
        data.map((item) => (
          <Carousel.Item key={item.id}>
            <Image
              className="d-block w-100 fit-image"
              src={'http://127.0.0.1:8000/cars-catrgories/' + item.image}
              alt=""
              rounded
            />
            <Carousel.Caption>
              <h5>{item.category}</h5>
            </Carousel.Caption>
          </Carousel.Item>

        ))
      }
    </Carousel>
  );
}

export default AutoSwiper;
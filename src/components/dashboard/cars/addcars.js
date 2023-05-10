import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { SideBar } from '../sideBar';

function AddCars() {
    const [brand, setbrand] = useState();
    const [category, setcategory] = useState();
    const [model, setmodel] = useState();
    const [horespower, sethorespower] = useState();
    const [engine, setengine] = useState();
    const [Drivetrain, setDrivetrain] = useState();
    const [consumption, setconsumption] = useState();
    const [weight, setweight] = useState();
    const [speed, setspeed] = useState();
    const [priceN, setpriceN] = useState();
    const [priceU, setpriceU] = useState();
    const [year, setyear] = useState();
    const [image, setimage] = useState();
    const navto = useNavigate()
    const [branddata, setbranddata] = useState();
    const [categorydata, setcategorydata] = useState();


    useEffect(() => {
        function get_brand() {
            axios.get("http://127.0.0.1:8000/api/index/brand").then(({ data }) => {
                setTimeout(() => setbranddata(data), 300)
                console.log(data);

            })
        }
        function get_category() {
            axios.get("http://127.0.0.1:8000/api/index/category").then(({ data }) => {
                setTimeout(() => setcategorydata(data), 300)
                console.log(data);
            })
        }
        get_category();
        get_brand();

    }, [])
    const get_image = (event) => {
        setimage(event.target.files[0]);
    };
    const addCar = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('brand', brand);
        formData.append('category', category);
        formData.append('horespower', horespower);
        formData.append('model', model);
        formData.append('engine', engine);
        formData.append('Drivetrain', Drivetrain);
        formData.append('consumption', consumption);
        formData.append('weight', weight);
        formData.append('speed', speed);
        formData.append('pricefornew', priceN);
        formData.append('priceforused', priceU);
        formData.append('year', year);
        formData.append('images', image);

        await axios.post(`http://localhost:8000/api/store/car`, formData).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.msg
            })
            navto('/dashboard/')
        }).catch(({ response }) => {
            Swal.fire({
                text: response.data.message,
                icon: "error"
            })
        })
    }

    return (<>
        <div className='d-flex'>

            <div className="w-25">
                <SideBar></SideBar>
            </div>
            <div className="w-50 m-auto p-3">
                <Form onSubmit={addCar}>
                    <Form.Group className="mb-3" controlId="formBasic">
                        <Form.Label>Brand</Form.Label>
                        <Form.Select value={brand} onChange={(event) => { setbrand(event.target.value) }}>
                            <option>select the brand</option>
                            {
                                branddata &&
                                branddata.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)
                            }
                        </Form.Select>
                        <Form.Label>Category</Form.Label>
                        <Form.Select value={category} onChange={(event) => { setcategory(event.target.value) }}>
                            <option>select the category</option>
                            {
                                categorydata &&
                                categorydata.map((item) => <option key={item.id} value={item.id}>{item.category}</option>)
                            }
                        </Form.Select>
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" placeholder="model" value={model} onChange={(event) => { setmodel(event.target.value) }} />
                        <Form.Label>horespower</Form.Label>
                        <Form.Control type="text" placeholder="horespower" value={horespower} onChange={(event) => { sethorespower(event.target.value) }} />
                        <Form.Label>engine</Form.Label>
                        <Form.Control type="text" placeholder="engine" value={engine} onChange={(event) => { setengine(event.target.value) }} />
                        <Form.Label>Drivetrain</Form.Label>
                        <Form.Select value={Drivetrain} onChange={(event) => { setDrivetrain(event.target.value) }}>
                            <option>select the Drivetrain</option>
                            <option value="FWD">FWD</option>
                            <option value="RWD">RWD</option>
                            <option value="AWD">AWD</option>
                        </Form.Select>
                        <Form.Label>Cons.L/100km</Form.Label>
                        <Form.Control type="text" placeholder="L/100km" value={consumption} onChange={(event) => { setconsumption(event.target.value) }} />
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="text" placeholder="Weight" value={weight} onChange={(event) => { setweight(event.target.value) }} />
                        <Form.Label>Top speed</Form.Label>
                        <Form.Control type="text" placeholder="Top speed" value={speed} onChange={(event) => { setspeed(event.target.value) }} />
                        <Form.Label>Price for new</Form.Label>
                        <Form.Control type="text" placeholder="Price for new" value={priceN} onChange={(event) => { setpriceN(event.target.value) }} />
                        <Form.Label>Price for used</Form.Label>
                        <Form.Control type="text" placeholder="Price for used" value={priceU} onChange={(event) => { setpriceU(event.target.value) }} />
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="text" placeholder="Year" value={year} onChange={(event) => { setyear(event.target.value) }} />
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={get_image} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    </>);
}
export default AddCars;
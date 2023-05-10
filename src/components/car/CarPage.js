import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import NavbarScroll from '../navbar/NavBar';
import { Footer } from '../navbar/footer';
import"./carpage.css";

export default function CarPage() {
    const [data, setdata] = useState();
    const { id } = useParams()

    useEffect(() => {
        function get_brand() {
            axios.get("http://127.0.0.1:8000/api/show/car/" + id).then(({ data }) => {
                setTimeout(() => setdata(data), 300)
                console.log(data);

            })
        }
        get_brand();

    }, [id])
    return (
        <>
            <NavbarScroll></NavbarScroll>
            {data &&
                data.map((item) => (
                    <>
                        <div key={item.id} className="mt-5" >
                            <img src={'http://127.0.0.1:8000/cars/' + item.images} className="w-50 m-auto d-block" alt="car" />
                            <table className="table table-striped-columns table-bordered w-50 m-auto table-dark">
                                <tbody>
                                    <tr>
                                        <th >Brand</th>
                                        <td >{item.name}</td>
                                    </tr>
                                    <tr>
                                        <th >Model</th>
                                        <td >{item.Model}</td>
                                    </tr>
                                    <tr>
                                        <th >Year</th>
                                        <td >{item.Year}</td>
                                    </tr>
                                    <tr>
                                        <th>Horespower</th>
                                        <td>{item.horespower}HP</td>
                                    </tr>
                                    <tr>
                                        <th>con.L/100KM</th>
                                        <td>{item.Consumption}</td>
                                    </tr>
                                    <tr>
                                        <th>Drivetrain</th>
                                        <td>{item.Drivetrain}</td>
                                    </tr>
                                    <tr>
                                        <th>Engine</th>
                                        <td>{item.engine}</td>
                                    </tr>
                                    <tr>
                                        <th>Weight</th>
                                        <td>{item.weight}KG</td>
                                    </tr>
                                    <tr>
                                        <th>Top speed</th>
                                        <td>{item.speed} KM/H</td>
                                    </tr>
                                    <tr>
                                        <th>Price for new</th>
                                        <td>{item.pricefornew} DH</td>
                                    </tr>
                                    <tr>
                                        <th>Price for used</th>
                                        <td>{item.priceforused} DH</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <Footer></Footer>
                    </>
                ))
            }
        </>
    )
}

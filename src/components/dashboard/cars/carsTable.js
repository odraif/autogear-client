import axios from 'axios';
import { useEffect, useState } from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from 'cdbreact';
import { SideBar } from '../sideBar';
import { CDBIcon, CDBBox } from 'cdbreact';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
function ShowCars() {
    const [data, setdata] = useState();
    const [reload, setreload] = useState(false);

    useEffect(() => {
        function get_cars() {
            axios.get("http://127.0.0.1:8000/api/index/cars").then(({ data }) => {
                setTimeout(() => setdata(data), 300)
                console.log(data);
            })
        }
        get_cars();

    }, [reload])

    function DeleteCar(id,res) {
        setreload(true)
        if(res){
            console.log("SECCUSS " + id);
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    axios.post("http://127.0.0.1:8000/api/delete/car/" + id).then(({ data }) => {
                        Swal.fire({
                            icon: "success",
                            text: data.msg
                        })
                        setreload(false)
                    }).catch(({ response }) => {
                        Swal.fire({
                            text: response.data.message,
                            icon: "error"
                        })
                    })
                }
              })
        }
        

    }
    return (<>
        <div className='d-flex'>
            <div>
                <SideBar></SideBar>
            </div>
            <div className="w-50 m-auto p-3">
                <CDBContainer>
                    <div>
                        <Link to="/dashboard/addcars">
                            <Button variant="success"><CDBIcon icon="plus" /> Add car</Button>
                        </Link>
                    </div>
                    <CDBBox display="block">
                        <CDBTable>
                            <caption>List of cars</caption>
                            <CDBTableHeader>
                                <tr>
                                    <th>Image</th>
                                    <th>Brand</th>
                                    <th>Category</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                    <th colSpan={2}>Actions</th>
                                </tr>
                            </CDBTableHeader>
                            <CDBTableBody>
                                {
                                    data &&
                                    data.map((item) => (
                                        <tr key={item.id}>
                                            <td ><img src={'http://127.0.0.1:8000/cars/' + item.images} alt={item.category} className="w-50" /></td>
                                            <td>{item.name}</td>
                                            <td>{item.category}</td>
                                            <td>{item.Model}</td>
                                            <td>{item.Year}</td>
                                            <td><Link to={"/dashboard/editcar/" + item.id}>
                                                <button className='btn btn-secondary'><CDBIcon icon="edit" />Edit</button>
                                            </Link>
                                            </td>
                                            <td><button type='button' className='btn btn-danger' onClick={async()=>{DeleteCar(item.id,true)}}><CDBIcon icon="trash" />Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </CDBTableBody>
                        </CDBTable>
                    </CDBBox>
                </CDBContainer>
            </div>
        </div>

    </>);
}
export default ShowCars;
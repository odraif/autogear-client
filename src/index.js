import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCars from './components/dashboard/cars/addcars';
import ShowCars from './components/dashboard/cars/carsTable';
import P404 from './PNF404/P404';
import EditCars from './components/dashboard/cars/editcar';
import CarByCategory from './components/category/CarByCategory';
import ShowCarsByBrand from './components/brands/ShowCarsByBrand';
import CarPage from './components/car/CarPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
          <Route path="/" exact="true" element={<Home />} />
          <Route exact="true" path='/category/:Ncategory/' element={<CarByCategory />} />
          <Route exact="true" path='/brand/:Nbrand/' element={<ShowCarsByBrand />} />
          <Route exact="true" path='/car/:id/' element={<CarPage />} />
          <Route exact="true" path='/dashboard' element={<ShowCars></ShowCars>} />
          <Route exact="true" path='/dashboard/addcars' element={<AddCars></AddCars>} />
          <Route exact="true" path='/dashboard/editcar/:id' element={<EditCars></EditCars>} />
          <Route exact="true" path='*' element={<P404></P404>} />
      </Routes>
    </BrowserRouter>
  </>
);



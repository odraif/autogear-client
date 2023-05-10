import NavbarScroll from '../navbar/NavBar';
import AutoSwiper from '../carousel/AutoSwiper';
import CarCategory from '../card/CarCategory';
import ShowCars from '../card/ShowCars';
import { Footer } from '../navbar/footer';
function Home(){
    document.title ="Home";
    return(
        <>
            <NavbarScroll></NavbarScroll>
            <AutoSwiper></AutoSwiper>
            <div className='w-75 m-auto'>
                <h3>Category</h3>
                <hr/>
            </div>
            <CarCategory></CarCategory>
            <div className='w-75 m-auto'>
                <h3>Cars</h3>
                <hr/>
            </div>
            <ShowCars></ShowCars>
            <Footer></Footer>
        </>
    );
}

export default Home;
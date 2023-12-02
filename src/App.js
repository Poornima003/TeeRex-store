import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import WishList from './Pages/WishList';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
<Header/>
   <Routes>

    <Route path='/' element={<Products/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/wishlist' element={<WishList/>}/>

   </Routes>
   <Footer/>

      
    </>
  );
}

export default App;

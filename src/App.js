import { Route,Routes,useNavigate} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/MainSection/Home";
import Products from "./Components/Products/Products";
import Register from "./Components/SignUpPage/Register";
import LogIn from "./Components/LogIn/LogIn";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";
import LoggedProducts from "./Components/LoggedProducts/LoggedProducts";
import LoggedHeader from "./Components/LoggedHeader/LoggedHeader";
import { useEffect } from "react";
import Cart from "./Components/Cart/Cart";
import Favourite from "./Components/Favourites/Favourite";
import Footer from "./Components/Footer/Footer";
import AllProducts from "./Components/AllProducts/AllProducts";
import LoggedAllProducts from "./Components/LoggedAllProducts/LoggedAllProducts";

function App() {
  const navg = useNavigate()
  const currentUser = JSON.parse(localStorage.getItem('currentuserLogged')) || null;
  useEffect(()=>{
    navg("")
  },[currentUser])
  return (
    <div className="app">
      
        <Routes>
            <Route path="/" exact element={
              currentUser ? <div>
                <LoggedHeader />
                <Home />
                <LoggedProducts />
                <Footer />
                
              </div> : <div>
                <Header />
                <Home />
                <Products />
                <Footer />
              </div>}
             />
             
            <Route path="/register" element={<Register />} />
            <Route path="/logIn" element={<LogIn />} />
            
            <Route path="/products" element={
              currentUser ? <LoggedAllProducts />:
              <AllProducts />
            } />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favourites" element={<Favourite />} />
        </Routes>
     
    </div>
  );
}

export default App;

import { Router ,Route,Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/MainSection/Home";
import Products from "./Components/Products/Products";
import Register from "./Components/SignUpPage/Register";
import LogIn from "./Components/LogIn/LogIn";


function App() {
  return (
    <div className="app">
      <Header />
        <Routes>
            <Route path="/" exact element={<div>
              <Home />
              <Products />
            </div>} />
            <Route path="/register" element={<Register />} />
            <Route path="/logIn" element={<LogIn />} />
        </Routes>
     
    </div>
  );
}

export default App;

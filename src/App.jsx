import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from './Components/NavBar/NavBar';
import Cart from"../src/Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";


import { ItemsProvider } from "./Context/Context";

import Home from "./Pages/Home"
import About from "./Pages/About"
import Products from "./Pages/Products"
import Detail from "./Pages/Detail"
import Contact from "./Pages/Contact"
import Error from "./Pages/Error"


import "./app.css";




function App() {
  

  return (
    <>
    <ItemsProvider>

   
          <Router>
         
            <NavBar/>


            
           

              <Routes>
                  <Route path="/"  element={<Home/>}/>
                  <Route path="/about"  element={<About/>}/>
                  <Route path="/products"  element={<Products/>}/>
                  <Route path="/detail/:id"  element={<Detail/>}/>
                  <Route path="/contact"  element={<Contact/>}/>
                  <Route path="/cart"  element={<Cart/>}/>
                  <Route path="*"  element={<Error/>}/>
              </Routes>

         
             
            <Footer/>
           </Router>

         
      </ItemsProvider>
    </>
  )
}

export default App;

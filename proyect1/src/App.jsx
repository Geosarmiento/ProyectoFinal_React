import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NavBar from './Components/NavBar/NavBar';
import Search from "../src/Components/Search/Search";
import Cart from"../src/Components/Cart/Cart";


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



            <Search/>
           

              <Routes>
                  <Route path="/"  element={<Home/>}/>
                  <Route path="/about"  element={<About/>}/>
                  <Route path="/products"  element={<Products/>}/>
                  <Route path="/detail/:id"  element={<Detail/>}/>
                  <Route path="/contact"  element={<Contact/>}/>
                  <Route path="/cart"  element={<Cart/>}/>
                  <Route path="*"  element={<Error/>}/>
              </Routes>
             

           </Router>

         
      </ItemsProvider>
    </>
  )
}

export default App;

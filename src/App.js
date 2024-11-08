import React from "react";
import {BrowserRouter as Router,Routes,Route} from"react-react-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Errorpage from './ErrorPage';
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
const App = () => {
  const theme = {
    colors: {
      bg: "#fff",
    },
  },
  return (

<ThemeProvider theme = {theme}>
<Router> 
<Routes>

  <Route path ="/" element = {<Home/>} />
   <Route path = "/about" element = {<About/>}/>

  
   <Route path = "/products" element = {<Products/>}/>
   <Route path = "/contact" element = {<Contact/>}/>

   
   <Route path = "singleproduct/:id" element = {<SingleProduct/>}/>
   <Route path = "/cart" element = {<Cart/>}/>

   <Route path = " * " element = {< Errorpage/>}/>

</Routes>
</Router>
<ThemeProvider/>
  );

};

export default App;

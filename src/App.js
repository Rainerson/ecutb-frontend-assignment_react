import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './views/Contacts';
import Home from './views/Home';
import NotFound from './views/NotFound';
import ProductDetails from './views/ProductDetails';
import Products from './views/Products';
import { ProductContext } from './contexts/contexts'



function App() {


  const [products, setProducts] = useState([
    { id: 1, productName: "White T-shirt", category: "Fashion", price: "$35", rating: 5, imgUrl: "https://cdn.pixabay.com/photo/2012/04/14/16/20/t-shirt-34481_960_720.png" },
    { id: 2, productName: "Party Hat", category: "Fashion", price: "$25", rating: 5, imgUrl: 'https://cdn.pixabay.com/photo/2014/04/03/10/44/hat-311271_960_720.png' },
    { id: 3, productName: "Conversl Shoe", category: "Animal", price: "$555", rating: 5, imgUrl: "https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png" },
    { id: 4, productName: "Modern Black sheep", category: "Animal", price: "$555", rating: 5, imgUrl: "https://cdn.pixabay.com/photo/2014/04/03/11/59/sheep-312776_960_720.png" },
    { id: 5, productName: "Top Hat", category: "Fashion", price: "$15", rating: 5, imgUrl: "https://cdn.pixabay.com/photo/2014/04/03/11/58/topper-312765_960_720.png" },
    { id: 6, productName: "Socks", category: "Fashion", price: "$15", rating: 5, imgUrl: "https://cdn.pixabay.com/photo/2014/04/02/16/17/socks-306802_960_720.png" },
    { id: 7, productName: "Socks", category: "Fashion", price: "$15", rating: 5, imgUrl: "https://cdn.pixabay.com/photo/2014/04/02/16/17/socks-306802_960_720.png" },
    { id: 8, productName: "Socks", category: "Fashion", price: "$15", rating: 5, imgUrl: "https://cdn.pixabay.com/photo/2014/04/02/16/17/socks-306802_960_720.png" }
  ])




  return (
    // <></> Kallas för en fragment när det bara är taggar (?), allt måste vara inom denna (ett parent-element)
    <BrowserRouter>
      <ProductContext.Provider value={products}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/contacts' element={<Contacts></Contacts>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/products/:id' element={<ProductDetails></ProductDetails>}></Route>


          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </ProductContext.Provider>

    </BrowserRouter>

  );
}

export default App;

// OBS! När du gör ett html element med en class måste du nu skriva className istället för class

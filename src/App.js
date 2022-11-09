import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './views/Contacts';
import Home from './views/Home';
import NotFound from './views/NotFound';
import ProductDetails from './views/ProductDetails';
import Products from './views/Products';
import { ProductContext } from './contexts/contexts'



function App() {


  const [products, setProducts] = useState({
    allProducts: [],
    featuredProducts: [],
    fourProducts: []
  })

  useEffect(() => {

    const  fetchAllProducts = async () => {
          let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
          setProducts({...products, allProducts: await result.json()})
    }
    fetchAllProducts()

    const  fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeaturedProducts()

    const  fetchFourProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, fourProducts: await result.json()})
    }
    fetchFourProducts()

  }, [products, setProducts])



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

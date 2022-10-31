import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './views/Contacts';
import Home from './views/Home';
import NotFound from './views/NotFound';
import ProductDetails from './views/ProductDetails';

import React from 'react'


function App() {
  return (
    // <></> Kallas för en fragment när det bara är taggar (?), allt måste vara inom denna (ett parent-element)
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/contacts' element={<Contacts></Contacts>}></Route>
          <Route path='/products/:id' element={<ProductDetails></ProductDetails>}></Route>
          
          
          <Route path='*' element={<NotFound></NotFound>}></Route>

        </Routes>       
        </BrowserRouter>

  );
}

export default App;

// OBS! När du gör ett html element med en class måste du nu skriva className istället för class

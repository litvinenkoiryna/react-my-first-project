import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/Main";
import ShoppingCart from './components/ShoppingCart';
import React, {useState} from "react";


function App() {
  
let [items, setItems]  = useState([ ])
  console.log(items);

let addItem = (title, price) => {
    let newItem = {
      id: Date.now(),
      title,
      price,
    }
setItems([...items, newItem]);
}

       
   return (
    <BrowserRouter>
        <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<Main  addItem = {addItem}/>} />
                    <Route path='/shopping_cart' element= {<ShoppingCart items = {items} />} />
                </Routes>     
        </div>
    </BrowserRouter>
  );
}

export default App;

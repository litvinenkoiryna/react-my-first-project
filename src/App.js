import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/Main";
import ShoppingCart from './components/ShoppingCart';
import React, {useEffect, useState} from "react";


function App() {
  
const [items, setItems]  = useState([ ]);

  useEffect(() =>{
      setItems(JSON.parse(localStorage.getItem('items')));
  }, []);
  
  useEffect(() =>{
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

const result = items.reduce(
    (previousValue, currentItem) => previousValue+currentItem.count*currentItem.price,
    0
    );
 
let addItem = (img, title, price, count) => {
    let newItem = {
      id: Date.now(),
      img,
      title,
      price,
      count: 1,
    }
setItems([...items, newItem]);
}

const removeItem = (item) => {
    setItems(items.filter(i => i.id !== item.id))
}

const handleIncreaceCount = (id) => {
  setItems(items.map(item => {
    if (item.id === id) {
      item.count++
    }
    return item;
  }));
 }

 const handleDecreaceCount = (id, count) => {
    if(count<2) {
      count = 1
    } else {
     setItems(items.map(item => {
        if (item.id === id) {
           item.count--
    }
    return item;
  }));
 }
}

   return (
    <BrowserRouter>
        <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<Main  addItem = {addItem}/>} />
                    <Route path='/shopping_cart' element = {<ShoppingCart 
                                              remove={removeItem}
                                              items={items}
                                              result={result}
                                              increaceCount={handleIncreaceCount} 
                                              decreaceCount={handleDecreaceCount}
                                              />} />
                </Routes>     
        </div>
    </BrowserRouter>
  );
}

export default App;

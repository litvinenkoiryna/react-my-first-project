import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/Main";
import { ShoppingCart } from './components/ShoppingCart';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/shopping_cart' element={<ShoppingCart />} />
                </Routes>     
        </div>
    </BrowserRouter>
  );
}

export default App;

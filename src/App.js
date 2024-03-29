import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import CartProvider from './context/CartProvider';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>

      <CartProvider>
        
        <header>
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path="*" element={<div><h1>Page not found</h1></div>} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

      </CartProvider>

    </BrowserRouter>
  );
}

export default App;

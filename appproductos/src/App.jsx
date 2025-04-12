import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Cart from './pages/Cart';
import { CartProvider } from './components/cartcontext';
import Header from './components/Header'; // Asegúrate de importar Header

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header /> {/* Renderiza el componente Header aquí */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
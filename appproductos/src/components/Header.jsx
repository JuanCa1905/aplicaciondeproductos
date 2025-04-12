import { Link } from "react-router-dom";
import { useCart } from "./cartcontext";
import '../style/_header.scss'; // Importa los estilos del header
// Importa tu librería de iconos si la estás usando
// import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <h1>Tienda</h1>
      <Link to="/cart">
        {/* Usando un componente de icono si tienes una librería */}
        {/* <FaShoppingCart className="cart-icon" /> */}
        <span className="cart-icon">🛒</span> {/* Usando el emoji como antes con una clase */}
        <span>Carrito ({totalItems})</span>
      </Link>
    </header>
  );
};

export default Header;
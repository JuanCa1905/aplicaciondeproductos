import { useCart } from '../components/cartcontext';
import { Link } from 'react-router-dom';
import '../style/_cart.scss';  // Estilos para la página del carrito

const Cart = () => {
  const { cart, removeFromCart, getTotal } = useCart();

  return (
    <div className="cart">
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="total">
            <p>Total: ${getTotal()}</p>
          </div>
        </div>
      )}
      <Link to="/">Seguir comprando</Link>
    </div>
  );
};

export default Cart;
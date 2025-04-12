import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../api';
import { useCart } from "../components/cartcontext";  // Importar el hook para el carrito

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();  // Obtener la función addToCart

  useEffect(() => {
    getProductById(id).then(res => setProduct(res.data));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);  // Llamar a la función para agregar al carrito
  };

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <h2>{product.title}</h2>
        <p className="category">{product.category}</p>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
        <button onClick={handleAddToCart}>Agregar al carrito</button>  {/* Botón para agregar al carrito */}
      </div>
    </div>
  );
};

export default Details;
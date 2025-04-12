import { useEffect, useState } from 'react'
import { getProducts } from '../api'
import ProductCard from '../components/ProductCard'
import '../style/main.scss'


const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(res => setProducts(res.data))
  }, [])

  return (
    <div className="container">
      <h1 className="page-title">Tienda de Productos Online</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
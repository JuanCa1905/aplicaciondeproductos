import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/_prodcutdetail.scss'



const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
  }, [id])

  if (!product) return <p>Cargando...</p>

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <h2>{product.title}</h2>
        <p className="category">{product.category}</p>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductDetail;
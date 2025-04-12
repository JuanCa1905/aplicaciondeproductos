import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProductById } from '../api'

const Details = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProductById(id).then(res => setProduct(res.data))
  }, [id])

  if (!product) return <p>Cargando...</p>

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Categoría:</strong> {product.category}</p>
    </div>
  )
}

export default Details
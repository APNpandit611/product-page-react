import React from 'react'
import { addItem } from '../store/cartSlice'
import { useDispatch } from 'react-redux'
const ProductCard = (props) => {
  const { id, title, price, images, description } = props.products
  const dispatch = useDispatch()

  const handleDispatch = () => {
    dispatch(addItem(title))
  }
  return (
    <div>
      <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white transform hover:scale-105 transition duration-300 ease-in-out">
        <img src={images} alt={title} className="w-full h-48 object-cover" />

        <div className="p-5">
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>

          <p className="text-sm text-gray-600 mt-2">
            {description.length > 60 ? `${description.slice(0, 60)}...` : description}
          </p>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-semibold text-indigo-600">${price}</span>

            <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300">
              View Product
            </button>
            <button onClick={handleDispatch} className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

export const BestSellerCard = (ProductCard) => {
  return (props) => {
    return (
      <div className=''>
        <span className='bg-black text-white px-4 py-1 rounded-md '>Best Seller</span>
        <ProductCard {...props}/>
      </div>
    )
  }
}


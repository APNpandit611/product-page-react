import { useEffect, useState } from 'react'
import ProductCard, { BestSellerCard } from './component/ProductCard'


function App() {
  const [ecom, setEcom] = useState([])
  const [filterEcom, setFilterEcom] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await rawData.json()
      setEcom(data)
      setFilterEcom(data)
    }
    fetchData()
  }, [])

  const filterData = () => {
    const filteredData = filterEcom.filter((product) => product.price <= 20)
    setFilterEcom(filteredData)
  }

  useEffect(() => {
    const searchedItem = ecom.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    setFilterEcom(searchedItem)

  }, [ecom, search])

  const HOF = BestSellerCard(ProductCard)


  return (
    <>
      <div className="flex flex-row justify-between items-center px-10 py-4 text-white shadow-lg rounded-md">
        <h1 className="text-2xl font-bold tracking-wide text-indigo-500">LOGO</h1>
        <button onClick={filterData} className="border border-indigo-500 px-4 py-2 font-semibold rounded-md text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
          Cheap First
        </button>

      </div>

      <div className="flex items-center space-x-2 p-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search your favorite..."
          className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-r-md transition duration-300 ease-in-out"
        >
          Search
        </button>
      </div>

      <div className='m-5 flex flex-wrap gap-4'>
        {filterEcom.slice(0, 10).map((product) => (
          product.price >= 55 ? <HOF products={product}/> : <ProductCard key={product.id} products={product} />
        ))}
      </div>


    </>
  )
}

export default App
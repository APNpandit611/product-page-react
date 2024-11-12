import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center px-10 py-4 text-white shadow-lg rounded-md">
        <h1 className="text-2xl font-bold tracking-wide text-indigo-500">LOGO</h1>
        <button onClick={filterData} className="border border-indigo-500 px-4 py-2 font-semibold rounded-md text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
          Cheap First
        </button>

      </div>
    </div>
  )
}

export default Header
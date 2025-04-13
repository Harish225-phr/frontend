import React from 'react'

const data = await fetch("http://localhost:1337/api/articles?populate=*", { cache: 'no-store' })
const response = await data.json()

function block() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">📚 Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {response && response.data.map(data => {
          return (
            <div key={data.id} className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h2>
              <p className="text-gray-600 mb-2">{data.discription}</p>
              <p className="text-sm text-gray-500 mb-1">{data.slug}</p>
              <p className="text-sm text-gray-400">{data.createdAt}</p>
              <img>{data.url}</img>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default block

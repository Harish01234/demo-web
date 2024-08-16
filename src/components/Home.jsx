import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <h2 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
        Welcome to Our Home Page
      </h2>
      <p className="text-xl text-white bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
        Discover our services and explore the possibilities with us!
      </p>
    </div>
  )
}

export default Home
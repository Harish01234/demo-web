import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-teal-500 p-8">
      <h2 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
        About Us
      </h2>
      <p className="text-xl text-white bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
        We are passionate about creating unique experiences for our clients. Learn more about who we are and what we do.
      </p>
    </div>
  )
}

export default About
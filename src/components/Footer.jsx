import React from 'react'

const Footer = () => {
  return (
    <footer className="p-6 mt-8">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg font-bold mb-2">b00k Harbor</p>
        <p className="text-gray-600 mb-4">123 Book Street, Readingville, RV 54321</p>

        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
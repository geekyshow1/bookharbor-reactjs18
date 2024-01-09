import React from 'react'
import Book from '../assets/images/books/Book8.jpg'
const WeekBook = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900 text-white p-8 shadow-md">
        <div className="flex items-center justify-center mb-4">
          <img
            src={Book}
            alt="Book of the Week"
            className="w-32 h-40 object-cover rounded-md"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Book of the Week</h2>
          <p className="text-lg">"Pencil"</p>
          <p className='italic'>by Olivia Wilson</p>
        </div>
      </div>
    </>
  )
}

export default WeekBook
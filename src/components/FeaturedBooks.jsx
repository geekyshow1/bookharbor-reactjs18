import React from 'react'
import { FeatureBooks } from '../data.js'

const FeaturedBooks = () => {
  return (
    <div className='mx-20 my-10'>
      <h1 className='text-xl font-bold mb-5'>Featured Books</h1>
      <swiper-container slides-per-view="6" autoplay="false" enabled="true" navigation="true">
        {
          FeatureBooks.map((book, i) => (
            <swiper-slide>
              <div className='flex flex-col items-center'>
                <a href={book.id}>
                  <img src={book.book_cover} alt={book.title} width="100px" />
                </a>
                <p className='font-semibold'>Rs. {book.selling_price} <span className='line-through font-thin text-sm'>{book.mrp}</span> </p>
              </div>
            </swiper-slide>
          ))
        }
      </swiper-container>
    </div>
  )
}

export default FeaturedBooks
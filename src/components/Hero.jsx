import React from 'react'
import { Books } from '../data.js'

const Hero = () => {
  return (
    <>
      <div className='mt-16 mx-10 md:mx-40 flex gap-28'>
        <div>
          <h1 className='text-7xl font-bold mb-10'>Unlock Worlds, <br />turn pages...</h1>
          <p className='text-xl'>"Journey through the pages, find solace in words, and let the stories within shape your world."</p>
        </div>
        <div className='w-72'>
          <swiper-container effect="cards" autoplay="true">
            {
              Books.map((book, i) => (
                <swiper-slide>
                  <img src={book.book_cover} alt={book.title} width="200px" />
                </swiper-slide>
              ))
            }
          </swiper-container>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D3D9D1" fillOpacity="1" d="M0,160L21.8,144C43.6,128,87,96,131,101.3C174.5,107,218,149,262,149.3C305.5,149,349,107,393,106.7C436.4,107,480,149,524,170.7C567.3,192,611,192,655,192C698.2,192,742,192,785,176C829.1,160,873,128,916,106.7C960,85,1004,75,1047,80C1090.9,85,1135,107,1178,112C1221.8,117,1265,107,1309,96C1352.7,85,1396,75,1418,69.3L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
    </>
  )
}

export default Hero
import { Authors } from '../data.js'

const FeaturedAuthors = () => {
  return (
    <>
      <h1 className='text-4xl font-bold text-center my-8'>Featured Authors</h1>
      <div className='flex justify-around text-center'>
        {
          Authors.map((author, i) => (
            <div>
              <img src={author.profile_image} alt={author.name} className='mx-auto mb-4 w-28 h-28 rounded-lg' />
              <h5>{author.name}</h5>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default FeaturedAuthors
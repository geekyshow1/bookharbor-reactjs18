// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedAuthors from './components/FeaturedAuthors';
import TopSellingBooks from './components/TopSellingBooks';
import FeaturedBooks from './components/FeaturedBooks';
import WeekBook from './components/WeekBook';
import Footer from './components/Footer';
// register Swiper custom elements
register();

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedAuthors />
      <TopSellingBooks />
      <FeaturedBooks />
      <WeekBook />
      <Footer />
    </>
  )
}

export default App
import React from 'react'
import AdsFeed from '../components/AdsFeed/AdsFeed'
import AdsPage from '../components/AdsFeed/AdsPage'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/footer'
import Hero from '../components/Hero/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import ProductList from '../components/ProductList/ProductList'
import Services from '../components/Service/Services'
import Sahla from '../components/Saliha/Sahla'
import Asiff from '../components/Mufeel/Asiff'



function HomePage() {
  return (
    <div>
      <Asiff />
      <Sahla />
      <Navbar />
      <Hero />
      <Services />
      <ProductList />
      <AdsPage />
      <Footer />
    </div>
  )
}

export default HomePage

import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ListProduct from '../components/ListProduct/ListProduct'
import Footer from '../components/Footer/footer'
import Email from '../components/EmailFeed/EmailFeed/Email'
import MenuList from '../components/MenuList/MenuList'
import BannerPage from '../components/Banner2/Banner2/BannerPage'
import SubPage from '../components/blogSection/Sub/SubPage'


function ProductPage() {

  const title = "#Let's_order"

  return (
    <div>
      <Navbar/>
      <BannerPage title={title}/>
      <MenuList />
      <ListProduct/>
      <Email />
      {/* <SubPage /> */}
      <Footer />
    </div>
  )
}

export default ProductPage

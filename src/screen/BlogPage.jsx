import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'
import BannerPage from '../components/Banner2/Banner2/BannerPage'
import SubPage from '../components/blogSection/Sub/SubPage'

function BlogPage() {

  const title = "#Our Blogs"

  return (
    <div>
      <Navbar/>
      <BannerPage title={title}/>
      <SubPage />
      <Footer />
    </div>
  )
}

export default BlogPage

import React from 'react'
import Footer from '../components/Footer/footer'
import BannerPage from '../components/Banner2/Banner2/BannerPage'
import SubPage from '../components/blogSection/Sub/SubPage'
import Navbar from '../components/Navbar/Navbar'
import SingleBlog from '../components/singleBlog/Components/Blog/SingleBlog'

function SingleBlogPage() {

    const title = "#Our Single Blogs"

  return (
    <div>
      <Navbar/>
      <BannerPage title={title}/>
      <SingleBlog/>
      <Footer />
    </div>
  )
}

export default SingleBlogPage

import logo from './logo.svg';
import './App.css';
import HomePage from './screen/HomePage';
import ProductPage from './screen/ProductPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from './screen/BlogPage';
import SingleBlogPage from './screen/SingleBlogPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/product' element={<ProductPage/>}/>
            <Route path='/blog' element={<BlogPage/>}/>
            <Route path='/singleBlog' element={<SingleBlogPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './Banner.css';
// import bannerPic from '..//../images/chicken.png'

const Banner = () => {

  return (

    <div className="banner">
     
     <div className="container"> 
      <div className="banner-text">
        <h1>FAST FOOD WITH </h1>
        <h1>FAST DELIVERY</h1>
        <p>Buy any food using coupons code when doing </p>
        <p>online shopping</p>
        <button>Order Now!  </button>{/* <button style={buttonStyle}>Order Now!</button> */}

        <div className='image'>
          <img src="./images/chicken.png" className="logo1" style={{
          position:`relative`,
          width: `40%`,
          height:`auto`,
          left:'120%',
          /* top: '50%', */
          
        }}
        
        />
        </div>
        
      </div>


      </div>
    </div>
  );

}

export default Banner;
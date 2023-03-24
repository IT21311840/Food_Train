import React from 'react'
import css from '../offersFeed/OffersFeed.module.css'
function OffersFeed({Data}) {
  return (
    <div className={css.container}>
      <div className={css.row1}>
        <div className={css.colum1} style={{
            backgroundImage : `url(${Data.im})`,
            backgroundSize:`cover`,
            height:`400px`,
            weight:`800px`,
        }}>
          <h2>Drink Offer</h2>
          <h1>Buy 2 Get One Free</h1>
          <button>Order Now</button>
        </div>
        <div className={css.colum2} style={{
            backgroundImage : `url(${Data.im1})`,
            backgroundSize:`cover`,
            height:`400px`,
            weight:`500px`,
        }}>
          <h2>Burger Offer</h2>
          <h1>Buy 2 Get One Free</h1>
          <button>Order Now</button>
        </div>
        <div className={css.colum3} style={{
            backgroundImage : `url(${Data.im2})`,
            backgroundSize:`cover`,
            height:`400px`,
            weight:`400px`,
        }}>
          <h2>BBQ Offer</h2>
          <h1>Buy 2 Get One Free</h1>
          <button>Order Now</button>
        </div>

      </div>
    </div>
  )
}

export default OffersFeed;

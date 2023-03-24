import React from 'react'
import css from './Hero.module.css'

function Hero() {
  return (
    <div className={css.row}>
        <div className={css.col2}>
            <h1> FAST FOOD <span>WITH</span></h1>
            <h2> FAST DELIVERY</h2>
            <p>Eat, drink and live free. There’s no telling what might happen tomorrow.</p>
            <button className={css.btnHero}>Order Now</button>
        </div>
        <div className={css.col2}>
            <img src='https://wpbingosite.com/wordpress/papzi/wp-content/uploads/2022/02/fries.png'/>
        </div>
    </div>
  )
}

export default Hero

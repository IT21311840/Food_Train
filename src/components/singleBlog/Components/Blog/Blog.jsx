import React from 'react'
import css from './Blog.module.css'

export default function Blog({Data}) {
  return (
    <div>
      <div className={css.row1}>
        <img src={Data.img} style={{
            // margin:`8%`,
            borderRadius:`20px`,   
        }}/>
      </div>
      <div className={css.row1}>
      <h2>{Data.title}</h2>
      <p>I am so excited to share my modern and EASY recipe for Air Fryer Tandoori Chicken. 
        These spicy chicken legs are perfectly juicy with a nice crisp char on the outside sealing in all of that flavor. 
        The best part is they cook in only 15 minutes in the Air Fryer—less than half the time it takes in a conventional oven. 
        The drumsticks are marinated in warming spices and creamy yogurt just like the classic dish. 
        But you won’t believe how quick and effortless it is to make this favorite Indian dish in the Air Fryer with the same authentic taste and a lot less work.</p>
        <p>Tandoori chicken legs are perfect for family dinners or as the main dish at parties and get-togethers. 
        Chicken drumsticks are inexpensive and harder to overcook so they are a good choice for larger gatherings. 
        Believe me, just looking at the plate piled high with spiced tandoori chicken is going to make everyone hungry if the aroma filling the house doesn’t do it first.</p>
      </div>
    </div>
  )
}

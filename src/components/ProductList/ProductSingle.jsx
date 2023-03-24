import React, { useState } from 'react'
import css from './ProductList.module.css'
// import P1 from '../Figma Pic/p1.png'

function ProductSingle({productList}) {

    const [varient, setVarients] = useState("small")

  return (
        // <div className={css.row}>
                <div className={css.col3}>
                    <div className={css.colContainer}>
                        <img src={productList.image} alt="" className='img-fluid' style={{ height: "200px", width: "200px" }} />
                        <h3>{productList.name}</h3>
                        <h2>Price Rs.{productList.prices[0][varient]}</h2>
                        <div className={css.Cartbtn}>
                            <select className={css.rangeBtn} value={varient} onChange={(e)=>{setVarients(e.target.value)}}>
                                {productList.varients.map(varient => {
                                    return <option value={varient}>{varient}</option>
                                })}
                            </select>
                            <div className={css.addToBtn}>Add</div>
                        </div>
                    </div>
                </div>
        // </div>
  )
}

export default ProductSingle

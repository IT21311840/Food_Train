import React from 'react'
import {menuLists} from './menuListDB'
import css from './MenuList.module.css'
import useFetch from '../../hooks/useFetch';
import MenuSingle from './MenuSingle';
// import P1 from '../Figma Pic/p1.png'

function MenuList() {

    const { data, loading, error } = useFetch("http://localhost:8000/api/product");
        console.log(data)

  return (
    <div className={css.container}>
        <div className={css.product}>
            <p className={css.smallText}>Food Train</p>
            <h1 className={css.ProductHeads}>Our Offer Menu</h1>
            <p className={css.productNote}>Inspired by recipes and creations of world’s best chefs</p>
            <div className={css.row}>
            {
                loading ? (
                    "Loading please wait"
                  ) : (
                <>
                {menuLists.map((menuList,index)=> {
                    if(index < 6)
                        return <MenuSingle menuList={menuList}/>
                })}
            </>)}
            </div>
            {/* <div className={css.row}>
                <div className={css.col3}>
                    <div className={css.colContainer}>
                        <img src="https://wpbingosite.com/wordpress/papzi/wp-content/uploads/2019/04/Products-1-600x600.jpg" alt="" className='img-fluid' style={{ height: "200px", width: "200px" }} />
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
            </div> */}
            
        </div>
    </div>
  )
}

export default MenuList

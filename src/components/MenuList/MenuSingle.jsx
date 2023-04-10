// import React, { useState } from 'react'
import { useState } from 'react'
import css from './MenuList.module.css'
import {menuLists} from './menuListDB'
// import P1 from '../Figma Pic/p1.png'

function MenuSingle({menuList}) {

    const [varient, setVarients] = useState("small")

  return (
        // <div className={css.row}>
                <div className={css.col2}>
                    <div className={css.colContainer}>
                        <h2 className={css.cetagoryTitle}>{menuList.categoryTitle}</h2>
                                <div className={css.offerContainer}>
                                    <div className={css.offerTag}><span>{menuList.offerTag}</span></div>
                                    <div className={css.offerTax}>
                                        <p>{menuList.title}...................................... <span>{menuList.price}</span></p>
                                        <p>{menuList.description}</p>
                                    </div>
                                </div>
                    </div>
                </div>
                
        // </div>
  )
}

export default MenuSingle

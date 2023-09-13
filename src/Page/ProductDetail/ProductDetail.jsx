import React from 'react'

import style from "./productDetail.module.css"
import Ip from "../../assets/anh1.jpeg"

const ProductDetail = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
          <h3>iPhone 14 Pro Max 256GB </h3>
          <div className={style.product}>
              <div className={style.img}>
                  {/* <img src={Ip} alt="" /> */}

              </div>
              <div className={style.infoProduct}>
                <div className={style.price}>
                    16.056.000đ
                </div>

              </div>
              <div className={style.infoUser}>
                  
              </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetail
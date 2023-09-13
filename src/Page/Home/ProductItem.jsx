import React from 'react'
import style from "./productItem.module.css"
import { BiHeart } from "react-icons/bi";
import { Link } from 'react-router-dom';

// import Anh1 from "../../assets/anh1.jpeg"

// BiHeart
function ProductItem(props) {

  return (
    <div className={style.container}>
        <div className={style.image}> 
            <img src={props.item.avatar} alt="anh" />
        </div>
        <p className={style.name}>{props.item.product_name}</p>
        <div className={style.price}>
            <p className={style.newPrice}>{props.item.price}đ</p>
            {/* <p className={style.oldPrice}>25.990.000đ</p> */}
        </div>
        <div className={style.option}>
          <div className={style.icon}>
            <BiHeart className={style.iconHeart}/>
            <p>Yêu thích</p>
          </div>
            <Link to="/productdetail">
              <button>Mua Ngay</button>
            </Link>
        </div>
    </div>
  )
}

export default ProductItem
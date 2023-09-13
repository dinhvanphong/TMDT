import React from 'react'
import { BiSearch } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

import style from "./header.module.css"


function Header() {
  return (
    <div className={style.wrapper}>
        <div className={style.content}>
            <div className={style.logo}>DVP</div>
            <div className={style.search}>
                <input type="text"  placeholder='Bạn cần tìm gì ?' />
                <span></span>
              <div className={style.icon}>
                  <BiSearch className={style.iconSearch}/>
              </div>
           </div>
          <div className={style.options}>
            <div className={style.user}>
                <div className={style.avata}></div>
                <p className={style.name}>Dinh Van Phong</p>
            </div>
            <div className={style.iconOption}>
                <AiFillCaretDown className={style.iconDown}/>
                <div className={style.menu}>
                    <ul>
                      <li>Dang xuat</li>
                    
                      
                    </ul>
                </div>
            </div>
          </div>
        </div>
       
    </div>
  )
}

export default Header
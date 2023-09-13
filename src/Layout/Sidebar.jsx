import React from 'react'
import { FaRegKeyboard } from "react-icons/fa";

import style from "./sidebar.module.css"

const DATA_MENU = [
  {
    name : "Custom Keyboard",
    icon : <FaRegKeyboard/>
  },
  {
    name : "KeyCap"
  },
  {
    name : "Moding"
  },
  {
    name : "Switch"
  },
  
]

function Sidebar() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.listMenu}>
          {DATA_MENU.map((item, index)=>(
            <div key={index} className={style.itemMenu}>
              <div className={style.iconItemMenu}>
                {item.icon}
              </div>
              <p className={style.itemName}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
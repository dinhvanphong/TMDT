import {React, useEffect, useState} from 'react'

import style from "./home.module.css"
import ProductItem from './ProductItem'
import Sidebar from '../../Layout/Sidebar'

function Home() {
  const [listProducts, setListProducts] = useState([])

  useEffect(() => {
    const callApi = async () => {
      await fetch(`https://sell-web.hasura.app/api/rest/value`)
        .then((response) => response.json())
        .then((data) => {
          setListProducts(data.v_get_all_product);
          console.log(data.v_get_all_product);
        });
    };
    callApi();
  }, []);
  return (
    <div className={style.container}>
       <Sidebar dataSideBar = {listProducts}/>
      <div className={style.listProducts}>
        {listProducts.map(item => 
             <ProductItem key={item.id} item={item}/>
          )}
        {/* <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/> */}
      </div>
    </div>
  )
}

export default Home
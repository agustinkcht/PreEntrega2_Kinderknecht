import React from 'react'
import { getProductById } from '../../serverMock/productMock';
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './itemDetailContainerStyles.css'

function ItemDetailContainer() {
  const{itemId} = useParams()
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    getProductById(itemId).then((res) => setProductDetail(res))
  }, [itemId]);
  // useEffect pide como dependencia Id para que cada vez que cambie, pueda volver a ejecutarse.

  return (
    <>
        <div className='containerDetail'>
      {<ItemDetail {...productDetail}/>}
        </div>   
    </>

  )
}

export default ItemDetailContainer



// return (
//   <div className='containerDetail'>
//     {productDetail && <Item {...productDetail}/>}
//   </div>
// )
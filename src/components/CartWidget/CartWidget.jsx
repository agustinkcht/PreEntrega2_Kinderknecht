import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import './cartWidget.css'

function CartWidget() {
  return (
    <div className='containerCart'>
      <ShoppingCartIcon className='cartIcon'/>
      <span className='cartNumber'>6</span>
    </div>
  )
}

export default CartWidget




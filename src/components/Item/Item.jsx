import React from 'react'
import './itemStyles.css'

function Item({ id, name, stock, category, description, price, img }) {
  return (
    <div>
        <div className='item' key={id}>
            <h3 className='name'>{name}</h3>
            <p className='price'>{`$${price}`}</p>
            <p className='stock'>{`Stock: ${stock}`}</p>
            <img src={img} alt="" />
        </div>
      
    </div>
  );
}

// dejamos el componente bien puro para que sea flexible

export default Item



// function Item({ id, name, stock, category, description, price, img }) {
//   return (
//     <div>
//         <div className='item' key={id}>
//             <h3>{name}</h3>
//             <p className='description'>{description}</p>
//             <p>{`stock: ${stock}`}</p>
//             <p>{category}</p>
//             <p>{price}</p>
//             <img src={img} alt="" />
//         </div>
      
//     </div>
//   );
// }

import './itemDetailStyles.css'
import Counter from '../Counter/Counter';

function ItemDetail({ id, name, stock, category, description, price, img }) {
  return (
    <div>
        <div className='itemDetail' key={id}>
            <h3 className='iDname'>{name}</h3>
            <p className='iDcategory'>{`Categoría: ${category}`}</p>
            <p className='iDdescription'>{description}</p>
            <p className='iDprice'>{`$${price}`}</p>
            <p className='iDstock'>{`stock: ${stock}`}</p>

            <img src={img} alt="" />
            <div className='iDcounter'>
                <Counter />
            </div> 
        </div>

      
    </div>
  );
}

// dejamos el componente bien puro para que sea flexible

export default ItemDetail
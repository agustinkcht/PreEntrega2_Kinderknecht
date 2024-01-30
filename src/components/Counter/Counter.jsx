import './counterStyles.css'
import { useCount } from '../../hooks/useCount'

function Counter() {

  const {increase, decrease, clear, valor} = useCount(0, 0, 7);

  return (
    <div className='counter'>
      <div className='cant-val'>
        <h3>Cantidad:</h3>
        <p>{valor}</p>
      </div>
      <div className='btns-interact'>
        <button onClick = {decrease} className='decrease'>-</button>
        <button onClick = {clear}>Clear</button>
        <button onClick = {increase} className='increase'>+</button>
      </div>
        <button className='btn-add'>Agregar al Carrito</button>
    </div>
  )
}

export default Counter
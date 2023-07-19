import React from 'react'
import { useState, useEffect } from 'react'



export const Count = ( {initial, onAdd, stock} ) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrement = () =>{
        setCount (count - 1)
    }
    const increment = () =>{
        setCount (count + 1)
    }

useEffect(() => {
    setCount(parseInt(initial));
}, [initial])

  return (
    <div className='count'>
        <button disabled ={count <= 1} onClick={decrement}>-</button>
            <span>{count}</span>
        <button disabled ={count >= 12 /*Stock*/} onClick={increment}>+</button>

        <div>
            <button disabled = { stock <=0 } onClick={ ()=>onAdd(count)}>agregar al carrito</button>
        </div>

    </div>
  )
}

export default Count;
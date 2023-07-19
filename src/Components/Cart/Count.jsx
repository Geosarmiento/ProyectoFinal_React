import React from 'react'
import { useState, useEffect } from 'react'

import "./count.css"

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

        <button className='btnCount' disabled ={count <= 1} onClick={decrement}>-</button>

            <span>{count}</span>

        <button className='btnCount btn2' disabled ={count >= 12 /*Stock*/} onClick={increment}>+</button>

        <div>
            <button className="addc" disabled = { stock <=0 } onClick={ ()=>onAdd(count)}>Add Cart</button>
        </div>

    </div>
  )
}

export default Count;
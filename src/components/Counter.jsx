import React, { useState } from 'react'
//import counter from './Counter';

const Counter = () => {
    // logic
    const [count, setCount] = useState(0);
    const cnt_inc = () =>{
        // cnt =+ 1;
        setCount(count+1);
    }
    const cnt_dec = () => {
        // cnt =- 1;
        // setCount(count-1);
        setCount((prev)=> prev - 1);
    }



    // 뷰view
        return     <div style={{border: "1px solid red", padding :'8px'}}>counter
        <h1>{count}</h1>
        <button type="button" onClick={cnt_inc}>+1</button>
        <button type="button" onClick={cnt_dec}>-1</button>
        </div>
}

export default Counter
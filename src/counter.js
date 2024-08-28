import React, { useState } from 'react';

const Counter=()=>{
    const[num, setnum]=useState(0);

    const incNum=()=>{
        setnum(num+1);
    };

    const decNum=()=>{
        if(num > 0){
        setnum(num - 1);
    }else{
        alert('Sorry, Zero Limit Reached ');
        setnum(0);
    }
    };
    const reset=()=>{
        setnum(0);
    };
    return(
        <>
        <div className='main-div'>
        <div className='center-div'>
            <h2>Counter App</h2>
            <h1>{num}</h1>
            <div className='btn-div'>
                <button onClick={incNum}> Increment </button>
                <button id='dec' onClick={decNum}> Decrement </button>
                <button id='reset' onClick={reset}>Reset</button>
            </div>
        </div>
        </div>
        </>
    )
}
export default Counter;
import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(null);

    const Inc = () => {
        setCount(count + 1);
    }
    const Dec = () => {
        setCount(count - 1);
    }
    const Reset = () => {
        setCount(0);
    }
    const AddByTwo = () => {
        setCount(count + step);
    }


    return (
        <>
            <h3>Count is = {count}</h3>  
            <button onClick={() => Inc()}>Increase Count</button><br></br>
            <button onClick={() => Dec()}>Decrease Count</button><br></br>
            <button onClick={() => Reset()}>Reset Count</button><br></br>
             <p>You want add number by Enter This number in input</p>
            <input type="number" value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
            <button onClick={() => AddByTwo()}>Add by {step}</button>
        </>
    )
}

export default Counter
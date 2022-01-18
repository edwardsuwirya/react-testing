import CounterOutput from "./CounterOutput";
import CounterIncrementButton from "./CounterIncrementButton";
import CounterDecrementButton from "./CounterDecrementButton";
import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <CounterOutput count={count}/>
            <CounterIncrementButton  onClick={()=>setCount(count+1)}/>
            <CounterDecrementButton  onClick={()=>setCount(count-1)}/>
        </div>
    )
}

export default Counter;

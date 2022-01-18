function CounterDecrementButton(props){
    return(
        <button id="decrement" onClick={()=>props.onClick()}>Minus</button>
    )
}

export  default CounterDecrementButton;

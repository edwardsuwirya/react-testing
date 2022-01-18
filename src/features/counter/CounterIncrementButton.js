function CounterIncrementButton(props) {
    return (
        <button id="increment" onClick={() => props.onClick()}>Plus</button>
    )
}

export default CounterIncrementButton;

const CounterChild = ({ count, incrementCounter, decrementCounter }) => {
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default CounterChild;

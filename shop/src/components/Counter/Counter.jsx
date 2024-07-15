import { useState } from "react";
import CounterChild from "./CounterChild";

const CounterParent = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCounter = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <CounterChild
        count={count}
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter}
      />
    </div>
  );
};

export default CounterParent;

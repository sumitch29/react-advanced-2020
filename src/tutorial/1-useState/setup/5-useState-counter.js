import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h2>useState counter example</h2>
      <h3>{value}</h3>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <button className="btn" onClick={() => setValue(value - 1)}>
        Decrease
      </button>
      <button className="btn" onClick={() => setValue(0)}>
        Reset
      </button>
    </div>
  );
};

export default UseStateCounter;

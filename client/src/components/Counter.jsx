import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(10);

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center p-3 border">
      <h3 className="w-100 text-center">Counter</h3>
      <button
        className="btn btn-danger m-1"
        onClick={() => setCounter(counter - 1)}
        disabled={counter==0 ? "true"  : ""}
      >
        -
      </button>
      <div>
        A számláló értéke: <b>{counter}</b>
      </div>
      <button
        className="btn btn-success m-1"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
    </div>
  );
};

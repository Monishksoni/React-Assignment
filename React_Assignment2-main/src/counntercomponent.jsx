import React, { useState } from "react";

function countercomponent() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <p>count : {count}</p>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        increments
      </button>
    </div>
  );
}

export default countercomponent;
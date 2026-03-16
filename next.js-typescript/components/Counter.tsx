"use client";

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center w-25'>
      <p className=' text-5xl font-bold'>{count}</p>
      <button
        onClick={() => setCount((count) => count + 1)}
        className='bg-blue-500 px-4 py-2 rounded text-white mt-2'
      >
        {" "}
        increment
      </button>
    </div>
  );
}

export default Counter;

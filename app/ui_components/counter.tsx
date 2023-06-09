"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const func = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={func}>Click me</button>
    </div>
  );
}

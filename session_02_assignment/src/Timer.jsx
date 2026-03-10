import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Interval started");

    const intervalId = setInterval(() => {
      setCount((prev) => {
        const next = prev + 1;
        console.log("Tick:", next);
        return next;
      });
    }, 1000);

    return () => {
      console.log("Interval cleared");
      clearInterval(intervalId);
    };
  }, []);

  return <h2>Counter: {count}</h2>;
}

export default function Timer() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setShowCounter((prev) => !prev)}>
        {showCounter ? "Unmount Counter" : "Mount Counter"}
      </button>

      {showCounter && <Counter />}
    </div>
  );
}

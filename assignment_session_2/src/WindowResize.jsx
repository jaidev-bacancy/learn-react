import React, { useState, useEffect } from "react";

function WindowResize() {
  let counter = 0;
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      console.log("inside function");
    }

    window.addEventListener("resize", handleResize);
    console.log("outside function");
    return () => {
      console.log("Cleaner");
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <div>
      <p>
        Window width: <strong>{width}px</strong>
      </p>
      <small>
        Resize the window to see it update. Unmount to remove the listener.
      </small>
    </div>
  );
}

export default WindowResize;


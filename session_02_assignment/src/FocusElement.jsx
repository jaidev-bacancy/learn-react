import React, { useRef } from "react";

function FocusElement() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Enter your name" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusElement;

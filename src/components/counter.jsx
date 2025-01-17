import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

function Counter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = `Over ${value.toFixed(0)} clients served`;
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <p ref={nodeRef} className="text-2xl text-center hidden uppercase"></p>
  );
}

export default Counter;

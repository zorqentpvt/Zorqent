import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function Counter({ value, delay = 0, duration = 2000 }) {
  const [count, setCount] = useState("0");
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    // Check if it's a numeric value (e.g. "10+" -> 10)
    const numericMatch = value.toString().match(/(\d+)/);
    if (!numericMatch) {
      setCount(value);
      return;
    }

    const target = parseInt(numericMatch[0], 10);
    const suffix = value.toString().replace(numericMatch[0], "");
    
    let startTime;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Quartic ease out
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      const current = Math.floor(easeOut * target);
      
      setCount(`${current}${suffix}`);

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(animateCount);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

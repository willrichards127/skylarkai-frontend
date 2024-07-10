import { useEffect, useRef } from 'react';

/**
 * A custom hook to keep track of the previous value of a prop or state.
 * 
 * @param value - The value to track.
 * @returns The previous value of the input parameter.
 */
function usePrevious<T>(value: T): T | undefined {
  // Use a ref to store the previous value
  const ref = useRef<T>();

  // Update the ref's current value with the current value after the component has rendered
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return the previous value (happens before the ref updates in the useEffect)
  return ref.current;
}

export default usePrevious;
import { useState, useEffect } from 'react';

function useLocalStorage(key: string, initialValue: string): [string, (value: string) => void] {
  // Function to retrieve stored value from localStorage
  const getInitialValue = (): string => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? storedValue : initialValue;
    }
    return initialValue;
  };

  // Initialize state with the retrieved value
  const [value, setValue] = useState<string>(getInitialValue());

  // Update localStorage and state when value changes
  const updateValue = (newValue: string) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  // Listen to changes in key or initialValue
  useEffect(() => {
    setValue(getInitialValue());
  }, [key, initialValue]);

  return [value, updateValue];
}

export default useLocalStorage;

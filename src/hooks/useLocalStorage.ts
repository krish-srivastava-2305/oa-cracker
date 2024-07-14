// useLocalStorage hook implementation
import { useState } from 'react';

function useLocalStorage(key: string, initialValue: string): [string, (value: string) => void] {
  // Retrieve initial value from localStorage or use initialValue
  const storedValue = localStorage.getItem(key) || initialValue;
  const [value, setValue] = useState<string>(storedValue);

  // Update localStorage and state when value changes
  const updateValue = (newValue: string) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  return [value, updateValue];
}

export default useLocalStorage;

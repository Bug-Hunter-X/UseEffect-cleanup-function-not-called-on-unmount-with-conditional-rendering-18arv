```javascript
import React, { useState, useEffect } from 'react';

function MyComponent({ key }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Mounted', key);
    return () => {
      console.log('Unmounted', key);
    };
  }, [key]);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count} - Key: {key}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
```
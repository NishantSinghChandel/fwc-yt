// ............useCallback example code - Frontend With Chandel
import { useState, memo } from 'react';

const CallbackApp = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");
  
    const handleClick = () => {
      setValue("Nishant Singh");
    };
    return (
      <div className="App">
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Count: {count}</p>
        <p>Value: {value}</p>
        <SlowComponent handleClick={handleClick} />
      </div>
    );
  };
  
  const SlowComponent = memo(({ handleClick, value }) => {
    // Intentially making the component slow
    for (let i = 0; i < 1000000000; i++) {}
  
    return (
      <div>
        <h1>Slow Component</h1>
        <button onClick={handleClick}>Click Me</button>
  
      </div>
    );
  });

  export default CallbackApp;
// ............useMemo example code - Frontend With Chandel
import { useState, useMemo } from 'react';

function calculate() {
  console.log('-called');
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
}

const btnStyle = `border-0 px-3  py-1 bg-[#333] text-white rounded`

function MemoApp() {
  const [count, setCount] = useState(0);
  const [dependentCount, setDependentCount] = useState(10);

  // const value = calculate();
  const value = useMemo(() => calculate(), [dependentCount]);
  console.log(value)

  return (
    <div className="App">
      <button className={btnStyle} onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>

      <button className={btnStyle} onClick={() => setDependentCount(dependentCount + 1)}>
        Increment Dependent Count
      </button>
      <p>Dependent Count: {dependentCount}</p>
    </div>
  );
}

export default MemoApp;
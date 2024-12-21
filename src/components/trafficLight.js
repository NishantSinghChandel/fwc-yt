import { useEffect, useState } from 'react';
import '../App.css';

const trafficLightConfig = [
  { color: 'red', delay: 4000, message: 'STOP' },
  { color: 'green', delay: 3000, message: 'GO' },
  { color: 'yellow', delay: 500, message: 'WAIT' },
]

const colorSequence = ['red', 'yellow', 'green'];

function Light({ activeIndex, color }) {
  let activeLight = trafficLightConfig[activeIndex];
  return (
    <div style={{ background: activeLight.color === color ? color : 'black' }} className='light-container rounded-full'>
      {activeLight.color === color ? activeLight.message : ''}
    </div>
  )
}

function TrafficLight() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    let timer = setTimeout(() => {
      setActiveIndex((activeIndex + 1) % trafficLightConfig.length)
    }, trafficLightConfig[activeIndex].delay)

    return () => clearTimeout(timer)
  })

  return (
    <div className='App'>
      <h1 className='text-xl font-bold my-5'> Frontend With Chandel </h1>
      <div className='traffic-light-container rounded-full'>
        {colorSequence.map(color => (
          <Light key={color} color={color} activeIndex={activeIndex} />
        ))}
      </div>

    </div>
  );
}

export default TrafficLight;

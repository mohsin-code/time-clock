import React, { useEffect, useState } from 'react'
import hrIcon from '../assets/hour.svg';
import minIcon from '../assets/minute.svg';
import secIcon from '../assets/second.svg';

export default function Clock() {
  const [date, setDate] = useState(new Date(Date.now()));
  
  useEffect(() => {
    setInterval(() => {
      setDate(new Date(Date.now()));
    }, 1000);
  }, []);
  
  // const hours = date.getHours();
  // const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  return (
    <div className="clock">
      <div className="origin">
        {/* <img src={secIcon} className="hour" /> */}
        <img src={minIcon} className="minute" />
        <img src={secIcon} style={{ transform: `translate(3px, 9px) rotate(${240 + (seconds)}deg)` }} className="second" />
      </div>
    </div>
  )
}

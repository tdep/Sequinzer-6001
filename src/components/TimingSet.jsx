import { useState, useEffect } from 'react'

import Transport from './Transport'

const TimingSet = () => {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  
  return (
    <>
      <Transport setIsActive={setIsActive}/>
    </>
  )
}

export default TimingSet
    
      // useEffect(() => {
      //   let interval = null;
      //   if (isActive) {
      //     interval = setInterval(() => {
      //       setSeconds(seconds => seconds + 1);
      //     }, tempo);
      //   } else if (!isActive && seconds !== 0) {
      //     clearInterval(interval)
      //   }
      //   return () => clearInterval(interval);
      // }, [isActive, seconds]);
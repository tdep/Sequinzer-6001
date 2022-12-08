import { useState, useEffect } from 'react'
//import timer from App
const TimingSet = ({ rate }) => {
  const [toggle, setToggle] = useState(false)
  const [currentBar, setCurrentBar] = useState(0)
  const row = [{0:1}, {1:2}, {2:3}, {3:4}, {4:5}, {5:6}, {6:7}, {7:8}]

  const beats = (60 / rate) * 1000

  useEffect(() => {
    let interval = null;
    if(toggle) {
      interval = setInterval(() => {
        if(currentBar >= row.length) {
          setCurrentBar(0)
        }
        setCurrentBar(currentBar => currentBar + 1)
        row.map((note) => {
          console.log(note[currentBar])
          console.log(beats/1000)
        })
      }, beats)
    } else if (!toggle && currentBar !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [toggle, currentBar])

return (
  <div>
    <button onClick={() => setToggle(!toggle)}>Toggle</button>
    <p>{currentBar}</p>
  </div>
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
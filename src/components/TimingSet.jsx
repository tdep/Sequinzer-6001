import { useState, useEffect } from 'react'

//creates a finite-repeating timer that is connected to the tempo dial
const TimingSet = ({ rate, currentBar, setCurrentBar }) => {
  const [toggle, setToggle] = useState(false) //temporary on/off switch
  // const [currentBar, setCurrentBar] = useState(0) //the 'clock'
  // const row = [{0:1}, {1:2}, {2:3}, {3:4}, {4:5}, {5:6}, {6:7}, {7:8}] //temporary bar set
  const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] //hardcoded clock setter

  const beats = (60 / rate) * 1000 //adjusts bpm to work with the interval which is in ms

  useEffect(() => {
    let interval = null;
    if(toggle) {//if toggle is on, count
      interval = setInterval(() => {
        if(currentBar >= row.length) {//if we reach the end of the grid, reset
          setCurrentBar(0)
        }
        setCurrentBar(currentBar => currentBar + 1) //runs an annonymous function when setCurrentBar is called
        // row.map((note) => {
        //   // console.log(note[currentBar])
        //   // console.log(beats/1000)
        // })
      }, beats)
    } else if (!toggle && currentBar !== 0) {// if toggle is not on and the bar is not at 0, pause
      clearInterval(interval)
    }
    return () => clearInterval(interval)//otherwise stop
  }, [toggle, currentBar])

return (
  <div>
    <button onClick={() => setToggle(!toggle)}>Toggle</button>
    <p>{currentBar}</p>
  </div>
)
}

export default TimingSet
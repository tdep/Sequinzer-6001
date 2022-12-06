import { useState, useEffect } from 'react'

const Header = () => {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const play = () => {
    setIsActive(true)
  }

  const pause = () => {
    setIsActive(false)
  }

  const reset = () => {
    setSeconds(0);
    setIsActive(false)
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

    return(
      <div className="header">
        <div className="title">
          <h1>Sequinzer 6001 </h1>
        </div>
        <div className="speed">
          {seconds}
        </div>
        <div className = "transport">
          <button onClick={play} className="play">Play</button>
          <button onClick={pause} className="pause">Pause</button>
          <button onClick={reset} className="stop">Stop</button>
        </div>
        <div className = "file">
          <button className="new">New</button>
          <button className="save">Save</button>
          <button className="load">Load</button>
          <button className="delete">Del</button>
        </div>
      </div>
    )
  }

  export default Header
import { useState, useEffect } from 'react'

const Tempo = () => {
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

    return (
        <div className="tempo">
            <label for="tempo-control">Tempo</label>
            <input 
                type="range" 
                id="tempo-control" 
                name="tempo-control" 
                min="0" 
                max="240"
            />
        </div>
    )
}

export default Tempo
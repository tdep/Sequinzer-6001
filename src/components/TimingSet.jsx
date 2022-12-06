const TimingSet = () => {
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)
  
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
}

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
export {TimingSet, play, pause, reset}
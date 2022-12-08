const Transport = ({setIsActive, setTimer}) => {

    return (
        <div className = "transport">
            <button onClick={()=>{setIsActive(true)}} className="play">Play</button>
            <button onClick={()=>{setIsActive(false)}} className="pause">Pause</button>
            <button onClick={()=>{setIsActive(false); setTimer(0)}} className="stop">Stop</button>
        </div>
    )
}

export default Transport
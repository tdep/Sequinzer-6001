

const Transport = () => {
    return (
        <div className = "transport">
            <button onClick={play} className="play">Play</button>
            <button onClick={pause} className="pause">Pause</button>
            <button onClick={reset} className="stop">Stop</button>
        </div>
    )
}

export default Transport
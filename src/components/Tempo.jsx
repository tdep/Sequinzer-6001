import { useState, useEffect } from 'react'


const Tempo = () => {
    const [rate, setRate] = useState(60)
    const slider = document.getElementById("tempo-control")
    const slideHandler = () => {
        setRate(slider.value)
    }
    const tempo = rate;

    return (
        <div className="tempo">
            <p><label for="tempo-control">Tempo</label>
            <input 
                type="range" 
                orient="vertical"
                name="tempo-control"
                id="tempo-control"
                class="slider"
                value={rate}
                min="0" 
                max="240"
                onChange={slideHandler}
            />
            <span class="slider_label">Tempo: {tempo}</span></p>
        </div>
    )
}

export default Tempo
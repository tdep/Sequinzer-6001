import { useState, useEffect } from 'react'
import TimingSet from './TimingSet'

const Tempo = () => {
    const [rate, setRate] = useState(60)
    const slider = document.getElementById("tempo-control")
    const radialDial = document.getElementById("tempo-dial")
    const slideHandler = () => {
        setRate(slider.value)
        radialDial.style.transform = `rotate(${slider.value}deg)`
    }
    const tempo = rate;

    return (
        <div className="tempo">
            <div><label for="tempo-control">Tempo: {tempo}bpm</label>
            <div className="dial">
                <img 
                    id="tempo-dial" 
                    src="src/assets/radialDial.png" 
                    height="50px" 
                    width="50px"
                />
                <div className="input">
                    <input 
                        type="range" 
                        orient="vertical"
                        name="tempo-control"
                        id="tempo-control"
                        class="slider"
                        value={rate}
                        min="0" 
                        max="280"
                        onChange={slideHandler}
                    />
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Tempo
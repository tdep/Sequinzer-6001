import { useState, useEffect } from 'react'
import NodeGrid from './components/defunct/NodeGrid'
import Oscillators from './components/Oscillators'
import Header from './components/Header'
import Controls from './components/Controls'
import * as Tone from 'tone'
import { useSequencer } from 'react-sequencer'
//import TimingSet to effect timer

const App = () => {
  const [data, setData] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [rate, setRate] = useState(60)
  const [currentBar, setCurrentBar] = useState(0)
  // const steps = [[1, rate], [2, rate], [3, rate], [4, rate], [5, rate], [6, rate], [7, rate], [8, rate], [9, rate], [10, rate], [11, rate], [12, rate], [13, rate], [14, rate], [15, rate], [16, rate],]



  useEffect (() => {
    const request = async () => {
      let req = await fetch("http://localhost:3000/nodes")
      let res = await req.json()
      setData(res)
    }
    request()
  }, [])

  
  const synth = (name) => {
    const cToGSharp = new Tone.PolySynth(Tone.Synth).toDestination();
    const gToDSharp = new Tone.PolySynth(Tone.Synth).toDestination();
    const dToC = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now()

    cToGSharp.triggerAttackRelease(name, "8n", now)
    gToDSharp.triggerAttackRelease(name, "8n", now)
    dToC.triggerAttackRelease(name, "8n", now)
  }


  const onOffSwitch = (target) => {//sets the logic for the button action
    target.active = !target.active
    const noteButton = document.getElementById(`${target.id}`)
    const notePosition = parseInt(target.id.slice(0,2))*1
    if (target.active) {
      noteButton.style.background = "green"
      synth(target.name)
      console.log(target.name, target.id, notePosition)
      if (notePosition === currentBar){
        console.log(notePosition === currentBar)
      }
    } else {
      noteButton.style.background = "lightgrey"
    }
    // noteButton.style.background = target.active?"green":"lightgrey"//sets the css to correspond with the logic
    // console.log(target, target.active)
}

  return (
    <>
        <Header 
          setIsActive={setIsActive} 
          rate={rate} 
          setRate={setRate}
          currentBar={currentBar}
          setCurrentBar={setCurrentBar}
          Tone={Tone}
          useSequencer={useSequencer}
          />

        <div className="main">
          <Controls />
          <Oscillators data={data} currentBar={currentBar} onOffSwitch={onOffSwitch} />
          {/* <NodeGrid grid={grid} /> */}
        </div>

    </>
    
  )
}

export default App
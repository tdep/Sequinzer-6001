import { useState, useEffect } from 'react'
import NodeGrid from './components/defunct/NodeGrid'
import Oscillators from './components/Oscillators'
import Header from './components/Header'
import Controls from './components/Controls'
//import TimingSet to effect timer

const App = () => {
  const [data, setData] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [rate, setRate] = useState(60)
  const [currentBar, setCurrentBar] = useState(0)

  useEffect (() => {
    const request = async () => {
      let req = await fetch("http://localhost:3000/nodes")
      let res = await req.json()
      setData(res)
    }
    request()
  }, [])

  // useEffect (() => {
  //   const request = async () => {
  //     let req = await fetch(`http://localhost:3000/nodes`, {
  //       method: "POST",
  //       headers: {
  //         'Content-Type' : 'application/json',
  //       },
  //       body: JSON.stringify()

  //     })
  //   }
  // })

  const onOffSwitch = (target) => {//sets the logic for the button action
    target.active = !target.active
    const noteButton = document.getElementById(`${target.id}`)
    noteButton.style.background = target.active?"green":"lightgrey"//sets the css to correspond with the logic
    // console.log(target, target.active)
}
//POST request to update objects???
  return (
    <>
        <Header 
          setIsActive={setIsActive} 
          rate={rate} 
          setRate={setRate}
          currentBar={currentBar}
          setCurrentBar={setCurrentBar}
          />
        {/* export timer value */}
        <div className="main">
          <Controls />
          <Oscillators data={data} currentBar={currentBar} onOffSwitch={onOffSwitch} />
          {/* <NodeGrid grid={grid} /> */}
        </div>

    </>
    
  )
}

export default App
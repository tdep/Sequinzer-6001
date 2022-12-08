import { useState, useEffect } from 'react'
import NodeGrid from './components/NodeGrid'
import Oscillators from './components/Oscillators'
import Header from './components/Header'
import Controls from './components/Controls'
//import TimingSet to effect timer

const App = () => {
  const [data, setData] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [rate, setRate] = useState(60)

  // useEffect (() => {
  //   const request = async () => {
  //     let req = await fetch("http://localhost:3000/nodes")
  //     let res = await req.json()
  //     setGrid(res)
  //   }
  //   request()
  // }, [])

  useEffect (() => {
    const request = async () => {
      let req = await fetch("http://localhost:3000/nodes")
      let res = await req.json()
      setData(res)
    }
    request()
  }, [])
//POST request to update objects???
  return (
    <>
        <Header setIsActive={setIsActive} rate={rate} setRate={setRate}/>
        {/* export timer value */}
        <div className="main">
          <Controls />
          <Oscillators data={data}/>
          {/* <NodeGrid grid={grid} /> */}
        </div>

    </>
    
  )
}

export default App
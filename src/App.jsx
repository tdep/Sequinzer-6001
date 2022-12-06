import { useState, useEffect } from 'react'
import NodeGrid from './components/NodeGrid'
import Header from './components/Header'
import Controls from './components/Controls'


const App = () => {
  const [grid, setGrid] = useState([])

  useEffect (() => {
    const request = async () => {
      let req = await fetch("http://localhost:3000/nodes")
      let res = await req.json()
      setGrid(res)
    }
    request()
  }, [])

  return (
    <>

        <Header />
        <div className="main">
          <Controls />
          <NodeGrid grid={grid} />
        </div>

    </>
    
  )
}

export default App
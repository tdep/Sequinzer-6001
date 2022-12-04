import { useState } from 'react'

const NodeGrid = ({ grid }, num) => {
    const [noteRow, setNoteRow] = useState([])
    const aNoteRow = []
    const rowPopulator = () => {
        grid.map((note) => {
            
        }
        )
    }
    return (
        rowPopulator()
    )
  }

  export default NodeGrid

  // const grid = [
  //   [{},{},{},{},{},{}],
  //   [{},{},{},{},{},{}],
  //   [{},{},{},{},{},{}],
  //   [{},{},{},{},{},{}],
  //   [{},{},{},{},{},{}],
  //   [{},{},{},{},{},{}]
  // ]


    /* // const Grid = () => {
  //   const w = grid[0].length
  //   const h = grid.length
  //   return(
  //     <div style={{display: 'flex', width: `calc(100px * ${w}`, flexWrap: 'wrap'}} className="gridDiv">
  //     {
  //       grid.map((row) => {
  //         return row.map((square) => {
  //           return (
  //           <button className="button" onClick={() => {console.log("Boop!")}}></button>
  //           )
  //         })
  //       })
  //     }
  //     </div>
  //     )
  //   } */
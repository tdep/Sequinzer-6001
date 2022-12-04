import { useState } from 'react'

const onOffSwitch = (target) => {
    return !target.active
}

const NodeGrid = ({ grid }) => {
    const noteGrid = []
    const rowPopulator = () => {
        grid.map((note) => {
            const fillArray = (len) => {
                const aNoteRow = [];
                for (let i = 0; i < len; i++) {
                    aNoteRow.push(note);
                }
                return noteGrid.push(aNoteRow)
            }
            return fillArray(12)
        })
    }
    rowPopulator()
    console.log(noteGrid)
    return (
        <div className="gridDiv">
            {
                noteGrid.map((row) => {
                    return row.map((node) => {
                        for (let i = 1; i < row.length - 1; i++) {
                            node.id = i//somehow i need to make the node id equal to the original id plus the position on the arrayt so each one is individual, perhaps it can be the name of the note concated with the id?????
                        }
                        return (
                            <button 
                            id = {node.id}
                            onClick={() => {onOffSwitch(node)}} 
                            style={{background: node.active ? "green" : "lightgrey"}}
                            >{node.note}</button>
                        )
                    })
                })
            }
        </div>
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
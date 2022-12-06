import { useState } from 'react'

const onOffSwitch = (target) => {
    target.active = !target.active
    document.getElementById(`${target.id}`).style.background = target.active?"green":"lightgrey"
    console.log(target)
    console.log(target.id)
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
    return (
        <div className="gridDiv">
            {
                noteGrid.map((row) => {
                    return row.map((node, i) => {
                        i += 1
                        console.log(node)
                        node.id = `${node.note}` + i
                        return (
                            <button 
                            id = {node.id}
                            onClick={() => {onOffSwitch(node)}} 
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
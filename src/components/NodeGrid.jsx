import { useState } from 'react'

const onOffSwitch = (target) => {
    target.active = !target.active
    const noteButton = document.getElementById(`${target.id}`)
    noteButton.style.background = target.active?"green":"lightgrey"
    // console.log(target, target.active)
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
            return fillArray(16)
        })
    }
    rowPopulator()
    return (
        <div className="gridDiv">
            {
                noteGrid.map((row) => {
                    return row.map((node, i) => {
                        i += 1
                        node.id = `${node.note}` + i
                        return (
                            <button 
                            id = {node.id}
                            onClick={(e) => {
                                e.preventDefault()
                                onOffSwitch(e.target)}} 
                            >{node.note}</button>
                        )
                    })
                })
            }
        </div>
    )
  }

  export default NodeGrid

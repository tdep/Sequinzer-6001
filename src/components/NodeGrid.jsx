import { useState } from 'react'
import Oscillators from './Oscillators'

const onOffSwitch = (target) => {//sets the logic for the button action
    target.active = !target.active
    const noteButton = document.getElementById(`${target.id}`)
    noteButton.style.background = target.active?"green":"lightgrey"//sets the css to correspond with the logic
    // console.log(target, target.active)
}

const NodeGrid = ({ grid }) => { //grid is the fetched objects from App
    const noteGrid = [] //array for all of the row arrays
    const rowPopulator = () => {
        grid.map((note) => { //separate all of the objects from grid
            const fillArray = (len) => { //populate rows by a set length(len)
                const aNoteRow = [];
                for (let i = 0; i < len; i++) {
                    aNoteRow.push(note); //pushes duplicates of each note to the row array by the number of len
                }
                return noteGrid.push(aNoteRow) //pushes the rows into the grid array
            }
            return fillArray(16) //sets how many times the notes are duplicated
        })
    }
    rowPopulator() //invoking the function
    return (
        <div className="gridDiv">
            {
                noteGrid.map((row) => {//populate the grid in the dom with the grid array from above
                    return row.map((node, i) => {//node = each square, i is to set ids
                        i += 1
                        node.id = `${node.note}` + i
                        return (
                            <button 
                            id = {node.id}
                            onClick={(e) => {//call the function to control the logic for each button
                                e.preventDefault()
                                onOffSwitch(e.target)}} 
                            >{node.note}</button>
                        )
                    })
                })
            }
            <Oscillators noteGrid={noteGrid}/>
        </div>
    )
  }

  export default NodeGrid

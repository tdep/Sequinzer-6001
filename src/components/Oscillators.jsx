import { useEffect, useState } from 'react'

// const onOffSwitch = (target) => {//sets the logic for the button action
//     target.active = !target.active
//     const noteButton = document.getElementById(`${target.id}`)
//     noteButton.style.background = target.active?"green":"lightgrey"//sets the css to correspond with the logic
//     // console.log(target, target.active)
// }


const Oscillators = ({ data, currentBar, onOffSwitch }) => {

    const osc1 = [data.hiC]
    const osc2 = [data.B]
    const osc3 = [data.Bb]
    const osc4 = [data.A]
    const osc5 = [data.GSharp]
    const osc6 = [data.G]
    const osc7 = [data.FSharp]
    const osc8 = [data.F]
    const osc9 = [data.E]
    const osc10 = [data.DSharp]
    const osc11 = [data.D]
    const osc12 = [data.CSharp]
    const osc13 = [data.loC]

    const row1 = []
    const row2 = []
    const row3 = []
    const row4 = []
    const row5 = []
    const row6 = []
    const row7 = []
    const row8 = []
    const row9 = []
    const row10 = []
    const row11 = []
    const row12 = []
    const row13 = []

    const grid =[]
    //Oscillator Bank
    const oscBank = async () => {
        const oscillator1 = () => {
            //populate the row with objects
            osc1.map((notes) => {
                notes.map((note) => {
                    return (
                        row1.push(note)
                    )
                })
            })
            grid.push(row1)
        }
        oscillator1()
        
        const oscillator2 = () => {
            osc2.map((notes) => {
                notes.map((note) => {
                    return (
                        row2.push(note)
                    )
                })
            })
            grid.push(row2)
        }
        oscillator2()
        
        const oscillator3 = () => {
            osc3.map((notes) => {
                notes.map((note) => {
                    return (
                        row3.push(note)
                    )
                })
            })
            grid.push(row3)
        }
        oscillator3()
    
        const oscillator4 = () => {
            osc4.map((notes) => {
                notes.map((note) => {
                    return (
                        row4.push(note)
                    )
                })
            })
            grid.push(row4)
        }
        oscillator4()
    
        const oscillator5 = () => {
            osc5.map((notes) => {
                notes.map((note) => {
                    return (
                        row5.push(note)
                    )
                })
            })
            grid.push(row5)
        }
        oscillator5()
        
        const oscillator6 = () => {
            osc6.map((notes) => {
                notes.map((note) => {
                    return (
                        row6.push(note)
                    )
                })
            })
            grid.push(row6)
        }
        oscillator6()
    
        const oscillator7 = () => {
            osc7.map((notes) => {
                notes.map((note) => {
                    return (
                        row7.push(note)
                    )
                })
            })
            grid.push(row7)
        }
        oscillator7()
    
        const oscillator8 = () => {
            osc8.map((notes) => {
                notes.map((note) => {
                    return (
                        row8.push(note)
                    )
                })
            })
            grid.push(row8)
        }
        oscillator8()
    
        const oscillator9 = () => {
            osc9.map((notes) => {
                notes.map((note) => {
                    return (
                        row9.push(note)
                    )
                })
            })
            grid.push(row9)
        }
        oscillator9()
        
        const oscillator10 = () => {
            osc10.map((notes) => {
                notes.map((note) => {
                    return (
                        row10.push(note)
                    )
                })
            })
            grid.push(row10)
        }
        oscillator10()
    
        const oscillator11 = () => {
            osc11.map((notes) => {
                notes.map((note) => {
                    return (
                        row11.push(note)
                    )
                })
            })
            grid.push(row11)
        }
        oscillator11()
    
        const oscillator12 = () => {
            osc12.map((notes) => {
                notes.map((note) => {
                    return (
                        row12.push(note)
                    )
                })
            })
            grid.push(row12)
        }
        oscillator12()
    
        const oscillator13 = () => {
            osc13.map((notes) => {
                notes.map((note) => {
                    return (
                        row13.push(note)
                    )
                })
            })
            grid.push(row13)
        }
        oscillator13()

    }
    //put the play function here
    // console.log(row1)
    oscBank()

    return(
        <div className="gridDiv">
            {
                grid.map((row) => {
                    return row.map((node) => {
                        return(
                            <button
                            id = {node.id}
                            name = {node.note}
                            onClick={(e) => {
                                e.preventDefault()
                                onOffSwitch(e.target)
                            }}
                            >{node.note}</button>
                        )
                    })
                })
            }
        </div> 
    )

}

export default Oscillators
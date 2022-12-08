import { useEffect } from 'react'

const onOffSwitch = (target) => {//sets the logic for the button action
    target.active = !target.active
    const noteButton = document.getElementById(`${target.id}`)
    noteButton.style.background = target.active?"green":"lightgrey"//sets the css to correspond with the logic
    // console.log(target, target.active)
}
const Oscillators = ({ data }) => {
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
    //Oscillator Bank
    const oscBank = async () => {
        const oscillator1 = async () => {
            osc1.map((notes) => {
                notes.map((note) => {
                    console.log(note)
                })
            })
        }
        oscillator1()
        
        const oscillator2 = () => {
            osc2.map((notes) => {
                notes.map((note) => {
                    console.log(note)
                })
            })
        }
        oscillator2()
        
        const oscillator3 = () => {
            osc3.map((notes) => {
                notes.map((note) => {
                    console.log(note)
                })
            })
        }
        oscillator3()
    
        const oscillator4 = () => {
            osc4.map((notes) => {
                notes.map((note) => {
                    console.log(note)
                })
            })
        }
        oscillator4()
    
        const oscillator5 = () => {
            osc5.map((notes) => {
                notes.map((note) => {
                    console.log(note)
                })
            })
        }
        oscillator5()
        
        const oscillator6 = () => {
            osc6.map((notes) => {
                notes.map((note) => {
                    console.log(note)
                })
            })
        }
        oscillator6()
    
        const oscillator7 = () => {
            osc7.map((notes) => {
                notes.map((note) => {
                    console.log(note)
                })
            })
        }
        oscillator7()
    
        const oscillator8 = () => {
            osc8.map((notes) => {
                notes.map((note) => {
                    console.log(note)
                })
            })
        }
        oscillator8()
    
        const oscillator9 = () => {
            osc9.map((notes) => {
                notes.map((note) => {
                    console.log(note)
                })
            })
        }
        oscillator9()
        
        const oscillator10 = () => {
            osc10.map((notes) => {
                notes.map((note) => {
                    console.log(note)
                })
            })
        }
        oscillator10()
    
        const oscillator11 = () => {
            osc11.map((notes) => {
                notes.map((note) => {
                    console.log(note)
                })
            })
        }
        oscillator11()
    
        const oscillator12 = () => {
            osc12.map((notes) => {
                notes.map((note) => {
                    console.log(note)
                })
            })
        }
        oscillator12()
    
        const oscillator13 = () => {
            osc13.map((notes) => {
                notes.map((note) => {
                    console.log(note)
                })
            })
        }
        oscillator13()

    }

    oscBank()

    return(
        <div>

        </div> 
    )

}

export default Oscillators
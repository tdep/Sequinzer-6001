import { useEffect } from 'react'
const Oscillators = ({noteGrid}) => {
    //Oscillator Bank
    const beatIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    const oscPlay = async () => {
        beatIndex.map((beat, i) => {
            noteGrid.map((row) => {//populate the grid in the dom with the grid array from above
                return row.map((node, j) => {//node = each square, i is to set ids
                    j += 1//set i to be 1 more than the index
                    node.id = `${node.note}` + j 
                    console.log(row[i].node)
                    // console.log(`${j}: ${node.id}`)
                })
            })

        })
        
    }
    oscPlay()
    // const oscillator1 = async () => {
    //     osc1.forEach((note1, i) => {
    //         const note2 = osc2[i];
    //         console.log(`osc1: ${note1}, osc2: ${note2}`)
    //     })
    //     // console.log(noteGrid)
    //     // console.log(noteGrid[0])
    //     // console.log(noteGrid[0][4])
    // }
    // oscillator1()

    
    // const oscillator2 = () => {
    //     console.log(noteGrid[1])
    // }
    // oscillator2()

    // const oscillator3 = () => {
    //     console.log(noteGrid[2])
    // }
    // oscillator3()

    // const oscillator4 = () => {
    //     console.log(noteGrid[3])
    // }
    // oscillator4()

    // const oscillator5 = () => {
    //     console.log(noteGrid[4])
    // }
    // oscillator5()
    
    // const oscillator6 = () => {
    //     console.log(noteGrid[5])
    // }
    // oscillator6()

    // const oscillator7 = () => {
    //     console.log(noteGrid[6])
    // }
    // oscillator7()

    // const oscillator8 = () => {
    //     console.log(noteGrid[7])
    // }
    // oscillator8()

    // const oscillator9 = () => {
    //     console.log(noteGrid[8])
    // }
    // oscillator9()
    
    // const oscillator10 = () => {
    //     console.log(noteGrid[9])
    // }
    // oscillator10()

    // const oscillator11 = () => {
    //     console.log(noteGrid[10])
    // }
    // oscillator11()

    // const oscillator12 = () => {
    //     console.log(noteGrid[11])
    // }
    // oscillator12()

    // const oscillator13 = () => {
    //     console.log(noteGrid[12])
    // }
    // oscillator13()

}

export default Oscillators
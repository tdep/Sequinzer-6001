const onOffSwitch = (target) => {//sets the logic for the button action
    target.active = !target.active
    const noteButton = document.getElementById(`${target.id}`)
    noteButton.style.background = target.active?"green":"lightgrey"//sets the css to correspond with the logic
    // console.log(target, target.active)
}

const Grid = ({ grid }) => {
    console.log(grid)
    
}

export default Grid
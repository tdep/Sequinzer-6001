import { useState } from 'react'
import Oscillators from './Oscillators'

const Grid = ({ data }) => {
    return (
        <div className="gridDiv">
            <Oscillators data={data} />
        </div>
    )
}

export default Grid
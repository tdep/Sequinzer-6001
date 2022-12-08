import { useState, useEffect } from 'react'
import Tempo from './Tempo'
import Transport from './Transport'
import File from './File'

const Header = ({setIsActive, setTimer}) => {

    return(
      <div className="header">
        <div className="title">
          <h1>Sequinzer 6001 </h1>
        </div>
        <Tempo />
        <Transport setIsActive={setIsActive} setTimer={setTimer}/>
        <File />
      </div>
    )
  }

  export default Header
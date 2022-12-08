import { useState, useEffect } from 'react'
import Tempo from './Tempo'
import Transport from './Transport'
import File from './File'
import TimingSet from './TimingSet'

const Header = ({setIsActive, setTimer, rate, setRate}) => {

    return(
      <div className="header">
        <div className="title">
          <h1>Sequinzer 6001 </h1>
          <TimingSet rate={rate}/>
        </div>
        <Tempo rate={rate} setRate={setRate}/>
        <Transport setIsActive={setIsActive} setTimer={setTimer}/>
        <File />
      </div>
    )
  }

  export default Header
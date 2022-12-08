import { useState, useEffect } from 'react'
import Tempo from './Tempo'
import Transport from './Transport'
import File from './File'
import TimingSet from './TimingSet'

const Header = ({setIsActive, setTimer, rate, setRate, currentBar, setCurrentBar, Tone, useSequencer}) => {

    return(
      <div className="header">
        <div className="title">
          <h1>Sequinzer 6001 </h1>
          <TimingSet rate={rate} currentBar={currentBar} setCurrentBar={setCurrentBar} useSequencer={useSequencer}/>
        </div>
        <Tempo rate={rate} setRate={setRate}/>
        <Transport setIsActive={setIsActive} setTimer={setTimer} Tone={Tone} rate={rate} />
        <File />
      </div>
    )
  }

  export default Header
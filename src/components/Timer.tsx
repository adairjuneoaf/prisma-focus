import React, { useEffect, useState } from 'react'
import { Content } from '../styles/components/Timer'

import ArrowInit from '../assets/svg/play_arrow.svg'

export function Timer() {
  const [time, setTime] = useState(25 * 60)
  const [activeCutdown, setActiveCutdown] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  function handleStartCutdown() {
    setActiveCutdown(true)
  }

  useEffect(() => {
    if (activeCutdown && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [activeCutdown, time])

  return (
    <Content>
      <div className="timer">
        <div className="minutes">
          <h4>{minutesLeft}</h4>
          <h4>{minutesRight}</h4>
        </div>
        <span>:</span>
        <div className="seconds">
          <h4>{secondsLeft}</h4>
          <h4>{secondsRight}</h4>
        </div>
      </div>
      <button type="button" onClick={handleStartCutdown}>
        Iniciar um ciclo
        <span>
          <ArrowInit />
        </span>
      </button>
    </Content>
  )
}

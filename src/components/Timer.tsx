import React, { useContext } from 'react'

import { Content } from '../styles/components/Timer'

import ArrowInit from '../assets/svg/play_arrow.svg'
import CloseCycle from '../assets/svg/close_cycle.svg'
import CheckCircle from '../assets/svg/check_circle.svg'

import { CountdownContext } from '../contexts/CountdownContext'

export function Timer() {
  const {
    minutes,
    seconds,
    activeCountdown,
    hasFinishedCountdown,
    handleStartCutdown,
    handleResetCutdown
  } = useContext(CountdownContext)

  const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

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
      {activeCountdown && hasFinishedCountdown === false ? (
        <button
          type="button"
          className="disableCutdown"
          onClick={handleResetCutdown}
        >
          Abandonar ciclo
          <span>
            <CloseCycle />
          </span>
        </button>
      ) : (
        <>
          {activeCountdown === false && hasFinishedCountdown === true ? (
            <button disabled type="button" className="cycleCompleted">
              Ciclo finalizado
              <span>
                <CheckCircle />
              </span>
            </button>
          ) : (
            <button
              type="button"
              className="activeCutdown"
              onClick={handleStartCutdown}
            >
              Iniciar um ciclo
              <span>
                <ArrowInit />
              </span>
            </button>
          )}
        </>
      )}
    </Content>
  )
}

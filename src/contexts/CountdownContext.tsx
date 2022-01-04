import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { ChallengesContext } from './ChallengesContext'

interface CountdownContextProps {
  minutes: number
  seconds: number
  activeCountdown: boolean
  hasFinishedCountdown: boolean
  handleStartCutdown: () => void
  handleResetCutdown: () => void
}

interface CountdownProviderProps {
  children: ReactNode
}

let countdownTimeout: number

export const CountdownContext = createContext({} as CountdownContextProps)

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.1 * 60)
  const [activeCountdown, setActiveCountdown] = useState(false)
  const [hasFinishedCountdown, setHasFinishedCountdown] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function handleStartCutdown() {
    setActiveCountdown(true)
    new Audio('/pop-alert-button.mp3').play()
  }

  function handleResetCutdown() {
    clearTimeout(countdownTimeout)
    setHasFinishedCountdown(false)
    setActiveCountdown(false)
    setTime(0.1 * 60)

    new Audio('/pop-alert-button.mp3').play()
  }

  useEffect(() => {
    if (activeCountdown && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (activeCountdown && time === 0) {
      setHasFinishedCountdown(true)
      setActiveCountdown(false)
      startNewChallenge()
    }
  }, [activeCountdown, time])

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        activeCountdown,
        hasFinishedCountdown,
        handleStartCutdown,
        handleResetCutdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}

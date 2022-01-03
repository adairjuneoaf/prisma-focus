import React, { createContext, ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import challengesJSON from '../../challenges.json'

interface ChallengesProviderProps {
  children: ReactNode
  Level: number
  CurrentExperience: number
  ChallengeCompleted: number
}

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextProps {
  Level: number // VARIÁVEL ONDE O LEVEL ATUAL É ARMAZENADO.
  LevelUp: () => void // FUNÇÃO RESPONSÁVEL POR EFETUAR UPGRADE DE LEVEL.
  CurrentExperience: number // VARIÁVEL ONDE A EXPERIÊNCIA ATUAL DO USUÁRIO É ARMAZENADA.
  ChallengeCompleted: number // VARIÁVEL ONDE A QUANTIDADE DE DESAFIOS CONCLUÍDOS PELO USUÁRIO É ARMAZENADA.
  startNewChallenge: () => void // FUNÇÃO RESPONSÁVEL POR INICIAR NOVOS DESAFIOS EM TELA PARA OS USUÁRIOS.
  ChallengeActive: Challenge // VARIÁVEL ONDE É ARMAZENADO DESAFIO EXIBIDO EM TELA NO MOMENTO.
  resetChallengeFailed: () => void // FUNÇÃO RESPONSÁVEL POR RESETAR O BOX DE DESAFIOS CASO USUÁRIO FALHE O DESAFIO.
  experienceToNextLevel: number // VARIÁVEL ONDE É ARMAZENADO A QUANTIDADE DE EXPERIÊNCIA PARA O PRÓXIMO LEVEL.
  CurrentExpirienceAndLevelUp: () => void // FUNÇÃO RESPONSÁVEL POR EFETUAR OS CÁLCULOS DE UPGRADE DO LEVEL DE USUÁRIOS.
  ChallengeCompletedUp: () => void // FUNÇÃO RESPONSÁVEL POR MARCAR DESAFIOS COMO CONCLUÍDOS PELOS USUÁRIOS.
}

export const ChallengesContext = createContext({} as ChallengesContextProps)

export function ChallengesProvider({
  children,
  ...cookie
}: ChallengesProviderProps) {
  const [Level, setLevel] = useState(cookie.Level ?? 1)
  const [CurrentExperience, setCurrentExpirience] = useState(
    cookie.CurrentExperience ?? 0
  )
  const [ChallengeCompleted, setChallengeCompleted] = useState(
    cookie.ChallengeCompleted ?? 0
  )
  const [ChallengeActive, setChallengeActive] = useState(null)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('Level', String(Level))
    Cookies.set('CurrentExperience', String(CurrentExperience))
    Cookies.set('ChallengeCompleted', String(ChallengeCompleted))
  }, [Level, CurrentExperience, ChallengeCompleted])

  const experienceToNextLevel = Math.pow((Level + 1) * 5, 2)

  function LevelUp() {
    setLevel(Level + 1)
  }

  function ChallengeCompletedUp() {
    setChallengeCompleted(ChallengeCompleted + 1)
  }

  function CurrentExpirienceAndLevelUp() {
    if (!ChallengeActive) {
      return 0
    }

    const { amount } = ChallengeActive

    let finalExpirience = CurrentExperience + amount

    if (finalExpirience >= experienceToNextLevel) {
      finalExpirience = finalExpirience - experienceToNextLevel
      LevelUp()
    }

    setCurrentExpirience(finalExpirience)
    setChallengeActive(null)
    ChallengeCompletedUp()
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(
      Math.random() * challengesJSON.length
    )
    const challenge = challengesJSON[randomChallengeIndex]

    setChallengeActive(challenge)

    if (Notification.permission === 'granted') {
      // eslint-disable-next-line no-new
      new Audio('/notification-happy-challenge.wav').play()
      // eslint-disable-next-line no-new
      new Notification('Novo desafio disponível!', {
        body: `Valendo ${challenge.amount} xp!`
      })
    }
  }

  function resetChallengeFailed() {
    setChallengeActive(null)
  }

  return (
    <ChallengesContext.Provider
      value={{
        Level,
        LevelUp,
        CurrentExperience,
        ChallengeCompleted,
        startNewChallenge,
        ChallengeActive,
        resetChallengeFailed,
        experienceToNextLevel,
        CurrentExpirienceAndLevelUp,
        ChallengeCompletedUp
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}

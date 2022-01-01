import React, { createContext, ReactNode, useState } from 'react'

import challengesJSON from '../../challenges.json'

interface ChallengesProviderProps {
  children: ReactNode
}

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextProps {
  Level: number // VARIÁVEL ONDE O LEVEL ATUAL É ARMAZENADO.
  LevelUp: () => void // FUNÇÃO RESPONSÁVEL POR EFETUAR UPGRADE DE LEVEL.
  CurrentExpirience: number // VARIÁVEL ONDE A EXPERIÊNCIA ATUAL DO USUÁRIO É ARMAZENADA.
  ChallengeCompleted: number // VARIÁVEL ONDE A QUANTIDADE DE DESAFIOS CONCLUÍDOS PELO USUÁRIO É ARMAZENADA.
  startNewChallenge: () => void // FUNÇÃO RESPONSÁVEL POR INICIAR NOVOS DESAFIOS EM TELA PARA OS USUÁRIOS.
  ChallengeActive: Challenge // VARIÁVEL ONDE É ARMAZENADO DESAFIO EXIBIDO EM TELA NO MOMENTO.
  resetChallengeFailed: () => void // FUNÇÃO RESPONSÁVEL POR RESETAR O BOX DE DESAFIOS CASO USUÁRIO FALHE O DESAFIO.
  experienceToNextLevel: number // VARIÁVEL ONDE É ARMAZENADO A QUANTIDADE DE EXPERIÊNCIA PARA O PRÓXIMO LEVEL.
  CurrentExpirienceUp: () => void // FUNÇÃO RESPONSÁVEL POR EFETUAR OS CÁLCULOS DE UPGRADE DO LEVEL DE USUÁRIOS.
  ChallengeCompletedUp: () => void // FUNÇÃO RESPONSÁVEL POR MARCAR DESAFIOS COMO CONCLUÍDOS PELOS USUÁRIOS.
}

export const ChallengesContext = createContext({} as ChallengesContextProps)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [Level, setLevel] = useState(1)
  const [CurrentExpirience, setCurrentExpirience] = useState(0)
  const [ChallengeCompleted, setChallengeCompleted] = useState(0)
  const [ChallengeActive, setChallengeActive] = useState(null)

  const experienceToNextLevel = Math.pow((Level + 1) * 5, 2)

  function LevelUp() {
    setLevel(Level + 1)
  }

  function CurrentExpirienceUp() {
    setCurrentExpirience(0)
  }

  function ChallengeCompletedUp() {
    setChallengeCompleted(0)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(
      Math.random() * challengesJSON.length
    )
    const challenge = challengesJSON[randomChallengeIndex]

    setChallengeActive(challenge)
  }

  function resetChallengeFailed() {
    setChallengeActive(null)
  }

  return (
    <ChallengesContext.Provider
      value={{
        Level,
        LevelUp,
        CurrentExpirience,
        ChallengeCompleted,
        startNewChallenge,
        ChallengeActive,
        resetChallengeFailed,
        experienceToNextLevel,
        CurrentExpirienceUp,
        ChallengeCompletedUp
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}

import React, { useContext } from 'react'
import { Container, Content } from '../styles/components/Challenges'

import ArrowNewChallenge from '../assets/svg/arrow_receive_challenge.svg'
import ExerciseBody from '../assets/svg/body.svg'
import ExerciseEye from '../assets/svg/eye.svg'

import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'

export function Challenges() {
  const {
    ChallengeActive,
    resetChallengeFailed,
    CurrentExpirienceAndLevelUp
  } = useContext(ChallengesContext)

  const { handleResetCutdown } = useContext(CountdownContext)

  function handleChallengeFailed() {
    handleResetCutdown()
    resetChallengeFailed()
  }

  function handleChallengeSuccessed() {
    handleResetCutdown()
    CurrentExpirienceAndLevelUp()
  }

  return (
    <Container>
      <Content>
        {ChallengeActive ? (
          <section className="isChallengeActive">
            <h3>Ganhe {ChallengeActive.amount} xp</h3>

            <span className="divider"></span>

            <div className="challenge">
              {ChallengeActive.type === 'body' ? (
                <ExerciseBody />
              ) : (
                <ExerciseEye />
              )}
              <h1>Exercite-se</h1>
              <p>{ChallengeActive.description}</p>
            </div>

            <div className="buttonsChallenge">
              <button
                className="failedChallenge"
                type="button"
                onClick={handleChallengeFailed}
              >
                Falhei
              </button>
              <button
                className="successChallenge"
                type="button"
                onClick={handleChallengeSuccessed}
              >
                Completei
              </button>
            </div>
          </section>
        ) : (
          <section className="notChallengeActive">
            <h2>
              Inicie um ciclo e no fim receba desafios a serem completados
            </h2>

            <div>
              <ArrowNewChallenge />
              <p>Complete os desafios, ganhe experiência e avance de level.</p>
            </div>
          </section>
        )}
      </Content>
    </Container>
  )
}

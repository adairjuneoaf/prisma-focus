import React, { useContext } from 'react'
import { Container, Content } from '../styles/components/Challenges'

import ArrowNewChallenge from '../assets/svg/arrow_receive_challenge.svg'
import ExerciseBody from '../assets/svg/body.svg'
import ExerciseEye from '../assets/svg/eye.svg'
import { ChallengesContext } from '../contexts/ChallengesContext'

export function Challenges() {
  const { ChallengeActive, resetChallengeFailed } = useContext(
    ChallengesContext
  )

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
                onClick={resetChallengeFailed}
              >
                Falhei
              </button>
              <button className="successChallenge" type="button">
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

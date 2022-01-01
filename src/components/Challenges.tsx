import React from 'react'
import { Container, Content } from '../styles/components/Challenges'

import ArrowNewChallenge from '../assets/svg/arrow_receive_challenge.svg'
import Exercise01 from '../assets/svg/exercise_01.svg'

export function Challenges() {
  const challengeActive = true

  return (
    <Container>
      <Content>
        {challengeActive ? (
          <section className="isChallengeActive">
            <h3>Ganhe 400 xp</h3>

            <span className="divider"></span>

            <div className="challenge">
              <Exercise01 />
              <h1>Exercite-se</h1>
              <p>
                É agora Diegão, bora lá meu parça. Caminhe por 3 minutos e
                estique suas pernas pra você ficar saudável.
              </p>
            </div>

            <div className="buttonsChallenge">
              <button className="failedChallenge" type="button">
                Falhei
              </button>
              <button className="successChallenge" type="button">
                Completei
              </button>
            </div>
          </section>
        ) : (
          <section className="notChallengeActive">
            <h2>Inicie um ciclo para receber desafios a serem completados</h2>

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

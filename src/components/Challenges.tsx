import React from 'react'
import { Content } from '../styles/components/Challenges'

import ArrowNewChallenge from '../assets/svg/arrow_receive_challenge.svg'

export function Challenges() {
  return (
    <Content>
      <h2>Inicie um ciclo para receber desafios</h2>

      <div>
        <ArrowNewChallenge />
        <p>Avance de level completando os desafios.</p>
      </div>
    </Content>
  )
}

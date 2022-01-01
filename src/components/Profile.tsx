import React, { useContext } from 'react'
import { Content } from '../styles/components/Profile'

import LevelUpImg from '../assets/svg/arrow-up-level.svg'
import { ChallengesContext } from '../contexts/ChallengesContext'

export default function Profile() {
  const { ChallengeCompleted } = useContext(ChallengesContext)

  return (
    <Content>
      <section className="profileUser">
        <img
          src="https://pbs.twimg.com/profile_images/1224120784576225280/1YV9gtqB_400x400.jpg"
          alt="Foto de Perfil"
          className="imgProfile"
        />

        <div className="infoProfile">
          <h3>Adair Juneo</h3>
          <div className="levelProfile">
            <LevelUpImg />
            <p>Level 1</p>
          </div>
        </div>
      </section>

      <section className="challengesComplete">
        <div className="challengesCounter">
          <h3>Desafios completos</h3>
          <h3>{ChallengeCompleted}</h3>
        </div>
      </section>
    </Content>
  )
}

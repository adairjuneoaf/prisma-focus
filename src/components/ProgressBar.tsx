import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { Content } from '../styles/components/ProgressBar'

export default function ProgressBar() {
  const { CurrentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  )

  const percentToNextLevel =
    Math.round(CurrentExperience * 100) / experienceToNextLevel

  return (
    <Content>
      <section className="progressBar">
        <div className="expInitial">0 xp</div>
        <div className="expProgress">
          <span
            className="expBarProgress"
            style={{ width: `${percentToNextLevel}%` }}
          ></span>
        </div>
        <div className="expFinal">{experienceToNextLevel} xp</div>
      </section>
    </Content>
  )
}

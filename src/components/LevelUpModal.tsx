import React, { useContext } from 'react'
import Modal from 'react-modal'

import { Content } from '../styles/components/LevelUpModal'

import CloseIcon from '../assets/svg/close.svg'
import { ChallengesContext } from '../contexts/ChallengesContext'

export function LevelUpModal() {
  const { Level, isLevelUpModalOpen, LevelUpModalClose } = useContext(
    ChallengesContext
  )

  return (
    <Modal
      isOpen={isLevelUpModalOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={LevelUpModalClose}
      >
        <CloseIcon />
      </button>
      <Content>
        <div className="level">
          <h1>{Level}</h1>
        </div>
        <h2>Parabéns</h2>
        <p>Você alcançou um novo level!</p>
      </Content>
    </Modal>
  )
}

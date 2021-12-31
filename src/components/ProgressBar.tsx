import React from 'react'
import { Content } from '../styles/components/ProgressBar'

export default function ProgressBar() {
  return (
    <Content>
      <section className="progressBar">
        <div className="expInitial">0 xp</div>
        <div className="expProgress">
          <span className="expBarProgress"></span>
        </div>
        <div className="expFinal">600 xp</div>
      </section>
    </Content>
  )
}

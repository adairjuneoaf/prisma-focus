import React from 'react'
import Head from 'next/head'

import { Container, Content } from '../styles/pages/Home'
import ProgressBar from '../components/ProgressBar'
import Profile from '../components/Profile'
import { Timer } from '../components/Timer'
import { Challenges } from '../components/Challenges'

import { CountdownProvider } from '../contexts/CountdownContext'

export default function Home() {
  return (
    <>
      <Head>
        <title>prisma.focus</title>
      </Head>
      <Container>
        <ProgressBar />

        <CountdownProvider>
          <Content>
            <section className="sideLeft">
              <Profile />
              <Timer />
            </section>
            <section className="sideRight">
              <Challenges />
            </section>
          </Content>
        </CountdownProvider>
      </Container>
    </>
  )
}

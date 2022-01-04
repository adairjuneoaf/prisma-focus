import React, { useState } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import GlobalStyle from '../styles/global'

import * as cookie from 'cookie'

import { Container, Content } from '../styles/pages/Home'
import ProgressBar from '../components/ProgressBar'
import Profile from '../components/Profile'
import { Timer } from '../components/Timer'
import { Challenges } from '../components/Challenges'

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'

interface HomeProps {
  Level: number
  CurrentExperience: number
  ChallengeCompleted: number
}

export default function Home(props: HomeProps) {
  const [ToggleTheme, setToggleTheme] = useState(lightTheme)

  function ThemeSelector() {
    setToggleTheme(ToggleTheme === darkTheme ? lightTheme : darkTheme)
  }

  return (
    <ThemeProvider theme={ToggleTheme}>
      <ChallengesProvider
        Level={props.Level}
        CurrentExperience={props.CurrentExperience}
        ChallengeCompleted={props.ChallengeCompleted}
      >
        <Head>
          <title>prisma.focus</title>
        </Head>
        <Container>
          <ProgressBar />

          <CountdownProvider>
            <Content>
              <section className="sideLeft">
                <Profile ThemeSelector={ThemeSelector} />
                <Timer />
              </section>
              <section className="sideRight">
                <Challenges />
              </section>
            </Content>
          </CountdownProvider>
        </Container>
      </ChallengesProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { Level, CurrentExperience, ChallengeCompleted } = cookie.parse(
    req.headers.cookie
  )

  return {
    props: {
      Level: Number(Level),
      CurrentExperience: Number(CurrentExperience),
      ChallengeCompleted: Number(ChallengeCompleted)
    }
  }
}

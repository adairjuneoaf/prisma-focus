import React from 'react'
import Head from 'next/head'

import { Container, Content } from '../styles/pages/Home'
import ProgressBar from '../components/ProgressBar'
import Profile from '../components/Profile'

export default function Home() {
  return (
    <>
      <Head>
        <title>prisma.focus</title>
      </Head>
      <Container>
        <ProgressBar />

        <Content>
          <section className="sideLeft">
            <Profile />
          </section>
          <section className="sideRight">
            <Profile />
          </section>
        </Content>
      </Container>
    </>
  )
}

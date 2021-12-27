import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/images/rocketseat.svg'

import { Container } from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>prisma.focus</title>
      </Head>

      <RocketseatLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
    </Container>
  )
}

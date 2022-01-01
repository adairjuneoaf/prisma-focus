import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { lightTheme /*, darkTheme */ } from '../styles/theme'

import { ChallengesProvider } from '../contexts/ChallengesContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <ChallengesProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </ChallengesProvider>
    </ThemeProvider>
  )
}

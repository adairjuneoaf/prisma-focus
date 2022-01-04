import React, { createContext, ReactNode, useState } from 'react'
import { lightTheme, darkTheme } from '../styles/theme'

interface ChooseThemeProviderProps {
  children: ReactNode
}

interface ChooseThemeContextProps {
  // ThemeSelectorDark: () => void
  // ThemeSelectorLight: () => void
  // ThemeActive: {
  //   colors: {
  //     background: string
  //     text: string
  //     primary: string
  //   }
  // }
  ThemeSelector: () => void
}

export const ChooseThemeContext = createContext({} as ChooseThemeContextProps)

export function ChooseThemeProvider({ children }: ChooseThemeProviderProps) {
  const [ThemeActive, setThemeActive] = useState(lightTheme)

  // function ThemeSelectorDark() {
  //   setThemeActive(darkTheme)
  // }
  // function ThemeSelectorLight() {
  //   setThemeActive(lightTheme)
  // }
  function ThemeSelector() {
    setThemeActive(ThemeActive === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ChooseThemeContext.Provider
      // value={{ ThemeSelectorDark, ThemeSelectorLight, ThemeActive }}
      value={{ ThemeSelector }}
    >
      {children}
    </ChooseThemeContext.Provider>
  )
}

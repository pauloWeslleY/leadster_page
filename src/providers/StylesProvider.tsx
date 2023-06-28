'use client'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/styles/theme'
import GlobalStyle from '@/styles/global'

interface ProviderProps {
  children: ReactNode
}

export const StylesProvider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

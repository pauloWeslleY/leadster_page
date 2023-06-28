import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { StylesProvider } from '@/providers/StylesProvider'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'Leadster Page',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StylesProvider>{children}</StylesProvider>
      </body>
    </html>
  )
}

import { Stack } from '@mui/material'
import React, { ReactNode } from 'react'
import Footer from './MainLayout/Footer'
import Header from './MainLayout/Header'

interface MainLayout {
  children: ReactNode,

}

export default function MainLayout({ children }) {
  return (
    <Stack>
      <Header />
      <span style={{height: '64px'}} />
      {children}
      <Footer />
    </Stack>
  )
}

import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import React, { ReactNode } from 'react'

interface PageProps {
  title: string,
  children: ReactNode
}

export default function Page({children, title}: PageProps) {
  return (
    <Stack>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Box className={'page-container'} display={'flex'} flex={1} minHeight={'100vh'} bgcolor={'#d9d9d9'} paddingX={{xl: "18%", lg: '8%', md: '4%', sm: 1, xs: 0.5}} >
        {children}
      </Box>
    </Stack>
  )
}

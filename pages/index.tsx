import React from 'react'
import Page from '../components/Page'
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'

import SearchCard from '../components/SearchCard'

export default function Home() {
  return (
    <Page title='Home' >
      <Stack paddingY={6} height={'100%'} alignItems={'center'} flex={1} width={'100%'} >
        <SearchCard />
      </Stack>
    </Page>
  )
}


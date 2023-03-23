import { Stack, Typography } from '@mui/material'
import React from 'react'

import imageBox from '../../../assets/box.png'

interface EmptyListCardProps {
  message: string;
}

export default function EmptyListCard({message}: EmptyListCardProps) {
  return (
    <Stack gap={2} alignItems={'center'} style={{ border: '1px dashed gray' }} bgcolor={'white'} px={8} py={6} >
      <img width={'64px'} src={imageBox.src} alt='box' />
      <Typography textAlign={'center'} fontSize={{md: '24px', sm: '18px', xs: '14px'}} >{message}</Typography>
    </Stack>
  )
}

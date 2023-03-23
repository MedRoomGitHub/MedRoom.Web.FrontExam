import { GitHub } from '@mui/icons-material'
import { Stack } from '@mui/material'
import React from 'react'

import styles from '../../../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header} style={{height: '64px'}} >
      <Stack height={'100%'} alignItems={'center'} justifyContent={'center'} >
        <GitHub style={{color: 'white', fontSize: '28px'}} />
      </Stack>
    </header>
  )
}

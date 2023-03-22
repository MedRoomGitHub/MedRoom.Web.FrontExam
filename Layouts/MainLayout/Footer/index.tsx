import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

import styles from '../../../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} >
      <Stack
        bottom={0}
        alignItems={'flex-start'}
        paddingLeft={8}
        px={{ xs: 2}}
        py={8}
        justifyContent={'flex-start'}
        height={'100%'}
      >

        <Stack gap={2} width={'100%'} justifyContent={'space-between'} flexDirection={{xs: 'column', sm: 'row'}} >
          <Stack flex={1}>
            <Typography variant={'caption'} >MedRoom Challenge by:</Typography>
            <Typography variant={'button'} > Mateus Martins</Typography>
          </Stack>
          <Stack flex={1} alignItems={{sm: 'flex-start' }} >
            <Typography variant={'button'} >Créditos</Typography>
            <Link className={styles.link} href="https://www.flaticon.com/free-icons/box" title="box icons">Box icons created by Freepik - Flaticon</Link>
            <Link className={styles.link} href="https://www.flaticon.com/free-icons/cat" title="cat icons">Cat icons created by Dave Gandy - Flaticon</Link>
          </Stack>
        </Stack>
      </Stack>
    </footer>
  )
}

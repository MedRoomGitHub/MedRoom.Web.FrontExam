import { Button, ButtonBase, Card, CircularProgress, Link, Skeleton, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { StarBorder } from '@mui/icons-material'
import { UserRepo } from '../../api/GitHubApi/GitHubApi'


interface CardRepositoryProps {
  repository?: UserRepo,
}

export default function CardPepository({ repository }: CardRepositoryProps) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      style={{
        display: 'flex',
        backgroundColor: '#161b22',
        marginTop: '8px',
        padding: '16px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: isMobile ? 'fit-content' : '140px',
        color: 'gray',
        overflow: isMobile? 'scroll' : 'hidden'
      }} >
      <Stack width={'100%'} gap={1} flexDirection={{sm: 'row', xs: 'column'}} justifyContent={'space-between'} >
        {repository?.html_url &&
          <Link
          order={{xs: 2, sm: 1}}
            href={repository?.html_url}
            target={"_blank"}
            style={{
              color: '#58A6FF',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            <Typography fontSize={{sm: '34px', xs: '24px'}} variant='h4' >{repository.name}</Typography>
          </Link>
        }
        {!repository && <Skeleton width={'240px'} height={'60px'} />}
        <Stack order={{xs: 1, sm: 2}} alignItems={'flex-end'} justifyContent={'flex-end'} height={'100%'}>
          <Stack width={'64px'} border={'1px solid #000'} px={1} py={0.5} flexDirection={'row'} justifyContent={'space-between'} gap={0.5}>
            <StarBorder fontSize='small' />
            {!!repository && repository?.stargazers_count > 99 ? "99+" : repository?.stargazers_count}
            {!repository && <Skeleton width={'42px'} />}
          </Stack>
        </Stack>
      </Stack>
      <Stack pt={2} width={'100%'} alignItems={'flex-start'} >
        {
          repository?.html_url &&
          <Link
            href={repository?.html_url}
            target={"_blank"}
            style={{
              color: 'gray',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            <Typography>{`URL: ${repository?.html_url}`}</Typography>
          </Link>
        }
        {!repository && <Skeleton width={'430px'} />}
      </Stack>
      <Stack width={'100%'} alignItems={'flex-start'}>
        {repository && <Typography>{`Criado em: ${new Date(repository.created_at).toDateString()}`}</Typography>}
        {!repository && <Skeleton />}
      </Stack>
    </Card>
  )
}

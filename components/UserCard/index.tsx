import { Card, Skeleton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { memo } from 'react'
import { UserData } from '../../api/GitHubApi/GitHubApi'

interface UserCardProps {
  userData?: UserData;
  loading?: boolean;
}

function UserCard({ userData, loading }: UserCardProps) {

  const { avatar_url, created_at, location, login } = userData || {}
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const imageSize = isMobile ? '64px' : '120px';

  return (
    <Card>
      <Stack overflow={{xs: 'scroll', sm: 'auto'}} gap={{ xs: 2, sm: 4 }} flexDirection={'row'} color={'white'} bgcolor={'#353535'} justifyContent={'space-between'} padding={2} >
        <Stack alignItems={'center'} justifyContent={'center'} flexDirection={'row'} >
          <Stack style={{ border: "2px solid white" }} borderRadius={'100%'} overflow={'hidden'} >
            {avatar_url && <img width={imageSize} height={imageSize} src={avatar_url} alt={login} />}
            {!avatar_url && loading && <Skeleton variant='circular' width={imageSize} height={imageSize} />}
          </Stack>
        </Stack>

        <Stack flex={1} alignItems={{ xs: 'flex-start', sm: 'center' }} justifyContent={{ sm: 'space-between', xs: 'center' }} flexDirection={{ sm: 'row', xs: 'column' }} >
          {
            login &&
            <Typography
              style={{ overflowWrap: 'break-word' }}
              textOverflow={'clip'}
              fontSize={{ xs: '22px', sm: '34px' }}
              variant='h4'
            >
              {login}
            </Typography>
          }
          {!login &&  loading && <Skeleton height={isMobile ? '40px':'80px'} width={'280px'} />}
          {
            location &&
            <Typography
              style={{ overflowWrap: 'break-word' }}
              textOverflow={'ellipsis'}
              fontSize={{ xs: '16px', sm: '20px' }}
              variant='h6' >
              {location}
            </Typography>
          }
          {!location && loading && <Skeleton height={isMobile?'30px' : '60px'} width={'260px'} />}
        </Stack>
      </Stack>
    </Card>
  )
}

export default memo(UserCard);

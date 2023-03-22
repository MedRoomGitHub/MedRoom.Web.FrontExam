import { Button, ButtonBase, Card, CircularProgress, Link, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { StarBorder } from '@mui/icons-material'
import { Search } from '@mui/icons-material'
import EmptyListCard from './components/EmptyListCard'
import useGitHubApi from '../../api/GitHubApi'
import { UserData, UserRepo } from '../../api/GitHubApi/GitHubApi'
import UserCard from '../UserCard'
import CardPepository from '../CardRepository'
import { Pagination } from '@mui/lab'

const REPO_PER_PAGE = 8;

export default function SearchCard() {

  const api = useGitHubApi();
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [query, setQuery] = useState('');

  const [userData, setUserData] = useState<UserData>(null);
  const [userRepo, setUserRepo] = useState<UserRepo[]>(null);

  const [repoLoading, setRepoLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  async function fetchUser(userName: string) {
    setUserLoading(true);
    await api.findUser({ userNameQuery: userName })
      .then((result) => {
        setUserData(result.data);
      }).catch((reason) => {
      }).finally(() => {
        setUserLoading(false);
      })
  }

  async function fetchUserRepo(userName: string, page: number = 1) {
    setRepoLoading(true);
    await api.listRepoByUserName({ userName, page, per_page: REPO_PER_PAGE })
      .then((result) => {
        setUserRepo(result.data);
      }).catch((reason) => {

      }).finally(() => {
        setRepoLoading(false);
      })
  }

  function handleSearch() {
    if (userLoading || repoLoading) {
      return
    }
    if (query === '') {
      return
    }
    clearData();

    fetchUser(query);
    fetchUserRepo(query);
  }

  function clearData() {
    setUserData(null);
    setUserRepo(null)
  }

  function handlePagination(e, v) {

    setUserRepo(null);
    fetchUserRepo(userData.login, v);

  }

  return (
    <Card style={{ width: '100%' }}>
      <Stack width={'100%'} bgcolor={'#858585'} gap={2}>
        <form onSubmit={(e) => { e.preventDefault(); handleSearch() }} >
          <Stack p={2} flexDirection={'row'} gap={2} style={{ boxShadow: '0px 1px 6px -1px #000' }} >
            <Stack flex={1} bgcolor={'white'} borderRadius={1} >
              <TextField
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                variant='outlined'
                fullWidth
                style={{
                  borderRadius: 0
                }}
                placeholder='Digite o nome do usuário...' />
            </Stack>
            <Button
              disabled={(userLoading || repoLoading)}
              type='submit'
              color='primary'
              style={{ height: '56px', padding: isMobile ? '16px' : '0px 36px', display: 'flex', gap: '12px' }}
              variant='contained'
            >
              {(repoLoading || userLoading) &&
                <>
                  <CircularProgress color='primary' />
                  {!isMobile && <Typography fontSize={{ xs: '14px', sm: '24px' }} style={{ fontWeight: 'lighter' }} >Buscando...</Typography>}
                </>
              }
              {
                !repoLoading &&
                <>
                  <Search fontSize={'large'} />
                  {!isMobile && <Typography fontSize={{ xs: '14px', sm: '24px' }} style={{ fontWeight: 'lighter' }} >Buscar</Typography>}
                </>
              }
            </Button>

          </Stack>
        </form>

        <Stack style={{ padding: '0px 16px 16px 16px' }} >
          {!!userData && <UserCard userData={userData} />}
          {userLoading && <UserCard loading={userLoading} />}

          {
            !!userRepo && userRepo.map((repository) => (
              <CardPepository repository={repository} key={repository.id} />
            ))
          }

          {
            repoLoading && Array.from({ length: REPO_PER_PAGE }).map((v, index) => (
              <CardPepository key={index} />
            ))
          }

          {!userLoading && userData === null && <EmptyListCard message='Procure por um usuário para visualizar as informações' />}

          {userData?.public_repos === 0 && <EmptyListCard message='O usuário não possui repositórios publicos' />}
        </Stack>

        <Stack pb={2} >
          {!!userData && <Pagination color='primary' onChange={handlePagination} count={Math.round(userData.public_repos / REPO_PER_PAGE)} />}
        </Stack>
      </Stack>
    </Card>
  )
}
